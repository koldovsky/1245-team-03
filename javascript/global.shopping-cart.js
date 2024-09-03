const body = document.querySelector("body");
const cartImg = Array.from(
  document.querySelectorAll(".shopping-cart__product-image")
);
const productButtons = Array.from(
  document.querySelectorAll(".shopping-cart__button-key-class")
);
const cartSection = document.querySelector(".shopping-cart-wrapper");
const cartIcon = cartSection.querySelector(".shopping-cart__icon-wrapper");
const cartContainerWrapper = cartSection.querySelector(
  ".shopping-cart-content-wrapper"
);
const cartContainer = cartSection.querySelector(".shopping-cart");
const cartPromoButton = cartSection.querySelector(
  ".shopping-cart__promo-button"
);
const cartPromoForm = cartSection.querySelector(".shopping-cart__promo-form");
const cartPromoFormParagraph = cartSection.querySelector(
  ".shopping-cart__promo-form p"
);
const cartPromoOk = cartSection.querySelector(
  ".shopping-cart__promo-form-button"
);
const cartPromoInput = cartSection.querySelector(
  ".shopping-cart__promo-form-input"
);
const cartContent = cartSection.querySelector(".shopping-cart-content");
const cartCounter = cartSection.querySelector(".shopping-cart__icon-counter");
const cartEmpty = cartSection.querySelector(".shopping-cart__empty_cart");
const cartSuccess = cartSection.querySelector(".shopping-cart__success");
const cartCloser = cartSection.querySelector(".shopping-cart__svg-close");
const productsList = cartSection.querySelector(".shopping-cart__products-list");
const cartTotal = cartSection.querySelector(".shopping-cart__total");
const cartOrderForm = cartSection.querySelector(".shopping-cart__form");
const cartInput = Array.from(
  cartSection.querySelectorAll(".shopping-cart__form-input")
);
const cartMail = cartSection.querySelector(".shopping-cart__mail");
const cartTel = cartSection.querySelector(".shopping-cart__tel");
const cartName = cartSection.querySelector(".shopping-cart__name");
const cartOrder = cartSection.querySelector(".shopping-cart__form-button");
const response = await fetch("javascript/products.json");
const products = await response.json();

function showCartIcon() {
  cartIcon.classList.remove("shopping-cart__none");
}
function showPromo() {
  cartPromoForm.classList.toggle("shopping-cart__none");
  cartTotal.classList.toggle("shopping-cart__total-width-auto");
}
function validatePromoForm(event) {
  cartPromoInput.classList.add("validation-failed");
  cartPromoFormParagraph.classList.remove("shopping-cart__none");
  event.preventDefault();
}
function validateOrderForm() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[1-9]\d{1,14}$/;
  if (!emailPattern.test(cartMail.value)) {
    cartMail.classList.add("validation-failed");
  }
  if (!phonePattern.test(cartTel.value)) {
    cartTel.classList.add("validation-failed");
  }
  if (cartName.value === "") {
    cartName.classList.add("validation-failed");
  }
  if (
    emailPattern.test(cartMail.value) &&
    phonePattern.test(cartTel.value) &&
    cartName.value !== ""
  ) {
    cartSuccess.classList.remove("shopping-cart__none");
    cartContent.classList.add("shopping-cart__none");
    cartInput.forEach((input) => {
      input.value = "";
      input.classList.remove("validation-failed");
    });
    productsList.innerHTML = "";
    localStorage.clear();
    cartIcon.classList.add("shopping-cart__none");
  }
}
function renderProducts(event) {
  let indx;
  productButtons.forEach((element) => {
    if(event.target.id === element.id){
      indx = element.id.match(/\d+/)
    }
  });
  const productImage = products[indx].image;
  const productTitle = products[indx].title;
  const productPrice = products[indx].price;

  showCartIcon();

  const existingListElement = Array.from(
    productsList.querySelectorAll("li")
  ).find(
    (li) =>
      li.querySelector("input").getAttribute("data-id") === indx.toString()
  );

  if (existingListElement) {
    const inputElement = existingListElement.querySelector("input");
    inputElement.value = parseInt(inputElement.value) + 1;
  } else {
    const newListElement = document.createElement("li");
    newListElement.dataset.id = indx;
    newListElement.innerHTML = `
      ${productImage}
      ${productTitle}
      ${productPrice.slice(0, 3) + "$" + productPrice.slice(3)}
      <input type='number' value=1 min=1 class='shopping-cart__input-number' data-id='${indx}'><svg width="14" height="18" fill="none" class="shopping-cart__product-list_basket-svg" data-id='${indx}'><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2h3.6c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4H.4C.2 4 0 3.9 0 3.6V2.4c0-.2.2-.4.4-.3h3.7V2L4.9.3c.1-.2.2-.3.4-.3h3.5c.1 0 .3.1.4.2l.8 1.7V2zM1.8 16.1c.1 1 1 1.9 2 1.9h6.3c1.1 0 1.9-.8 2-1.9l1-11.1H1l.8 11.1zM12 6l-.8 10.1c0 .5-.5.9-1 .9H3.8c-.5 0-1-.4-1-.9L2 6h10zM5 8.1h1v6H5v-6zm4 0H8v6h1v-6z" fill="#9199AB"></path></svg>`;
    productsList.appendChild(newListElement);
  }
  let productsLiElements = Array.from(
    document.querySelectorAll(".shopping-cart__products-list li")
  );
  function updatePrice() {
    let counter = 0;
    let totalValue = 0;
    productsLiElements.forEach((li) => {
      const listElementValue = li.querySelector("input").value;
      const listElementPrice = li.querySelector("p").innerText;
      totalValue += +listElementValue;
      totalValue < 9
        ? (cartCounter.innerText = totalValue)
        : (cartCounter.innerText = "9+");
      counter += +(listElementPrice.slice(1, 5) * listElementValue).toFixed(2);
    });
    cartTotal.innerText = `Total: $${counter.toFixed(2)}`;
    if (productsLiElements.length === 0) {
      cartIcon.classList.add("shopping-cart__none");
      cartEmpty.classList.remove("shopping-cart__none");
      cartContent.classList.add("shopping-cart__none");
    }
  }
  updatePrice();
  productsLiElements.forEach((li) => {
    li.querySelector("input").addEventListener("change", updatePrice);
  });
  const productBasket = Array.from(
    cartSection.querySelectorAll(".shopping-cart__product-list_basket-svg")
  );
  function deleteProduct(event) {
    event.target.closest("li").remove();
    productsLiElements = Array.from(
      document.querySelectorAll(".shopping-cart__products-list li")
    );
    updatePrice();
  }
  productBasket.forEach((basket) => {
    basket.addEventListener("click", deleteProduct);
  });
}

productButtons.forEach((button) => {
  button.addEventListener("click", renderProducts);
});

function renderCart() {
  cartContainer.classList.toggle("shopping-cart__none");
  if (!cartSuccess.classList.contains("shopping-cart__none")) {
    cartSuccess.classList.add("shopping-cart__none");
  }
  if (
    cartEmpty.classList.contains("shopping-cart__none") ||
    cartSuccess.classList.contains("shopping-cart__none")
  ) {
    cartContent.classList.remove("shopping-cart__none");
  }
  body.classList.toggle("shopping-cart__overflow_hidden");
  cartSection.classList.toggle("shopping-cart__height");
  cartEmpty.classList.add("shopping-cart__none");
}
cartIcon.addEventListener("click", renderCart);
cartIcon.addEventListener("click", showCartIcon);
cartCloser.addEventListener("click", renderCart);
cartPromoButton.addEventListener("click", showPromo);
cartPromoOk.addEventListener("click", validatePromoForm);
cartPromoForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
cartPromoInput.addEventListener("input", () => {
  cartPromoInput.classList.remove("validation-failed");
  cartPromoFormParagraph.classList.add("shopping-cart__none");
});
cartOrder.addEventListener("click", validateOrderForm);
cartOrderForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
cartInput.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("validation-failed");
  });
});
