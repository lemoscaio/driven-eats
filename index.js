function clicarOpcao(divPai, opcao) {
    const selecionado = document.querySelector("." + divPai + " .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    }
    const prato = document.querySelector("." + opcao);
    prato.classList.add("selecionado")

    verificarSePedidoCompleto();
}

function verificarSePedidoCompleto() {
    let contador = 0;
    const pratos = document.querySelectorAll(".prato");
    pratos.forEach((prato) => {

        // console.log(prato);
        if (prato.classList.contains("selecionado")) {
            contador += 1;
        }
    });

    // console.log(contador);

    const botaoPedidoCompleto = document.querySelector(".barra-inferior--pedido-completo");

    if (contador === 3) {
        botaoPedidoCompleto.classList.remove("escondido")
    }

    // Essa linha adicona a função de esconder novamente a barras do pedido. Precisa trocar todos "add" para "toggle" nas classList

    /* else if (contador < 3) {
        botaoPedidoCompleto.classList.add("escondido")
        } */
}

function buscarInformacoesPedido() {
    let total = 0;
    let totalExibicao = ""
    let resumoPratos = [];
    let totalFormatado = ""
    const pratosSelecionados = document.querySelectorAll(".selecionado");

    pratosSelecionados.forEach(prato => {

        const elementoNomePrato = prato.querySelector('[data-identifier="food-title"]');
        const nomePrato = elementoNomePrato.innerText
        console.log(nomePrato)

        let elementoPreco = prato.querySelector('[data-identifier="food-price"]');
        let precoPrato = elementoPreco.innerText;

        const precoExibicao = precoPrato.replace("R$ ", "")

        precoPrato = precoExibicao.replace(",", ".");

        precoPrato = parseFloat(precoPrato);

        total += precoPrato;

        totalFormatado = total.toFixed(2)
        
        totalExibicao = totalFormatado.toString()

        totalExibicao = totalExibicao.replace(".", ",");

        resumoPratos.push(nomePrato);

        criarTelaFinalizacaoPedido(nomePrato, precoExibicao);
    })

    criarTotalTelaFinalizacaoPedido(totalExibicao);


    return resumo = [resumoPratos, totalFormatado];

}

function abrirTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao")
    const telaPrincipal = document.querySelector("#tela-principal")
    telaConfirmacao.classList.remove("escondido")
    telaPrincipal.classList.add("esmaecido")

    buscarInformacoesPedido()
}

function criarTelaFinalizacaoPedido(nomePrato, precoPrato) {
    const telaConfirmacao = document.querySelector(".tela-confirmacao__pedidos");
    const pratoConteudo =
        `<div class="tela-confirmacao__prato">
            <p class="tela-confirmacao__prato-nome">
                ${nomePrato}
            </p>
            <p class="tela-confirmacao__prato-preco">
                ${precoPrato}
            </p>
        </div>`;

    telaConfirmacao.innerHTML += pratoConteudo;


}

function criarTotalTelaFinalizacaoPedido(totalExibicao) {
    const telaConfirmacao = document.querySelector(".tela-confirmacao__pedidos");
    
    const totalConteudo =
        `<div class="tela-confirmacao__total">
            <p class="tela-confirmacao__total-nome">
                TOTAL
            </p>
            <p class="tela-confirmacao__total-preco">
            R$ ${totalExibicao}
            </p>
        </div>`;

    telaConfirmacao.innerHTML += totalConteudo;

}

function fecharTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao")
    const telaPrincipal = document.querySelector("#tela-principal")
    telaConfirmacao.classList.add("escondido")
    telaPrincipal.classList.remove("esmaecido")

    desfazerTelaFinalizacaoPedido()
}

function desfazerTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao__pedidos");

    telaConfirmacao.innerHTML = "";
}

function criarMensagemWhatsapp() {

    let nomeUsuario = prompt("Qual o seu nome?")
    let enderecoUsuario = prompt("Qual o seu endereço? Exemplo: Rua Dias da Cruz, 01 - Méier")

    let prato1 = (resumo[0][0]);
    let prato2 = (resumo[0][1]);
    let prato3 = (resumo[0][2]);

    let total = (resumo[1])

    let numeroCelular = 552120420558;
    let mensagem =
        `Olá, gostaria de fazer o pedido:
- Prato: ${prato1}
- Bebida: ${prato2}
- Sobremesa: ${prato3}
Total: R$ ${total}
                
Nome: ${nomeUsuario}
Endereço: ${enderecoUsuario}`

    let mensagemTransformada = encodeURIComponent(mensagem)

    let mensagemWhatsapp = `https://wa.me/${numeroCelular}?text=${mensagemTransformada}`;

    return mensagemWhatsapp
}

function mandarMensagemParaWhatsapp() {
    let linkWhatsapp = criarMensagemWhatsapp()

    window.open(linkWhatsapp);
}
