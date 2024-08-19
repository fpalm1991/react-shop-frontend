import ProductType from "./types/Product";
import Product from "./components/Product";
import "./style/typography.css";
import "./style/layout.css";

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

const productsElement: JSX.Element[] = products.map((product) => (
  <Product product={product} key={product.id} />
));

function App() {
  return (
    <div className="container">
      <h2 className="heading heading--h2">Discover Our Products</h2>

      <div className="products">{productsElement}</div>
    </div>
  );
}

export default App;
