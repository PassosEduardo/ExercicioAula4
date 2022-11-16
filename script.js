var total = 0;
var valorTotal = document.getElementById('contador')
valorTotal.innerHTML = total


const h2 = document.getElementById('h2')
const form = document.getElementById("formulario");
const dado = document.forms.formulario.afazer

form.addEventListener('submit', ($event) => 
{
    total++;
    $event.preventDefault();
    console.log(dado.value)

    const item = document.createElement('ol');
    item.innerText = dado.value
    h2.after(item)

    valorTotal.innerHTML = total

}
)
