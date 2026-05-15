const slides = document.querySelectorAll(".slide");

const botoDreta = document.querySelector(".derecha");

const botoEsquerra = document.querySelector(".izquierda");

const imatges = [
    "IMG_7104.jpg",
    "IMG_7243.jpg",
    "IMG_6945.jpg",
    "IMG_7070.jpg",
    "1000072476.jpg",
    "1000072315.jpg"
];

function actualitzarCarousel() {

    slides[0].src = imatges[imatges.length - 1];

    slides[1].src = imatges[0];

    slides[2].src = imatges[1];

}

botoDreta.addEventListener("click", () => {

    const primera = imatges.shift();

    imatges.push(primera);

    actualitzarCarousel();

});

botoEsquerra.addEventListener("click", () => {

    const ultima = imatges.pop();

    imatges.unshift(ultima);

    actualitzarCarousel();

});

actualitzarCarousel();