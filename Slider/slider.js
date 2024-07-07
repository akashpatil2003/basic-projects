const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNumber = 1;
let length = images.length;

for(let i=0;i<length;i++) {
    const div = document.createElement("div")
    div.className = "btn"
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".btn")
buttons[0].style.backgroundColor = "white"

const reset = ()=>{
    buttons.forEach((btn) => {
        btn.style.backgroundColor = "transparent"
    })
}

buttons.forEach((btn, ind) => {
    btn.addEventListener("click", ()=>{
        reset();
        slider.style.transform = `translateX(-${ind * 700}px)`;
        buttons[ind].style.backgroundColor = "white"
    })
})

const nextSlide = ()=> {
    slider.style.transform = `translateX(-${slideNumber*700}px)`;
    slideNumber++;
}

const prevSlide = ()=> {
    slider.style.transform = `translateX(-${(slideNumber-2)*700}px)`;
    slideNumber--;
}

const firstSlide = ()=> {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const lastSlide = ()=> {
    slider.style.transform = `translateX(-${(length - 1) * 700}px)`;
    slideNumber = length;
};

right.addEventListener("click", ()=>{
    slideNumber < images.length ? nextSlide() : firstSlide();
    reset();
    buttons[slideNumber-1].style.backgroundColor = "white"
    console.log(slideNumber);
});

left.addEventListener("click", ()=>{
    slideNumber > 1 ? prevSlide() : lastSlide();
    reset();
    buttons[slideNumber-1].style.backgroundColor = "white"
    console.log(slideNumber);
})


