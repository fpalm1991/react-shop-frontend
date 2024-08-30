import ProductType from "../types/Product";

interface ShoppingCartProps {
  products: ProductType[];
  displayShoppingCart: boolean;
  onCloseShoppingCart: () => void;
  onRemoveFromShoppingCart: (productId: number) => void;
}

function ShoppingCart({
  products,
  displayShoppingCart,
  onCloseShoppingCart,
  onRemoveFromShoppingCart,
}: ShoppingCartProps) {
  const shopingCartProductsElement: JSX.Element[] = products.map((product) => (
    <li className="cart__product" key={product.id}>
      {product.name} ({product.amountOrdered})
      <img
        className="cart__product__remove"
        src="/assets/icons/minus-circle-dark.svg"
        alt="Remove"
        onClick={() => onRemoveFromShoppingCart(product.id)}
      />
    </li>
  ));

  const prices: number[] = products.map(
    (product) => product.amountOrdered! * product.price
  );

  const shoppingCartPrice: number = prices.reduce(
    (prev: number, next: number) => prev + next,
    0
  );

  return (
    <>
      <div
        className={`cart text text--standard ${
          displayShoppingCart ? "cart--show" : ""
        }`}
      >
        <div className="cart__close">
          <img
            src="/assets/icons/x-circle.svg"
            onClick={onCloseShoppingCart}
            alt="Close"
          />
        </div>
        <h3>Shopping Cart</h3>

        <ul className="cart__products">{shopingCartProductsElement}</ul>

        <div className="cart__price">
          CHF {Math.round(shoppingCartPrice * 100) / 100}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
