
realParaDolar = (valor = 0) => (valor * dolar).toFixed(2);
realParaEuro = (valor = 0) => (valor * euro).toFixed(2);

function converter(){
    let entrada = document.getElementById("valorEntrada");
    let valorEntrada = parseFloat(entrada.value)

    let tipoConversão = document.getElementById("opcoes").value

    let valorConvertido;

    if (tipoConversão === "realParaDolar"){
        valorConvertido = realParaDolar(valorEntrada)
    } else if (tipoConversão === "realParaEuro"){
        valorConvertido = realParaEuro(valorEntrada)
    }

    document.querySelector("#text").innerHTML = `$ ${valorConvertido}`
}











