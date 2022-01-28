function clicarPrato() { 
    const prato1 = document.querySelector(".prato1");
    const prato2 = document.querySelector(".prato2");
    const prato3 = document.querySelector(".prato3");
    prato1.addEventListener("click", () => {
        if(prato2.classList.contains("selecionado") || prato3.classList.contains("selecionado")) {
        prato1.classList.toggle("selecionado");
        prato2.classList.remove("selecionado");
        prato3.classList.remove("selecionado");
        } else {prato1.classList.toggle("selecionado");}
    })
    prato2.addEventListener("click", () => {
        if(prato1.classList.contains("selecionado") || prato3.classList.contains("selecionado")) {
            prato2.classList.toggle("selecionado");
            prato1.classList.remove("selecionado");
            prato3.classList.remove("selecionado");
            } else {prato2.classList.toggle("selecionado");}
    })
    prato3.addEventListener("click", () => {
        if(prato1.classList.contains("selecionado") || prato2.classList.contains("selecionado")) {
            prato3.classList.toggle("selecionado");
            prato1.classList.remove("selecionado");
            prato2.classList.remove("selecionado");
            } else {prato3.classList.toggle("selecionado");}
    })
    
}

function clicarBebida() { 
    const bebida1 = document.querySelector(".bebida1");
    const bebida2 = document.querySelector(".bebida2");
    const bebida3 = document.querySelector(".bebida3");
    bebida1.addEventListener("click", () => {
        if(bebida2.classList.contains("selecionado") || bebida3.classList.contains("selecionado")) {
        bebida1.classList.toggle("selecionado");
        bebida2.classList.remove("selecionado");
        bebida3.classList.remove("selecionado");
        } else {bebida1.classList.toggle("selecionado");}
    })
    bebida2.addEventListener("click", () => {
        if(bebida1.classList.contains("selecionado") || bebida3.classList.contains("selecionado")) {
            bebida2.classList.toggle("selecionado");
            bebida1.classList.remove("selecionado");
            bebida3.classList.remove("selecionado");
            } else {bebida2.classList.toggle("selecionado");}
    })
    bebida3.addEventListener("click", () => {
        if(bebida1.classList.contains("selecionado") || bebida2.classList.contains("selecionado")) {
            bebida3.classList.toggle("selecionado");
            bebida1.classList.remove("selecionado");
            bebida2.classList.remove("selecionado");
            } else {bebida3.classList.toggle("selecionado");}
    })
    
}

function clicarSobremesa() { 
    const sobremesa1 = document.querySelector(".sobremesa1");
    const sobremesa2 = document.querySelector(".sobremesa2");
    const sobremesa3 = document.querySelector(".sobremesa3");
    sobremesa1.addEventListener("click", () => {
        if(sobremesa2.classList.contains("selecionado") || sobremesa3.classList.contains("selecionado")) {
        sobremesa1.classList.toggle("selecionado");
        sobremesa2.classList.remove("selecionado");
        sobremesa3.classList.remove("selecionado");
        } else {sobremesa1.classList.toggle("selecionado");}
    })
    sobremesa2.addEventListener("click", () => {
        if(sobremesa1.classList.contains("selecionado") || sobremesa3.classList.contains("selecionado")) {
            sobremesa2.classList.toggle("selecionado");
            sobremesa1.classList.remove("selecionado");
            sobremesa3.classList.remove("selecionado");
            } else {sobremesa2.classList.toggle("selecionado");}
    })
    sobremesa3.addEventListener("click", () => {
        if(sobremesa1.classList.contains("selecionado") || sobremesa2.classList.contains("selecionado")) {
            sobremesa3.classList.toggle("selecionado");
            sobremesa1.classList.remove("selecionado");
            sobremesa2.classList.remove("selecionado");
            } else {sobremesa3.classList.toggle("selecionado");}
    })
    
}

clicarPrato();
clicarBebida();
clicarSobremesa();