let contadorComida = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;

function selecionarItem(tipo, item) {
    if ((tipo == "comida" && contadorComida == 1) ||
        (tipo == "bebida" && contadorBebida == 1) ||
        (tipo == "sobremesa" && contadorSobremesa == 1))
    {
            const anteriormenteSelecionado = document.querySelector("." + tipo + " .selecionado");
            const iconSelecionado = document.querySelector("." + tipo + " .selecionado"+ " .icone");   
            anteriormenteSelecionado.classList.remove("selecionado");  
            iconSelecionado.hidden = true;
    }
    if (tipo == "comida")
        contadorComida = 1;
    else if (tipo == "bebida")
        contadorBebida = 1;
    else if (tipo == "sobremesa")
        contadorSobremesa = 1;
    item.classList.add("selecionado");
    document.querySelector("." + tipo + " .selecionado .icone").hidden = false;
    if (contadorComida == 1 && contadorBebida == 1 && contadorSobremesa == 1)
    {
        const button =  document.querySelector(".rodape button");
        button.disabled = false;
        button.innerHTML = "Fechar pedido";
        button.classList.add("fechar-pedido");
    }
}

function finalizarPedido() {
    let valorTotal;
    let precoComida = Number(document.querySelector(".comida .selecionado .preco").innerHTML.replace("R$ ", "").replace(",", "."));
    let precoBebida = Number(document.querySelector(".bebida .selecionado .preco").innerHTML.replace("R$ ", "").replace(",", "."));
    let precoSobremesa = Number(document.querySelector(".sobremesa .selecionado .preco").innerHTML.replace("R$ ", "").replace(",", "."));
    valorTotal = precoComida + precoBebida + precoSobremesa;
    valorTotal = valorTotal.toFixed(2);
    document.querySelector(".finalizar").classList.remove("escondido");
    document.querySelector(".comida-selecionada .descricao-final").innerHTML = document.querySelector(".comida .selecionado .nome").innerHTML;
    document.querySelector(".bebida-selecionada .descricao-final").innerHTML = document.querySelector(".bebida .selecionado .nome").innerHTML;
    document.querySelector(".sobremesa-selecionada .descricao-final").innerHTML = document.querySelector(".sobremesa .selecionado .nome").innerHTML;
    document.querySelector(".comida-selecionada .valor-final").innerHTML = document.querySelector(".comida .selecionado .preco").innerHTML;
    document.querySelector(".bebida-selecionada .valor-final").innerHTML = document.querySelector(".bebida .selecionado .preco").innerHTML;
    document.querySelector(".sobremesa-selecionada .valor-final").innerHTML = document.querySelector(".sobremesa .selecionado .preco").innerHTML;
    document.querySelector(".total .valor-final").innerHTML = "R$ " + valorTotal.replace(".", ",");
}

function cancelar() {
    document.querySelector(".finalizar").classList.add("escondido");
}

function enviarMensagem() {
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereco?");
    let linkWhatsapp = "https://wa.me/5511999651992?text=";
    let prato = document.querySelector(".comida-selecionada .descricao-final").innerHTML;
    let bebida = document.querySelector(".bebida-selecionada .descricao-final").innerHTML;
    let sobremesa = document.querySelector(".sobremesa-selecionada .descricao-final").innerHTML;
    let total = document.querySelector(".total .valor-final").innerHTML ;
    linkWhatsapp = linkWhatsapp + encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: ${total}\n\nNome: ${nome}\nEndereço: ${endereco}\n`);
    window.location = linkWhatsapp;
}