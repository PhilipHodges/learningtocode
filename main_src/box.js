const box = document.querySelector(".box");
const inputColor = document.querySelector(".input-color");
const inputSize = document.querySelector(".input-size");
const beetleImg = document.querySelector(".beetle");
let size;

inputColor.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if(e.target.value === "beetle") {
            beetleImg.classList.remove("hidden");
        }
        box.style.background = `${e.target.value}`;
    }
});

inputSize.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        size = e.target.value;
        box.style.height = `${size}px`;
        box.style.width = `${size}px`;
        // if(Number(e.target.value) < size)
    }
});

//Box animation event

box.addEventListener('click', () => {
    box.classList.add("box-anim");
    beetleImg.classList.add("fadeout");
    setTimeout(() => {
        box.classList.remove("box-anim");
      }, 1000);
});
