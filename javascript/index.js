function init() {
    import('./global.burger-menu.js');
    import('./index.why-us-carousel.js');
    import('./index.gift-packs-carousel.js');
    import('./global.shopping-cart.js');
    import('./index.stand-with-ukraine.js');
    import('./index.awards.js');
    import('./dark_theme.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});