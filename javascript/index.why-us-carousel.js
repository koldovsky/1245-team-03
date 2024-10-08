const slides = [
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c7939f8f1b2aa0023854afd" alt="handmade" class="why__us-image"></div><h3 class="why__us-item-title">Handmade</h3><p>Our craftsmen work with each client individually to create bespoke one-of-a-kind products that reflect their unique taste.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c793a0442de4700236a785c" alt="quality" class="why__us-image"></div><h3 class="why__us-item-title">Top-Quality Leather</h3><p>We want our work to last for generations, and therefore use only the highest quality leather and findings.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c793a0df1b2aa0023854aff" alt="irish" class="why__us-image"></div><h3 class="why__us-item-title">Irish Waxed Linen</h3><p>We\'ve sourced the finest quality European linen and other contemporary materials for our products.</p></div>',
  '<div class="why__us-item"><div class="why__us-image-container"><img src="https://res2.weblium.site/res/5c78f7951f572b0022f79c95/5c7939d626c3d000250bbf9c" alt="craftsmanship" class="why__us-image"></div><h3 class="why__us-item-title">Craftsmanship</h3><p>We combine traditional techniques and modern manufacturing technologies to create exquisite yet durable pieces.</p></div>',
];

let currentIdxOfSlides = 0;

function renderSlides() {
  const whyUsContainer = document.querySelector(".why__us-container");
  whyUsContainer.innerHTML = slides[currentIdxOfSlides];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondIdxOfSlides =
      currentIdxOfSlides + 1 >= slides.length ? 0 : currentIdxOfSlides + 1;
    whyUsContainer.innerHTML += slides[secondIdxOfSlides];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdIdxOfSlides =
        secondIdxOfSlides + 1 >= slides.length ? 0 : secondIdxOfSlides + 1;
      whyUsContainer.innerHTML += slides[thirdIdxOfSlides];
    }
  }
}

function nextSlide() {
  currentIdxOfSlides =
    currentIdxOfSlides + 1 >= slides.length ? 0 : currentIdxOfSlides + 1;
  renderSlides();
}

function prevSlide() {
  currentIdxOfSlides =
    currentIdxOfSlides - 1 < 0 ? slides.length - 1 : currentIdxOfSlides - 1;
  renderSlides();
}
renderSlides();

const nextSlideClick = document.querySelector(".why-us-carousel__btn-next");
nextSlideClick.addEventListener("click", nextSlide);

const prevSlideClick = document.querySelector(".why-us-carousel__btn-prev");
prevSlideClick.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlides);

// const title_toggle = document.querySelector(".why__us-title");
// const toggler = () => title_toggle.classList.toggle("highlight");
// setInterval(toggler,3000);