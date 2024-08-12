# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```
| role | name | tasks |
|-------------|-------------|-------------|
| Teammate | Петро Розумєй | header (Головний) + Hero, Notebooks + Page BuyNow, блок Notebooks (Page Catalog) |
| >>Teamlead | Шумило Олексій | футер(головний),why us,our-story(first block) |
| Teammate | Богуслав | products,New arrivals, in stock page |
| Teammate | Микола Циганюк | collections,gallery |
| Teammate | Щур Саша | gift packs,custom gift pack, custom products, |
| Teammate | Іван Романюк | custom orders+branding process |
| Teammate | Владислав Гоменюк | Great products at great price,форма |
| Teammate | Василь Яворський | What hand made means to us, write us + contacts |
| Teammate | Валерія Тихонюк | Blog |
| Teammate | Вадим Скрипець | каталог(wallets) |
| Teammate | Денис Теплюх | request a quote |
| Teammate | Катерина Шевченко | bags,holders |
| Teammate | Козін Володимир | our story|
| Teammate | Тарас Щербан | #StandwithUkraine, Awards|
| Teammate | Not defined | кошик |