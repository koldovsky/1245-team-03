const slides = [
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c7939f8f1b2aa0023854afd" alt="handmade" class="why__us-image"></div><h3 class="why__us-item-title">Handmade</h3><p>Our craftsmen work with each client individually to create bespoke one-of-a-kind products that reflect their unique taste.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c793a0442de4700236a785c" alt="quality" class="why__us-image"></div><h3 class="why__us-item-title">Top-Quality Leather</h3><p>We want our work to last for generations, and therefore use only the highest quality leather and findings.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c793a0df1b2aa0023854aff" alt="irish" class="why__us-image"></div><h3 class="why__us-item-title">Irish Waxed Linen</h3><p>We\'ve sourced the finest quality European linen and other contemporary materials for our products.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c7939d626c3d000250bbf9c" alt="craftsmanship" class="why__us-image"></div><h3 class="why__us-item-title">Craftsmanship</h3><p>We combine traditional techniques and modern manufacturing technologies to create exquisite yet durable pieces.</p></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".why__us-container");
  slideContainer.innerHTML = slides[currentSlideIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

function nextSlide() {
  currentSlideIdx =
    currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx =
    currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".why-us-carousel__btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".why-us-carousel__btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
