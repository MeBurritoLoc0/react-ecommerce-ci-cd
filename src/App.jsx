import { CartProvider } from "./cart/CartContext";
import ProductList from "./components/ProductList";
import HeaderCartCount from "./components/HeaderCartCount";
import "./App.css";

const products = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

function App() {
  return (
    <CartProvider>
      <HeaderCartCount />
      <ProductList products={products} />
    </CartProvider>
  );
}

export default App;
