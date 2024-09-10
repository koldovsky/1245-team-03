const slides = [
  ` <div class="new-arrivals__card">
      <div class="card__img-container">
        <img
          src="./img/products/the-m-t-morton-traveler.jpg"
          alt="The M.T. Morton Traveler"
          class="card__img"
        />
      </div>
      <h3 class="card__title">The M.T. Morton Traveler</h3>
      <p class="card__price">$370,00</p>
      <div
        class="card__button shopping-cart__button-key-class"
        id="product-6"
      >
        Buy
      </div>
    </div>`,
  ` <div class="new-arrivals__card">
      <div class="card__img-container">
        <img
          src="./img/products/the-old-classic-leather-wallet.jpg"
          alt="The Old Classic Leather Wallet"
          class="card__img"
        />
      </div>
      <h3 class="card__title">The Old Classic Leather Wallet</h3>
      <p class="card__price">$43,00</p>
      <div
        class="card__button shopping-cart__button-key-class"
        id="product-7"
      >
        Buy
      </div>
    </div>`,
  ` <div class="new-arrivals__card">
      <div class="card__img-container">
        <img
          src="./img/products/the-prometheus-case.jpg"
          alt="The Prometheus Case"
          class="card__img"
        />
      </div>
      <h3 class="card__title">The Prometheus Case</h3>
      <p class="card__price">$84,00</p>
      <div
        class="card__button shopping-cart__button-key-class"
        id="product-8"
      >
        Buy
      </div>
    </div>`,
  ` <div class="new-arrivals__card">
      <div class="card__img-container">
        <img
          src="./img/products/the-norma-leather-tote.jpg"
          alt="The Norma Leather Tote"
          class="card__img"
        />
      </div>
      <h3 class="card__title">The Norma Leather Tote</h3>
      <p class="card__price">$325,00</p>
      <div
        class="card__button shopping-cart__button-key-class"
        id="product-9"
      >
        Buy
      </div>
    </div>`,
];

let currentSlideIndex = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".carousel__slides");
  slideContainer.innerHTML = slides[currentSlideIndex];
  if (window.matchMedia('(min-width: 768px)').matches) {
    let secondSlideIndex =
      currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    slideContainer.innerHTML += slides[secondSlideIndex];

    if (window.matchMedia('(min-width: 1024px)').matches) {
      let thirdSlideIndex =
        secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
      slideContainer.innerHTML += slides[thirdSlideIndex];
    }
  }
}

function nextSlide() {
  currentSlideIndex =
    currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIndex =
    currentSlideIndex - 1 <= 0 ? slides.length - 1 : currentSlideIndex - 1;
  renderSlide();
}

// setInterval(nextSlide, 3000);

renderSlide();

const btnNext = document.querySelector('.carousel__btn-next');

btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.carousel__btn-prev');

btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);