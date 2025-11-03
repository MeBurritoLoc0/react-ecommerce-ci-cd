export default function ProductCard({ product, onAdd }) {
  const { title, price, inStock = true } = product;
  return (
    <div>
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
      <button disabled={!inStock} onClick={() => onAdd(product)}>
        {inStock ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
}
