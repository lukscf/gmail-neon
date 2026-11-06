# GM Neon para Gmail

Extensão Chrome Manifest V3 baseada na prévia aprovada no chat. Não inclui transcrição de áudio.

## Instalar

1. Extraia o ZIP em uma pasta permanente.
2. Abra `chrome://extensions`, ative **Modo do desenvolvedor** e clique em **Carregar sem compactação**.
3. Escolha a pasta `gmail-neon-extension` extraída e recarregue a aba do Gmail.

O Chrome não instala um ZIP diretamente pela tela de extensões; é preciso extraí-lo primeiro.

## Novidades da 1.3.6

- Com o mouse no menu da esquerda (ou em qualquer ponto fora da caixa da conversa), a caixa continua seguindo o cursor. O brilho agora encosta na borda mais próxima e acompanha o movimento, em vez de sair da caixa e sumir. O evento de mouse é ouvido na fase de captura, então nenhum elemento do Gmail o bloqueia.

## Novidades da 1.3.5

- O ícone da barra do Chrome acompanha a cor escolhida no popup (roxo, azul, rosa, ciano ou verde) e troca na hora. Quem faz a troca é um service worker pequeno (`background.js`), que só lê a cor salva. Ele não acessa o Gmail nem pede permissão nova.
- Em `chrome://extensions` o ícone continua roxo: o Chrome usa ali o ícone fixo do manifest e não permite trocá-lo.

## Novidades da 1.3.4

- Ícone próprio: envelope neon magenta/violeta sobre fundo escuro arredondado, em 16, 32, 48 e 128 px (`icons/`). Aparece na barra do Chrome, em `chrome://extensions` e no menu de extensões, no lugar da letra genérica.

## Novidades da 1.3.3

- Com uma conversa aberta, o painel principal acompanha o mouse em qualquer ponto da janela, não só quando o cursor está em cima dele. A inclinação 3D leve e o brilho neon reagem ao cursor na barra lateral, no topo ou fora do painel. Nas bordas da tela a inclinação chega ao máximo.
- Quando o mouse sai da janela, o painel volta ao centro suavemente.
- Usa um único `pointermove` passivo, com o trabalho num `requestAnimationFrame`. Respeita "reduzir movimento" do sistema e a opção de inclinação do popup.

## Novidades da 1.3.2

- Rodapé do compose redesenhado: ícones brancos (formatação, anexo, link, emoji, Drive, foto, modo confidencial, assinatura, mais e descartar) que entram em sequência quando o compose abre e, no hover, sobem, crescem, giram de leve e brilham.
- Enviar e a seta de opções viraram um botão único em gradiente neon com texto branco, um brilho que atravessa no hover, pulso suave enquanto o compose está aberto e efeito de clique.

## Novidades da 1.3.1

- A janela da conversa aberta também acompanha o mouse em 3D, de leve (no máximo ~1,5°, para não atrapalhar a leitura), com borda neon e um brilho suave no ponto do cursor.

## Novidades da 1.3.0

- Hover 3D que segue o mouse: itens do menu lateral, faixa Mail/Chat/Meet, Escrever, botões da barra, "Marcar tudo como lido" e Responder/Encaminhar inclinam conforme a posição exata do cursor, com um pequeno degradê de luz no ponto onde o mouse está (o mesmo efeito das linhas de e-mail).
- Desligue em "Hover 3D com o mouse" no popup, se preferir.

## Novidades da 1.2.2

- Corrige o menu lateral em contas Google Workspace (e-mail da empresa): lá o Gmail usa o layout integrado com Chat/Meet e as pastas ficam fora da área que o tema procurava. Agora o menu 3D vale nos dois layouts, e a faixa Mail/Chat/Meet também ganhou o visual neon.

## Novidades da 1.2.1

- Menus com estrutura diferente (Gmail de contas Google Workspace, menus antigos `.J-M`/`.SK`) também recebem o fundo sólido do tema, detectados automaticamente.
- Diagnóstico no popup: mostra a versão e se a extensão está ativa na aba aberta e em qual conta (u/0, u/1...).

## Se uma conta (ex.: da empresa) não pegar o tema

1. Abra o popup do GM Neon na aba dessa conta e leia a linha de diagnóstico.
2. Se disser "não está rodando nesta aba": recarregue o Gmail (F5). Se persistir, a conta pode estar em outro perfil do Chrome — instale a extensão nesse perfil também.
3. Em `chrome://extensions`, confira a versão do GM Neon nesse perfil e se aparece "bloqueada pelo administrador". Em `chrome://policy`, políticas como `ExtensionInstallBlocklist` ou `ExtensionSettings` indicam bloqueio pela empresa.

## Novidades da 1.2.0

- Menu lateral redesenhado: cada item é um cartão 3D que inclina conforme o mouse, ganha brilho e relevo; o ícone salta e um reflexo passa pelo cartão. O item ativo fica em relevo com a cor do tema e os contadores viram badges.
- Compose legível: campos Para/Assunto e corpo escuros com texto claro (antes o texto ficava branco sobre branco), título "Nova mensagem" visível e botão Enviar neon.
- Corretor automático de contraste: qualquer superfície clara que o Gmail mantenha (cartão do Google Tradutor, abas das Configurações, chips) vira escura, e texto escuro sobre fundo escuro vira claro.
- Selects das Configurações no tema.

## Novidades da 1.1.0

- Menus e pop-ups do Gmail (como o ⋮ dentro de uma mensagem) agora têm fundo sólido no tema neon, em vez de transparente.
- Conversa aberta legível: assunto, remetentes, datas e etiquetas ficam claros. E-mails HTML com texto escuro são convertidos para o modo escuro, preservando as imagens.
- Botões no visual do mockup: Escrever com contorno neon e brilho, barra de ferramentas em cartão com botões de ícone arredondados, item ativo do menu lateral com barra neon e pílulas neon em Responder/Encaminhar.
- Botão **Marcar tudo como lido** direto na barra da Caixa de entrada (pede confirmação antes).

## Atualizar a partir de uma versão anterior

1. Extraia o ZIP novo por cima da pasta antiga (ou em uma pasta nova).
2. Em `chrome://extensions`, clique em **Recarregar** (↻) no cartão do GM Neon. Se usou uma pasta nova, remova a versão antiga e use **Carregar sem compactação** na pasta nova.
3. Recarregue a aba do Gmail.

## Recursos

- Tema escuro com cinco cores e dez opções de fundo (incluindo nenhum).
- Hover 3D que acompanha o mouse nas linhas de e-mail.
- Animação ao abrir, fechar e enviar pelo compositor nativo do Gmail.
- Modo discreto, ativável também por **Alt+P**.
- Botão **Marcar tudo como lido** no popup e na barra da Caixa de entrada. Use-o na Caixa de entrada. Ele usa os controles nativos do Gmail e só executa quando consegue identificá-los. Se o Gmail não oferecer a seleção de todas as conversas numa caixa com pelo menos 50 mensagens visíveis, a extensão desmarca a seleção e interrompe a ação.

As preferências ficam no armazenamento local do Chrome. A extensão não envia conteúdo de e-mails para nenhum servidor próprio nem usa Gmail API. O botão de marcar como lido altera a conta por meio da interface do Gmail, conforme solicitado.

## Limites

O Gmail muda sua estrutura HTML com frequência. O tema e as animações usam seletores visuais; o botão de marcar como lido depende dos nomes acessíveis dos controles do Gmail. Caso ele não encontre os controles, use o fluxo nativo do Gmail: selecione as mensagens e clique em **Marcar como lido**.
