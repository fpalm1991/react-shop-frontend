import ProductType from "./types/Product";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";
import "./style/typography.css";
import "./style/layout.css";
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

  const handleAddToShoppingCart = (
    product: ProductType,
    amountOrdered: number
  ) => {
    if (shoppingCart.some((p) => p.id === product.id)) {
      const foundProduct = shoppingCart.find((p) => p.id === product.id);

      if (foundProduct) {
        // Removing old entry from shopping cart
        setShoppingCart((prevProducts) => {
          const filteredProducts = prevProducts.filter(
            (p) => p.id !== foundProduct.id
          );

          // Creating new product based on found product
          const updatedProduct = {
            ...foundProduct,
            amountOrdered: foundProduct.amountOrdered
              ? foundProduct.amountOrdered + amountOrdered
              : amountOrdered,
          };

          return [...filteredProducts, updatedProduct];
        });
      }
    } else {
      const productOrdered = { ...product, amountOrdered: amountOrdered };
      setShoppingCart([...shoppingCart, productOrdered]);
    }
  };

  const productsElement: JSX.Element[] = products.map((product) => (
    <Product
      product={product}
      key={product.id}
      addProductToShoppingCart={handleAddToShoppingCart}
    />
  ));

  return (
    <div className="container">
      <header>
        <h2 className="heading heading--h2">Discover Our Products</h2>
        <ShoppingCart shoppingCart={shoppingCart} />
      </header>

      <div className="products">{productsElement}</div>
    </div>
  );
}

export default App;
