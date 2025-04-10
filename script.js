
function escreverNaTela() {

    const nome = document.querySelector('.texto').value;
    if (nome) {

        const mensagem = `Olá, ${nome}! Seja bem-vindo ao nosso site!`;


        const cor = gerarCorAleatoria();
        document.getElementById('mensagem').textContent = mensagem;
    } else {
        alert("Por favor, insira seu nome.");
    }
}


