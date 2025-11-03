import { useCart } from "../cart/CartContext";
export default function ProductList({ products }) {
  const { addToCart } = useCart();
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <span>{p.title}</span>{" "}
          <button onClick={() => addToCart(p)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
}
