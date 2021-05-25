const images = document.querySelectorAll('.slider #slider-line .items');
const sliderLine = document.querySelector('.slider #slider-line');
let count = 0;
let width;
let timer;
let stepAutoSlider = 3000;//ms

autoSlider();

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
    })
    console.log(width);
    scrollingSlider();
}

function scrollingSlider(step) {

    clearTimeout(timer)
    if (step === "next") {
        count++;
    } else if (step === "prev") {
        count--;
    }

    if (count + 1 > images.length) {
        count = 0;
    } else if (count + 1 < 0) {
        count = images.length;
    }
    sliderLine.style.transform = 'translate(-' + count * width + 'px';

    autoSlider();
}

window.addEventListener("resize", init)
init();

function autoSlider() {
    timer = setTimeout(scrollingSlider, stepAutoSlider, "next")
    console.log(timer)
}

document.querySelector('.slider-next').addEventListener('click', function () {
    scrollingSlider('next');
})

document.querySelector('.slider-prev').addEventListener('click', function () {
    scrollingSlider('prev');
})


document.body.onload = addElement;
var my_div = newDiv = null;


async function addElement() {
    
    var divDot = document.createElement("div");
    divDot.className = 'slider-dots'
    for (let i = 0; i < images.length; i++) {
        divDot.innerHTML += "<span class=\"slider-dots-item\" onclick=\"currentSlide(" + i + ")\"></span>";
    }

    my_div = document.getElementById("slider-line");
    console.log(my_div)
    let parentDiv = my_div.parentNode;
    parentDiv.insertBefore(divDot, my_div);
}