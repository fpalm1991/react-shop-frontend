import ShoppingCart from "./components/ShoppingCart";
import Product from "./components/Product";
import ProductType from "./types/Product";
import { useState } from "react";

const productsArray: ProductType[] = [
  {
    id: 1,
    name: "Fantastic Coffee Cup",
    price: 42.5,
    sale: false,
    image: "/products/cup-1.jpg",
  },
  {
    id: 2,
    name: "Futuristic Tea Cup",
    price: 49.95,
    sale: true,
    image: "/products/cup-2.jpg",
  },
  {
    id: 3,
    name: "Traveler Coffee Cup",
    price: 59.99,
    sale: false,
    image: "/products/cup-3.jpg",
  },
  {
    id: 4,
    name: "Minimalistic Tea Cup",
    price: 45.0,
    sale: true,
    image: "/products/cup-4.jpg",
  },
  {
    id: 5,
    name: "Galactic Coffee Cup",
    price: 54.9,
    sale: false,
    image: "/products/cup-5.jpg",
  },
];

function App() {
  const [shoppingCart, setShoppingCart] = useState<ProductType[]>([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [fadeOut, setFadeOut] = useState(false);

  const handleRemoveProductFromShoppingCart = (productId: number) => {
    setShoppingCart((prevShoppingCart) =>
      prevShoppingCart.filter((product) => product.id !== productId)
    );
  };

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

  const filteredProducts =
    search.length > 2
      ? productsArray.filter((product) =>
          product.name
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim())
        )
      : productsArray;

  const productsElement: JSX.Element[] = filteredProducts.map((product) => (
    <Product
      product={product}
      key={product.id}
      addToCart={handleProductToCart}
      fadeOut={fadeOut}
    />
  ));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearch(newSearchTerm);

    // Only start effect if the search term is longer than 2 and if there
    // are still products to filter (more than 1 products is shown)
    if (newSearchTerm.length > 2 && productsElement.length > 1) {
      setFadeOut(true);

      setTimeout(() => {
        setFadeOut(false);
      }, 500);
    } else {
      setFadeOut(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src="/assets/icons/coffee.svg" alt="Logo" />
        </div>

        <div className="header__search">
          <input type="text" onChange={handleSearchChange} />
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
