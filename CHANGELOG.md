# Histórico de versões

## 1.3.6

- Com o mouse no menu da esquerda (ou em qualquer ponto fora da caixa da conversa), a caixa continua seguindo o cursor. O brilho agora encosta na borda mais próxima e acompanha o movimento, em vez de sair da caixa e sumir. O evento de mouse é ouvido na fase de captura, então nenhum elemento do Gmail o bloqueia.

## 1.3.5

- O ícone da barra do Chrome acompanha a cor escolhida no popup (roxo, azul, rosa, ciano ou verde) e troca na hora. Quem faz a troca é um service worker pequeno (`background.js`), que só lê a cor salva. Ele não acessa o Gmail nem pede permissão nova.
- Em `chrome://extensions` o ícone continua roxo: o Chrome usa ali o ícone fixo do manifest e não permite trocá-lo.

## 1.3.4

- Ícone próprio: envelope neon magenta/violeta sobre fundo escuro arredondado, em 16, 32, 48 e 128 px (`icons/`). Aparece na barra do Chrome, em `chrome://extensions` e no menu de extensões, no lugar da letra genérica.

## 1.3.3

- Com uma conversa aberta, o painel principal acompanha o mouse em qualquer ponto da janela, não só quando o cursor está em cima dele. A inclinação 3D leve e o brilho neon reagem ao cursor na barra lateral, no topo ou fora do painel. Nas bordas da tela a inclinação chega ao máximo.
- Quando o mouse sai da janela, o painel volta ao centro suavemente.
- Usa um único `pointermove` passivo, com o trabalho num `requestAnimationFrame`. Respeita "reduzir movimento" do sistema e a opção de inclinação do popup.

## 1.3.2

- Rodapé do compose redesenhado: ícones brancos (formatação, anexo, link, emoji, Drive, foto, modo confidencial, assinatura, mais e descartar) que entram em sequência quando o compose abre e, no hover, sobem, crescem, giram de leve e brilham.
- Enviar e a seta de opções viraram um botão único em gradiente neon com texto branco, um brilho que atravessa no hover, pulso suave enquanto o compose está aberto e efeito de clique.

## 1.3.1

- A janela da conversa aberta também acompanha o mouse em 3D, de leve (no máximo ~1,5°, para não atrapalhar a leitura), com borda neon e um brilho suave no ponto do cursor.

## 1.3.0

- Hover 3D que segue o mouse: itens do menu lateral, faixa Mail/Chat/Meet, Escrever, botões da barra, "Marcar tudo como lido" e Responder/Encaminhar inclinam conforme a posição exata do cursor, com um pequeno degradê de luz no ponto onde o mouse está (o mesmo efeito das linhas de e-mail).
- Desligue em "Hover 3D com o mouse" no popup, se preferir.

## 1.2.2

- Corrige o menu lateral em contas Google Workspace (e-mail da empresa): lá o Gmail usa o layout integrado com Chat/Meet e as pastas ficam fora da área que o tema procurava. Agora o menu 3D vale nos dois layouts, e a faixa Mail/Chat/Meet também ganhou o visual neon.

## 1.2.1

- Menus com estrutura diferente (Gmail de contas Google Workspace, menus antigos `.J-M`/`.SK`) também recebem o fundo sólido do tema, detectados automaticamente.
- Diagnóstico no popup: mostra a versão e se a extensão está ativa na aba aberta e em qual conta (u/0, u/1...).

## 1.2.0

- Menu lateral redesenhado: cada item é um cartão 3D que inclina conforme o mouse, ganha brilho e relevo; o ícone salta e um reflexo passa pelo cartão. O item ativo fica em relevo com a cor do tema e os contadores viram badges.
- Compose legível: campos Para/Assunto e corpo escuros com texto claro (antes o texto ficava branco sobre branco), título "Nova mensagem" visível e botão Enviar neon.
- Corretor automático de contraste: qualquer superfície clara que o Gmail mantenha (cartão do Google Tradutor, abas das Configurações, chips) vira escura, e texto escuro sobre fundo escuro vira claro.
- Selects das Configurações no tema.

## 1.1.0

- Menus e pop-ups do Gmail (como o ⋮ dentro de uma mensagem) agora têm fundo sólido no tema neon, em vez de transparente.
- Conversa aberta legível: assunto, remetentes, datas e etiquetas ficam claros. E-mails HTML com texto escuro são convertidos para o modo escuro, preservando as imagens.
- Botões no visual do mockup: Escrever com contorno neon e brilho, barra de ferramentas em cartão com botões de ícone arredondados, item ativo do menu lateral com barra neon e pílulas neon em Responder/Encaminhar.
- Botão **Marcar tudo como lido** direto na barra da Caixa de entrada (pede confirmação antes).

## 1.0.0

- Versão inicial: tema neon, fundos animados, hover 3D nas linhas de e-mail, animações do compose, modo discreto e marcar tudo como lido.
