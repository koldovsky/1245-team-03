const slides = [
    '<div><img src="img/gift-packs/the-big-vintage-pack.webp" alt="The Big Vintage Pack" class="carousel__image" ><p class="carousel__caption">The Big Vintage Pack</p></div>',
    '<div><img src="img/gift-packs/summer-village-pack.webp" alt="The Summer Village Pack" class="carousel__image" ><p class="carousel__caption">The Summer Village Pack</p></div>',
    '<div><img src="img/gift-packs/exotic-leather-pack.webp" alt="Exotic Leather Pack" class="carousel__image" > <p class="carousel__caption">Exotic Leather Pack</p></div>',
    '<div><img src="img/gift-packs/floral-pack.webp" alt="The Big Floral Pack" class="carousel__image" > <p class="carousel__caption">The Big Floral Pack</p></div>',
    '<div><img src="img/gift-packs/the-autumn-landscape-pack.webp" alt="The Autumn Landscape Pack" class="carousel__image" ><p class="carousel__caption">The Autumn Landscape Pack</p></div>',
    '<div><img src="img/gift-packs/the-urban-view-pack.webp" alt="The Urban View Pack" class="carousel__image" ><p class="carousel__caption">The Urban View Pack</p></div>',
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.gift-packs-carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];

    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];

        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];

            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML += slides[fourthSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const btnNext = document.querySelector('.gift-packs-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.gift-packs-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);