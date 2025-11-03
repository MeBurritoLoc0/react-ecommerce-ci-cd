import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

function reducer(state, action) {
  if (action.type === "ADD") {
    const items = [...state.items, action.item];
    return { items, count: items.length };
  }
  return state;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [], count: 0 });
  const addToCart = (item) => dispatch({ type: "ADD", item });
  const value = { ...state, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
