let doll;

fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  .then(response => response.json())
  .then(data => { 
     doll = data.USDBRL.high;
    console.log(data)
})
  .catch(error => console.error(error));

valor = data.high;

function getNumber(){
    let numb = document.getElementById("numb");
    let convertedNumb = parseFloat(numb.value) * doll;

    console.log(convertedNumb)

    document.querySelector("#converted-number").innerHTML = `$${convertedNumb.toFixed(2)}`
}

