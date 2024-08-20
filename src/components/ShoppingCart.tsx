import ProductType from "../types/Product";

interface ShoppingCartProps {
  shoppingCart: ProductType[];
}

function ShoppingCart({ shoppingCart }: ShoppingCartProps) {
  const shoppingCartListItems = shoppingCart.map((product) => (
    <li className="shoppingcart__list__item" key={product.id}>
      {product.name} ({product.amountOrdered})
    </li>
  ));

  return (
    <div className="shoppingcart">
      <ul className="shoppingcart__list">{shoppingCartListItems}</ul>
    </div>
  );
}

export default ShoppingCart;
