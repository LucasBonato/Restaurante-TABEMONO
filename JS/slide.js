
let eleImg = document.getElementById("imgSlide");
let inputs = document.getElementsByClassName("teste");
let inpuLengh = inputs.length;

let img1 = "../img/back.png";
let img2 = "../img/comida-back-final.jpeg";
let img3 = "../img/mesa-back-final.jpg";

let count = 1;
let time = 5000;

let timer = setInterval("Show()", time);

const Show = () => {
    
    let inpuRadio = document.getElementById("v" + count);

    eleImg.src = eval("img" + count);
    inpuRadio.checked = true;

    count < inpuLengh ? count++ : count = 1;
}

for (let i = 0; i < inpuLengh; i++){
    inputs[i].addEventListener("click", function Change() {
        clearInterval(timer);
        count = i + 1;
        eleImg.src = eval("img" + count);
        timer = setInterval("Show()", time);
    });
}