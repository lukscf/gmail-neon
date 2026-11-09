const DEFAULTS = {
  theme: true, tilt: true, composeFx: true, privacy: false,
  color: "purple", background: "aurora"
};
const COLORS = { purple: "#bd77ff", blue: "#5c9dff", pink: "#ff74bb", cyan: "#4fe0db", green: "#75df95" };
// O popup inteiro acompanha a cor: fundo, painéis, linhas e texto secundário têm o mesmo tom.
// O roxo mantém os tons originais.
const HUES = { blue: 218, pink: 330, cyan: 178, green: 140 };
function tint(color) {
  const root = document.documentElement.style;
  const h = HUES[color];
  for (const p of ["--bg", "--panel", "--line", "--text", "--muted", "--top"]) root.removeProperty(p);
  if (h === undefined) return;
  root.setProperty("--bg", `hsl(${h} 50% 4%)`);
  root.setProperty("--panel", `hsl(${h} 42% 10%)`);
  root.setProperty("--line", `hsl(${h} 30% 24%)`);
  root.setProperty("--text", `hsl(${h} 100% 96%)`);
  root.setProperty("--muted", `hsl(${h} 22% 70%)`);
  root.setProperty("--top", `hsl(${h} 40% 20%)`);
}
const $ = (selector) => document.querySelector(selector);

function status(message, error = false) {
  const el = $("#status");
  el.textContent = message;
  el.style.color = error ? "#ff9db1" : "var(--accent)";
}

function showColor(color) {
  document.documentElement.style.setProperty("--accent", COLORS[color] || COLORS.purple);
  tint(color);
  document.querySelectorAll(".colors button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.color === color));
  });
}

chrome.storage.local.get(DEFAULTS).then((settings) => {
  for (const key of ["theme", "tilt", "composeFx", "privacy"]) $("#" + key).checked = !!settings[key];
  $("#background").value = settings.background;
  showColor(settings.color);
});

for (const key of ["theme", "tilt", "composeFx", "privacy"]) {
  $("#" + key).addEventListener("change", (event) => {
    chrome.storage.local.set({ [key]: event.target.checked });
    status("Preferência salva.");
  });
}
$("#background").addEventListener("change", (event) => {
  chrome.storage.local.set({ background: event.target.value });
  status("Fundo atualizado.");
});
document.querySelectorAll(".colors button").forEach((button) => button.addEventListener("click", () => {
  const color = button.dataset.color;
  showColor(color);
  chrome.storage.local.set({ color });
  status("Cor atualizada.");
}));

$("#markRead").addEventListener("click", async () => {
  const button = $("#markRead");
  button.disabled = true;
  status("Procurando os controles do Gmail…");
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id || !tab.url?.startsWith("https://mail.google.com/mail/")) {
      throw new Error("Abra uma aba do Gmail para usar este botão.");
    }
    const result = await chrome.tabs.sendMessage(tab.id, { type: "markAllRead" });
    if (!result?.ok) throw new Error(result?.error || "O Gmail não respondeu.");
    status(result.message || "Comando enviado ao Gmail.");
  } catch (error) {
    status(error.message || "Não foi possível usar os controles do Gmail.", true);
  } finally {
    button.disabled = false;
  }
});

// Diagnóstico: mostra se a extensão está ativa nesta aba e em qual conta (u/0, u/1...).
(async () => {
  const diag = $("#diag");
  const version = chrome.runtime.getManifest().version;
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.url?.startsWith("https://mail.google.com/mail/")) {
      diag.textContent = `GM Neon ${version}. Abra o Gmail para ver o diagnóstico.`;
      return;
    }
    const info = await chrome.tabs.sendMessage(tab.id, { type: "ping" });
    diag.textContent = `GM Neon ${version} ativo na conta u/${info.account}. Tema ${info.theme ? "aplicado" : "desligado"}.`;
  } catch {
    diag.textContent = `GM Neon ${version} instalado, mas não está rodando nesta aba. Recarregue o Gmail (F5).`;
  }
})();
