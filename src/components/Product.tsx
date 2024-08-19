import ProductType from "../types/Product";
import "../style/product.css";
import { useState } from "react";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const [amount, setAmount] = useState(1);

  return (
    <article className={`product ${product.sale ? "product--sale" : ""}`}>
      <h3 className="product__heading">{product.name}</h3>
      <img className="product__image" src={product.image} alt={product.name} />

      <div className="product__info">
        <p className="product__info__price">CHF {product.price}</p>
      </div>

      <div className="product__buttons">
        <button className="product__button">Discover</button>
        <div>
          <div className="product__add">
            <div
              className="product__button__add"
              onClick={() => {
                if (amount > 1) {
                  setAmount(amount - 1);
                } else {
                  setAmount(1);
                }
              }}
            >
              -
            </div>
            <input
              className="product__amount"
              type="number"
              value={amount}
              onChange={(e) =>
                Number(e.target.value) > 1
                  ? setAmount(Number(e.target.value))
                  : setAmount(1)
              }
            />
            <div
              className="product__button__add"
              onClick={() => setAmount(amount + 1)}
            >
              +
            </div>
          </div>
          <button
            className="product__button product__button--cart"
            onClick={() => {
              setAmount(1);
            }}
          >
            <img src="/icons/shopping-cart.svg" alt="Add to cart" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Product;
