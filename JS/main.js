// ARRAY DI OGGETTI CONTENENTE LE URL-IMG E INFO
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
let slideActive = 0;
// let newArrayImages = 0;

// RECUPERARE DOM
const next = document.getElementById("next");
const back = document.getElementById("back");
const containerImg = document.getElementById("container-img");
const containerThumb = document.getElementById("container-thumb");

printImg();
printthumb();

function printImg() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.classList.add("d-none");
    slide.innerHTML = ` 
    <img src="${image.image}" alt="" />
    <div class="text">
    <h1>${image.title}</h1>
    <p>${image.text}</p>
    </div>`;

    image.html = slide;
    image.index = index;
    if (image.index == slideActive) slide.classList.add("active");

    containerImg.append(slide);
    console.log(image, slide);
  });
}
function printthumb() {
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    // slide.classList.add("d-none");
    slide.innerHTML = ` 
    <img src="${image.image}" alt="" />`;

    slide.style.height = `calc(100% /${images.length})`;

    image.thumb = slide;
    // if (image.index == slideActive) slide.classList.add("active");

    containerThumb.append(slide);
    console.log(image, slide);
  });
}

next.addEventListener("click", function () {
  nextButton(slideActive++);
});

back.addEventListener("click", function () {
  backButton(slideActive--);
});

function nextButton(incrementoDecremento) {
  // # RIMUOVO LA CLASSE ACTIVE ALLA VECCHIA SLIDE
  images[slideActive - 1].html.classList.remove("active");
  // # INCREMENTIAMO
  incrementoDecremento;
  // # SE ABBIAMO SUPERATO IL RANGE DELL'ARRAYANDIAMO ALLA SLIDE OPPOSTA
  if (slideActive >= images.length) slideActive = 0;
  // # AGGIUNGO LA CLASSE ACTIVE ALLA NUOVA SLIDE
  images[slideActive].html.classList.add("active");
}
function backButton(incrementoDecremento) {
  // # RIMUOVO LA CLASSE ACTIVE ALLA VECCHIA SLIDE
  images[slideActive + 1].html.classList.remove("active");
  // # INCREMENTIAMO
  incrementoDecremento;
  // # SE ABBIAMO SUPERATO IL RANGE DELL'ARRAYANDIAMO ALLA SLIDE OPPOSTA
  if (slideActive < 0) slideActive = images.length - 1;
  // # AGGIUNGO LA CLASSE ACTIVE ALLA NUOVA SLIDE
  images[slideActive].html.classList.add("active");
}
