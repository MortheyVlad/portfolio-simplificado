/* Objetivo 1 - quando o usuário clicar no botão de mostrar mais,
deve abrir os projetos escondidos no HTML.
    Passo 1 - pegar o botão de mostrar mais no JS para poder verificar quando
    o usuário clicar em cima dele.

    Passo 2 - Identificar o clique no botão.

    Passo 3 - adicionar a classe "ativo" nos projetos que estão escondidos

Objetivo 2 - Esconder o botão de mostrar mais
*/
const botaoMostrarMais = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarMais.addEventListener('click', () => {
    MostrarMaisProjetos();

    EsconderBotao();
});

function EsconderBotao() {
    botaoMostrarMais.classList.add('remover');
}

function MostrarMaisProjetos() {
    projetosinativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

