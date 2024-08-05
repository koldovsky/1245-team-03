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
* Петро Розумей-хедер(головний)+хіро, notebooks buy now
* Шумило Олексій-футер(головний),why us
* Богуслав-products,New arrivals, in stock page
* Микола Циганюк-collections,gallery
* Щур Саша-gift packs,custom gift pack, custom products,
* Іван Романюк-custom orders,
*Владислав Гоменюк-Great products at great price,форма
* Василь Яворський -What hand made means to us, write us + contacts
* Валерія Тихонюк-Blog
* Вадим-каталог(wallets)

* Вільні: bags,holders,our story(вся сторінка)

#####Rozumiei Petro
