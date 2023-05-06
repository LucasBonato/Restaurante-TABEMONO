const input = document.getElementsByClassName("teste")
const inputLista = input.length;

const Alterar = event => {
    for(let i = 0; i <= inputLista; i++) {
        input[i].classList.toggle("temValor", event.target.value);
    }
}

