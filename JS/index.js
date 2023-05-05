const listaEsquerda = document.getElementById('dom').getElementsByTagName("img");
const listaDireita = document.getElementById('domTeste').getElementsByTagName("img");

let lista = listaEsquerda.length;

for(let i = 0; i < lista; i++) {
    listaEsquerda[i].addEventListener("click", function (event) {
        let img = event.target;
        let p = img.nextElementSibling;

        p.style.display == "none" ? p.style.display = "block" : p.style.display = "none";
    })
    listaDireita[i].addEventListener("click", function (event) {
        let img = event.target;
        let p = img.nextElementSibling;
        
        p.style.display == "none" ? p.style.display = "block" : p.style.display = "none";
    })
}
//console.log("Valor atual da propriedade 'display':", p.style.display);  DEBUG CODE