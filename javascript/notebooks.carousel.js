const slideWidth = 37;

const _items = [
  {
    player: {
      title: "Leather Notebook Deer",
      image: "img/notebooks/leather-notebook-deer.jpeg",
      price: "$60.00",
      button: "Buy",
      id: "product-10",
    },
  },
  {
    player: {
      title: "Handmade leather Notebook",
      image: "img/notebooks/handmade-leather-notebook.jpeg",
      price: "$84.00",
      button: "Buy",
      id: "product-0",
    },
  },
  {
    player: {
      title: "Leather Notebook Cat",
      image: "img/notebooks/leather-notebook-cat.jpeg",
      price: "$80.00",
      button: "Buy",
      id: "product-11",
    },
  },
  {
    player: {
      title: "Leather Notebook Bear",
      image: "img/notebooks/leather-notebook-bear.jpeg",
      price: "$80.00",
      button: "Buy",
      id: "product-12",
    },
  },
  {
    player: {
      title: "Leather Notebook Owl",
      image: "img/notebooks/leather-notebook-owl.jpeg",
      price: "$65.00",
      button: "Buy",
      id: "product-13",
    },
  },
  {
    player: {
      title: "Leather Notebook Raccon",
      image: "img/notebooks/leather-notebook-raccon.jpeg",
      price: "$65.00",
      button: "Buy",
      id: "product-14",
    },
  },
  {
    player: {
      title: "Leather Notebook Bird",
      image: "img/notebooks/leather-notebook-bird.jpeg",
      price: "$90.00",
      button: "Buy",
      id: "product-15",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };
  const windowWidth = window.innerWidth;

  if (windowWidth >= 850 && windowWidth <= 1200) {
    item.styles = { ...item.styles, filter: "none", opacity: 1 };
    return item;
  }

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <a class="notebooks__element-link" href="#">
          <img
            class="notebooks__element-image"
            src={item.player.image}
            alt={item.player.title}
          />
        </a>
      </div>
      <div class="carousel-caption">
        <div class="notebooks__element-name">
          <p class="notebooks__element-text">{item.player.title}</p>
        </div>
        <div class="notebooks__element-cost">
          <p class="notebooks__element-price">{item.player.price}</p>
        </div>
        <div class="notebooks__element-button">
          <a
            role="button"
            href="#"
            class="notebooks__button shopping-cart__button-key-class"
            id={item.player.id}
          >
            {item.player.button}
          </a>
        </div>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <div className="carousel-name">
      <h2 className="carousel__title">Notebooks</h2>
      <div className="carousel__wrap">
        <div className="carousel__inner">
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={() => prevClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--left" />
          </button>
          <div className="carousel__container">
            <ul className="carousel__slide-list">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={() => nextClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--right" />
          </button>
          <div className="carousel__dots">
            {items.slice(0, length).map((pos, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={i === activeIdx ? "dot active" : "dot"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<Carousel />, document.getElementById("root"));
