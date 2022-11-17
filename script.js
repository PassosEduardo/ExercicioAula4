var total = 0;
var valorTotal = document.getElementById('contador')
valorTotal.innerHTML = total


const h2 = document.getElementById('h2')
const form = document.getElementById("formulario");
const btnAdd = document.getElementById('btnAdd')
const dado = document.forms.formulario.afazer

btnAdd.addEventListener('click', AdicionaEvento);


function AdicionaEvento ($event) {
    total++;
    $event.preventDefault();
    console.log(dado.value)

    const item = document.createElement('ol');
    item.innerText = dado.value
    lista.appendChild(item);

    valorTotal.innerHTML = total
}



const removeButton = document.getElementById('btnDelete')

removeButton.addEventListener('click',removeTudo);

const lista = document.getElementById('lista')
const itemsToBeRemoved = document.getElementsByTagName('ol');

function removeTudo($event)
{
    $event.preventDefault();
    
    lista.innerHTML = null;

    total = 0 ;
    valorTotal.innerHTML = total

    
    
}

