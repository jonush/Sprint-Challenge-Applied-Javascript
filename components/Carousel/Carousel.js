/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function make(element) {
  return document.createElement(element);
}

function get(selector) {
  return document.querySelector(selector);
}

const carouselContainer = get('.carousel-container');

function carouselMaker() {
  const carousel = make('div');
  const buttonL = make('button');
  const mountain = make('img');
  const computer = make('img');
  const trees = make('img');
  const table = make('img');
  const buttonR = make('button');

  carousel.setAttribute('class', 'carousel');
  buttonL.setAttribute('class', 'left-button');
  mountain.src = './assets/carousel/mountains.jpeg';
  computer.src = './assets/carousel/computer.jpeg';
  trees.src = './assets/carousel/trees.jpeg';
  table.src = './assets/carousel/turntable.jpeg';
  buttonR.setAttribute('class', 'right-button');

  mountain.setAttribute('class', 'slides');
  computer.setAttribute('class', 'slides');
  trees.setAttribute('class', 'slides');
  table.setAttribute('class', 'slides');

  carousel.appendChild(buttonL);
  carousel.appendChild(mountain);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(table);
  carousel.appendChild(buttonR);

  return carousel;
}

carouselContainer.appendChild(carouselMaker());

let slideIndex = 1;
show(slideIndex);

function next(n) {
  show(slideIndex += n);
}

function current(n) {
  show(slideIndex = n);
}

function show(n) {
  let i;
  let slides = get('.slides');
  if(n >slides.length) {
    slideIndex = 1;
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i <slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

buttonL.addEventListener('click', next(-1));
buttonR.addEventListener('click', next(1));