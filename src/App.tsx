import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/Product";
import ProductType from "./types/Product";
import { useState } from "react";

const products: ProductType[] = [
  {
    id: 1,
    name: "Dreamer Cup",
    price: 42.5,
    sale: false,
    image: "/products/cup-1.jpg",
  },
  {
    id: 2,
    name: "Tea Cup",
    price: 49.95,
    sale: true,
    image: "/products/cup-2.jpg",
  },
  {
    id: 3,
    name: "Traveler Cup",
    price: 59.99,
    sale: false,
    image: "/products/cup-3.jpg",
  },
  {
    id: 4,
    name: "Coffee Cup",
    price: 45.0,
    sale: true,
    image: "/products/cup-4.jpg",
  },
  {
    id: 5,
    name: "Galactic Cup",
    price: 54.9,
    sale: false,
    image: "/products/cup-5.jpg",
  },
];

function App() {
  const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleRemoveProductFromShoppingCart = (productId: number) => {
    setShoppingCart((prevShoppingCart) =>
      prevShoppingCart.filter((product) => product.id !== productId)
    );
  };

  /*
  useEffect(() => {
    if (showShoppingCart === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });
  */

  const handleProductToCart = (product: ProductType, amount: number) => {
    setShoppingCart((prevCart) => {
      // Check if the product is already in the cart
      const foundProduct = prevCart.find((p) => p.id === product.id);

      if (foundProduct) {
        // Update the product quantity in the cart
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, amountOrdered: (p.amountOrdered || 0) + amount }
            : p
        );
      } else {
        // Add new product to the cart
        return [...prevCart, { ...product, amountOrdered: amount }];
      }
    });
  };

  const productsElement: JSX.Element[] = products.map((product) => (
    <Product
      product={product}
      key={product.id}
      addToCart={handleProductToCart}
    />
  ));

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src="/assets/icons/coffee.svg" alt="Logo" />
        </div>

        <div className="header__search">
          <input type="text" />
        </div>

        <div
          className="header__cart"
          onClick={() => setShowShoppingCart((currState) => !currState)}
        >
          <img src="/assets/icons/shopping-cart.svg" alt="Shopping Cart" />
          <span
            className={`header__cart__amount ${
              shoppingCart.length > 0 ? "header__cart__amount--show" : ""
            }`}
          >
            {shoppingCart.length}
          </span>
        </div>
      </header>

      <ShoppingCart
        products={shoppingCart}
        displayShoppingCart={showShoppingCart}
        onCloseShoppingCart={() => setShowShoppingCart(false)}
        onRemoveFromShoppingCart={handleRemoveProductFromShoppingCart}
      />

      <div className="container">
        <main className="main text text--standard">
          <section className="section__products">
            <h1 className="heading heading--h1">Discover Our Products</h1>

            <div className="products">{productsElement}</div>
          </section>
        </main>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
