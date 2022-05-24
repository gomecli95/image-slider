const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
];
const rightBtn = document.getElementById("icon-right");
const leftBtn = document.getElementById("icon-left");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const carName = document.getElementsByClassName("car-name")[0];

let i = 1;
function slideImages(forward = true) {
    document.getElementsByClassName("img-container")[0].style.background = `url(./img/contBcg-${i}.jpeg) center/cover no-repeat`;
    carName.innerHTML = carNames[i];
    if (forward) {
        i++;
        if (i > carNames.length - 1) i = 0;
    } else {
        i--;
        if (i < 0) i = carNames.length - 1;
    }
}

rightBtn.addEventListener("click", () => {
    slideImages();
})

leftBtn.addEventListener("click", () => {
    slideImages(false);
})

let autoPlayInterval;
playBtn.addEventListener("click", () => {
    autoPlayInterval = setInterval(slideImages, 1000);
})


stopBtn.addEventListener("click", () => {
    clearInterval(autoPlayInterval);
});