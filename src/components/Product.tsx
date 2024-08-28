import { useState } from "react";
import ProductType from "../types/Product";

interface ProductProps {
  product: ProductType;
  addToCart: (product: ProductType, amount: number) => void;
}

function Product({ product, addToCart }: ProductProps) {
  const [productAmount, setProductAmount] = useState(1);

  return (
    <>
      <article className="product">
        <div className="product__image">
          <img
            className="product__image"
            src={product.image}
            alt="Product Name"
          />
        </div>

        <h3 className="product__heading">{product.name}</h3>

        <div className="product__info">{product.price}</div>

        <div className="product__amount">
          <div
            className="product__amount__sub"
            onClick={() => {
              setProductAmount((currAmount) =>
                currAmount < 1 ? 0 : currAmount - 1
              );
            }}
          >
            <img src="/assets/icons/minus-circle.svg" alt="Reduce Amount" />
          </div>

          <div className="product__ammount__value">{productAmount}</div>

          <div
            className="product__amount__add"
            onClick={() => {
              setProductAmount((currAmount) => currAmount + 1);
            }}
          >
            <img src="/assets/icons/plus-circle.svg" alt="Increase Amount" />
          </div>
        </div>

        <button
          className="product__add"
          onClick={() => {
            addToCart(product, productAmount);
            setProductAmount(1);
          }}
        >
          Add To Cart
        </button>
      </article>
    </>
  );
}

export default Product;
