import ProductType from "../types/Product";
import "../style/shoppingcart.css";
import { useState } from "react";

interface ShoppingCartProps {
  shoppingCart: ProductType[];
}

function ShoppingCart({ shoppingCart }: ShoppingCartProps) {
  const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false);

  const shoppingCartListItems = shoppingCart.map((product) => (
    <li className="shoppingcart__list__item" key={product.id}>
      {product.name} ({product.amountOrdered})
    </li>
  ));

  return (
    <>
      <div
        className="shoppingcart"
        onClick={() => setShowShoppingCart((prevShow) => !prevShow)}
      >
        <div className="shoppingcart__image">
          <img src="/icons/shopping-cart.svg" alt="" />
          <span>{shoppingCartListItems.length}</span>
        </div>
      </div>

      <div
        className={`shohppingcart__overview ${
          showShoppingCart ? "shohppingcart__overview--show" : ""
        }`}
      >
        <ul className="shoppingcart__list">{shoppingCartListItems}</ul>
      </div>
    </>
  );
}

export default ShoppingCart;
