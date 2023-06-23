document.addEventListener('DOMContentLoaded', () => {

    const botaoConversao = document.querySelector('.botao')

    botaoConversao.addEventListener('click', () => {
        let entrada = document.querySelector('#valor-entrada')
        let tratandoEntrada = parseFloat(entrada.value.toString().replace(',', '.'))
        entrada = tratandoEntrada

        const opcaoConvercao = document.querySelector('#opcoes').value

        let saida = 0

        switch (opcaoConvercao) {
            case "dolar":
                saida = (entrada * dolar).toFixed(2)
                break;
            case "euro":
                saida = (entrada * euro).toFixed(2)
                
                break;
        }
        console.log(saida)

        document.querySelector('.saida').innerHTML = `<p>$${saida}</p>`
    })
})

