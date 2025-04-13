import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const saveToLocalStorage = (state) => {
  const items = state.cart.cartItems;

  if (Array.isArray(items)) {
    localStorage.setItem("cart", JSON.stringify(items));
  } else {
    console.warn("القيمة المراد تخزينها بالسلة ليست مصفوفة:", items);
  }
};

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

Store.subscribe(() => {
  saveToLocalStorage(Store.getState());
});

export default Store;
