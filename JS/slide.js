
let eleImg = document.getElementById("imgSlide");
let inputs = document.getElementsByClassName("inpuSlider");
let inpuLengh = inputs.length;

let imgs = ["../img/back.png", "../img/comida-back-final.jpeg", "../img/mesa-back-final.jpg"]

let count = 0;
let time = 5000;

let timer = setInterval("Show()", time);

const Show = () => {
    
    let inpuRadio = document.getElementById("v" + (count + 1));

    eleImg.src = imgs[count];
    inpuRadio.checked = true;

    count < (inpuLengh - 1) ? count++ : count = 0;
}

for (let i = 0; i < inpuLengh; i++){
    inputs[i].addEventListener("click", () => {
        clearInterval(timer);
        eleImg.src = imgs[i];
        count = i;
        timer = setInterval("Show()", time);
    });
}