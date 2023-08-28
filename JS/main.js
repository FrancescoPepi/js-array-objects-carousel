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
let select = 0;
// let newArrayImages = 0;

// RECUPERARE DOM
const next = document.getElementById("next");
const back = document.getElementById("back");
const containerImg = document.getElementById("container-img");

printImg();

function printImg() {
  const newArrayImages = images.map((image, index) => {
    imagesCarousel = {
      image: image.image,
      title: image.title,
      text: image.text,
      active: index == select ? "active" : "",
    };
    creationImgBox(imagesCarousel);
    return imagesCarousel;
  });
  // console.log(image.active);
  console.log(newArrayImages[select]);
  console.log(newArrayImages);
}

// CEREAZIONE DEL DOM  DINAMICO
function creationImgBox(image) {
  containerImg.innerHTML += `
  <div class="d-none ${image.active}">
  <img src="${image.image}" alt="" />
  <div>
  <h1>${image.title}</h1>
  <p>${image.text}</p>
  </div>
            </div>
            
  `;
}

next.addEventListener("click", function () {
  nextBackButton(select++);
});

back.addEventListener("click", function () {
  nextBackButton(select--);
});

function nextBackButton(incrementoDecremento) {
  // # RECUPERO L'ARRAY DI TUTTE LE SLIDES
  const allSlides = document.querySelectorAll(".d-none");

  // # RECUPERO LA SLIDE ATTIVA E RIMUOVO LA CLASSE ACTIVE
  const activeSlide = allSlides[incrementoDecremento];
  activeSlide.classList.toggle("active");

  incrementoDecremento;
  console.log(incrementoDecremento);

  // # SE ABBIAMO SUPERATO IL RANGE DELL'ARRAYANDIAMO ALLA SLIDE OPPOSTA
  if (select >= allSlides.length) select = 0;
  if (select < 0) select = allSlides.length - 1;

  // # RECUPERO LA NUOVA SLIDE ATTIVA E AGGIUNGO LA CLASSE ACTIVE
  const newActiveSlide = allSlides[select];
  newActiveSlide.classList.toggle("active");
}
