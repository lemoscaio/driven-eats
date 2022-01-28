function clicarPrato() {
    const prato1 = document.querySelector(".prato1");
    const prato2 = document.querySelector(".prato2");
    const prato3 = document.querySelector(".prato3");
    prato1.addEventListener("click", () => {
        if (prato2.classList.contains("selecionado") || prato3.classList.contains("selecionado")) {
            prato1.classList.add("selecionado");
            prato2.classList.remove("selecionado");
            prato3.classList.remove("selecionado");
        } else { prato1.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    prato2.addEventListener("click", () => {
        if (prato1.classList.contains("selecionado") || prato3.classList.contains("selecionado")) {
            prato2.classList.add("selecionado");
            prato1.classList.remove("selecionado");
            prato3.classList.remove("selecionado");
        } else { prato2.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    prato3.addEventListener("click", () => {
        if (prato1.classList.contains("selecionado") || prato2.classList.contains("selecionado")) {
            prato3.classList.add("selecionado");
            prato1.classList.remove("selecionado");
            prato2.classList.remove("selecionado");
        } else { prato3.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })


}

function clicarBebida() {
    const bebida1 = document.querySelector(".bebida1");
    const bebida2 = document.querySelector(".bebida2");
    const bebida3 = document.querySelector(".bebida3");
    bebida1.addEventListener("click", () => {
        if (bebida2.classList.contains("selecionado") || bebida3.classList.contains("selecionado")) {
            bebida1.classList.add("selecionado");
            bebida2.classList.remove("selecionado");
            bebida3.classList.remove("selecionado");
        } else { bebida1.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    bebida2.addEventListener("click", () => {
        if (bebida1.classList.contains("selecionado") || bebida3.classList.contains("selecionado")) {
            bebida2.classList.add("selecionado");
            bebida1.classList.remove("selecionado");
            bebida3.classList.remove("selecionado");
        } else { bebida2.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    bebida3.addEventListener("click", () => {
        if (bebida1.classList.contains("selecionado") || bebida2.classList.contains("selecionado")) {
            bebida3.classList.add("selecionado");
            bebida1.classList.remove("selecionado");
            bebida2.classList.remove("selecionado");
        } else { bebida3.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })

}

function clicarSobremesa() {
    const sobremesa1 = document.querySelector(".sobremesa1");
    const sobremesa2 = document.querySelector(".sobremesa2");
    const sobremesa3 = document.querySelector(".sobremesa3");
    sobremesa1.addEventListener("click", () => {
        if (sobremesa2.classList.contains("selecionado") || sobremesa3.classList.contains("selecionado")) {
            sobremesa1.classList.add("selecionado");
            sobremesa2.classList.remove("selecionado");
            sobremesa3.classList.remove("selecionado");
        } else { sobremesa1.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    sobremesa2.addEventListener("click", () => {
        if (sobremesa1.classList.contains("selecionado") || sobremesa3.classList.contains("selecionado")) {
            sobremesa2.classList.add("selecionado");
            sobremesa1.classList.remove("selecionado");
            sobremesa3.classList.remove("selecionado");
        } else { sobremesa2.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
    sobremesa3.addEventListener("click", () => {
        if (sobremesa1.classList.contains("selecionado") || sobremesa2.classList.contains("selecionado")) {
            sobremesa3.classList.add("selecionado");
            sobremesa1.classList.remove("selecionado");
            sobremesa2.classList.remove("selecionado");
        } else { sobremesa3.classList.add("selecionado"); }
        verificarSePedidoCompleto();
    })
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
    const pratosSelecionados = document.querySelectorAll(".selecionado");
    pratosSelecionados.forEach(prato => {
        const nome = prato.querySelector('[data-identifier="food-title"]');
        const nomePrato = nome.innerText
        console.log(nomePrato)

        const preco = prato.querySelector('[data-identifier="food-price"]');
        const precoPrato = preco.innerText
        console.log(precoPrato)

        criarTelaFinalizacaoPedido(nomePrato, precoPrato)
    }
    )
}



function abrirTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao")
    const telaPrincipal = document.querySelector("#tela-principal")
    telaConfirmacao.classList.remove("escondido")
    telaPrincipal.classList.add("esmaecido")
    
    buscarInformacoesPedido()
}

function fecharTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao")
    const telaPrincipal = document.querySelector("#tela-principal")
    telaConfirmacao.classList.add("escondido")
    telaPrincipal.classList.remove("esmaecido")

    desfazerTelaFinalizacaoPedido()
}

function criarTelaFinalizacaoPedido(nomePrato, precoPrato) {
    const telaConfirmacao = document.querySelector(".tela-confirmacao__pedidos");
    
    const pratoConteudo = `
        <div class="tela-confirmacao__prato">
        <p class="tela-confirmacao__prato-nome">
        ${nomePrato}
            </p>
            <p class="tela-confirmacao__prato-preco">
                ${precoPrato}
                </p>
                </div>`;

    telaConfirmacao.innerHTML += pratoConteudo;
            
}

function desfazerTelaFinalizacaoPedido() {
    const telaConfirmacao = document.querySelector(".tela-confirmacao__pedidos");

    telaConfirmacao.innerHTML = "";
}

clicarPrato();
clicarBebida();
clicarSobremesa();

/*

    `<div class="tela-confirmacao__prato">
        <p class="tela-confirmacao__prato-nome">
            ${nomePrato}
        </p>
        <p class="tela-confirmacao__prato-preco">
            ${precoPrato}
        </p>
    "</div>
        `


*/