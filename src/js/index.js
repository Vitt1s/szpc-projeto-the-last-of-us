const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
// console.log(botoesCarrossel);
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // console.log('clicou no botão');
        desativarBotaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconderImagemAtiva();
        // console.log(imagens);
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    // console.log(botaoSelecionado.classList);
    botaoSelecionado.classList.remove('selecionado');
}
