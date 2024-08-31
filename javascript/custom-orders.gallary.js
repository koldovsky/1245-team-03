const galleryCarouselTrack = document.querySelector(".gallery__carousel");
const galleryArrowPrev = document.querySelector(".gallery__arrow-prev-button");
const galleryArrowNext = document.querySelector(".gallery__arrow-next-button");

const galleryButtons = Array.from(
  document.getElementsByClassName("gallery__choose-buttons_click-zone")
);
const galleryItems = Array.from(
  document.getElementsByClassName("gallery__image-wrapper")
);
const galleryArows = Array.from(
  document.getElementsByClassName("gallery__arrow-button")
);

let galleryCurrentId = 0;

function updatePozition() {
  const itemById = document.querySelector(
    `#gallery-carousel-item_${galleryCurrentId}`
  );
  const buttonById = document.querySelector(
    `#choose-button_${galleryCurrentId}`
  );
  const buttonIndex = buttonById.id.match(/\d+/);
  const itemIndex = itemById.id.match(/\d+/);
  galleryButtons.forEach((button) => {
    button.classList.remove("gallery-button-active");
  });
  if (buttonIndex.value === itemIndex.value) {
    buttonById.classList.add("gallery-button-active");
  }
}

function galleryScroll(direction) {
  if (galleryCurrentId > 0 && direction === "prev") {
    galleryCurrentId--;
  } else if (galleryCurrentId < 4 && direction === "next") {
    galleryCurrentId++;
  }
  galleryCarouselTrack.scrollTo({
    left: galleryItems[galleryCurrentId].offsetLeft,
  });
  galleryArows.forEach((arrow) => {
    arrow.disabled = true;
    setTimeout(() => {
      arrow.disabled = false;
    }, 600);
  });
  updatePozition();
}

function galleryScrollByButtons(event) {
  const element = event.currentTarget;
  const index = element.id.match(/\d+/);
  galleryCarouselTrack.scrollTo({ left: galleryItems[index].offsetLeft });
  galleryButtons.forEach((button) => {
    button.classList.add("gallery-disabled");
    button.classList.remove("gallery-button-active");
  });
  setTimeout(() => {
    galleryButtons.forEach((button) => {
      button.classList.remove("gallery-disabled");
    });
  }, 600);
  element.classList.add("gallery-button-active");
  galleryCurrentId = index;
  updatePozition();
}

galleryArrowPrev.addEventListener("click", () => galleryScroll("prev"));
galleryArrowNext.addEventListener("click", () => galleryScroll("next"));
galleryButtons.forEach((button) => {
  button.addEventListener("click", galleryScrollByButtons);
});
window.addEventListener("resize", () => {
  galleryCarouselTrack.scrollTo({
    left: galleryItems[galleryCurrentId].offsetLeft,
  });
});
updatePozition();
