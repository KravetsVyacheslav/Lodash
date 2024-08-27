//Завдання 1

function resizeImage(event) {
  const sliderValue = event.target.value;
  const image = document.querySelector(".slider__image");
  const newSize = 100 + sliderValue * 3;
  image.style.width = `${newSize}px`;
  image.style.height = `${newSize}px`;
}

const debounceResizeImage = _.debounce(resizeImage, 100);
document
  .querySelector(".slider__input")
  .addEventListener("input", debounceResizeImage);

//Завдання 2
const box = document.getElementById("box");

function moveBox(event) {
  const x = event.clientX - box.offsetWidth / 2;
  const y = event.clientY - box.offsetHeight / 2;
  box.style.transform = `translate(${x}px, ${y}px)`;
}

const debounceMoveBox = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debounceMoveBox);
