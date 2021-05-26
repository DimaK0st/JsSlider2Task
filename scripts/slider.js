const images = document.querySelectorAll('.slider #slider-line .items');
const sliderLine = document.querySelector('.slider #slider-line');
const dots = document.getElementsByClassName("slider-dots-item");
let count = 0;
let width;
let timer;
let stepAutoSlider = 3000;//ms

autoSlider();

// document.body.onload = addElement;
window.addEventListener("resize", removeElements)
init();
var my_div = newDiv = null;

function removeElements() {
    elements = document.querySelectorAll('.slider-dots')

    elements[0].parentNode.removeChild(elements[0]);


    init();
}

function init() {
    addElement();
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
    })
    console.log(width);
    scrollingSlider();
}

async function scrollingSlider(step, current) {

    clearTimeout(timer)
    if (step === "next") {
        count++;
    } else if (step === "prev") {
        count--;
    } else if (step === "current") {
        count = current;
    }

    if (count + 1 > images.length) {
        count = 0;
    } else if (count + 1 < 0) {
        count = images.length;
    }
    sliderLine.style.transform = 'translate(-' + count * width + 'px';
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[count].className += " active";
    autoSlider();
}

function autoSlider() {
    console.log(timer)
}

document.querySelector('.slider-next').addEventListener('click', function () {
    scrollingSlider('next');
})

document.querySelector('.slider-prev').addEventListener('click', function () {
    scrollingSlider('prev');
})

async function addElement() {

    var divDot = document.createElement("div");
    divDot.className = 'slider-dots'
    for (let i = 0; i < images.length; i++) {
        divDot.innerHTML += "<span class=\"slider-dots-item\" onclick=\"scrollingSlider('current', " + i + ")\"></span>";
    }

    my_div = document.getElementById("slider-line");
    console.log(my_div)
    let parentDiv = my_div.parentNode;
    parentDiv.insertBefore(divDot, my_div);
}