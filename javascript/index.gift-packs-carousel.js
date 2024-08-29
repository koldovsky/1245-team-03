const slides=[
    '<div>  <img src="img/gift-packs/the-big-vintage-pack.webp" alt="The Big Vintage Pack" class="carousel__image" /></div>',
    '<div>  <img src="img/gift-packs/summer-village-pack.webp" alt="The Summer Village Pack" class="carousel__image" /></div>',
    '<div>  <img src="img/gift-packs/exotic-leather-pack.webp" alt="Exotic Leather Pack" class="carousel__image" /></div>',
    '<div>  <img src="img/gift-packs/floral-pack.webp" alt="The Big Floral Pack" class="carousel__image" /></div>',
    '<div>  <img src="img/gift-packs/the-autumn-landscape-pack.webp" alt="The Autumn Landscape Pack" class="carousel__image" /></div>',
    '<div>  <img src="img/gift-packs/the-urban-view-pack.webp" alt="The Urban View Pack" class="carousel__image" /></div>',
]
let currentSlideIdx=0;
function renderSlide(){
    const slideContainer=document.querySelector('.gift-packs-carousel__slides');
    slideContainer.innerHTML=slides[currentSlideIdx];
}
function nextSlide(){
    currentSlideIdx=currentSlideIdx+1>=slides.length ? 0 :currentSlideIdx +1;
}
setInterval(nextSlide,300);
renderSlide();