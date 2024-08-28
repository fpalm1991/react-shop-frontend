function ShoppingCart() {
  return (
    <>
      <div className="cart">
        <div className="cart__close">
          <img src="/assets/icons/x-circle.svg" alt="Close" />
        </div>
        <h3>Shopping Cart</h3>

        <ul className="cart__products">
          <li className="cart__product">
            Product Name
            <img src="/assets/icons/minus-circle-dark.svg" alt="Remove" />
          </li>
        </ul>

        <div className="cart__price">CHF 280</div>
      </div>
    </>
  );
}

export default ShoppingCart;
