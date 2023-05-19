
conversao = (real, outraMoeda) => (real / outraMoeda).toFixed(2);

function converter(){
    let entrada = document.getElementById("valorEntrada");
    let real = parseFloat(entrada.value)

    let tipoConversão = document.getElementById("opcoes").value

    let valorConvertido;   

    switch(tipoConversão){
        case "realParaDolar":
            valorConvertido = conversao(real, dolar)
            break;
        case "realParaEuro":
            valorConvertido = conversao(real, euro)
            break;
    }

    document.querySelector("#text").innerHTML = `$ ${valorConvertido}`
}