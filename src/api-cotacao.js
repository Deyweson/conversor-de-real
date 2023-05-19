
let dolar;
let euro;

fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
.then(response => response.json())
.then(data =>{ 
    dolar = data.USDBRL.high;
    euro = data.EURBRL.high;
})
