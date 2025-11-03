import { useCart } from "../cart/CartContext";
export default function HeaderCartCount() {
  const { count } = useCart();
  return <div aria-label="cart-count">{count}</div>;
}
