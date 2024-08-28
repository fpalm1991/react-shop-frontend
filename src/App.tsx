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

  const shoppingCartElement: JSX.Element[] = shoppingCart.map((product) => (
    <li key={product.id}>
      {product.name} ({product.amountOrdered})
    </li>
  ));

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img src="/assets/icons/coffee.svg" alt="Logo" />
          </div>

          <div className="header__search">
            <input type="text" />
          </div>

          <div className="header__cart header__cart--active">
            <img src="/assets/icons/shopping-cart.svg" alt="Shopping Cart" />
          </div>
        </header>

        <main className="text text--standard">
          <ShoppingCart />

          <ul>{shoppingCartElement}</ul>

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
