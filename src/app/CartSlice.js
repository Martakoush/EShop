import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartState: false,
    cartItems: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setOpenCart: (state) => {
            state.cartState = true;
        },
        setCloseCart: (state) => {
            state.cartState = false;
        },
        addNewItem: (state, action) => {
            const itemCart = state.cartItems.find(i => i.id === action.payload.id);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            // تحديث المجموع الكلي للكمية والمبلغ
            state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        },
        removeItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartTotalQuantity -= state.cartItems[itemIndex].quantity;
                state.cartTotalAmount -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
                state.cartItems.splice(itemIndex, 1);
            }
        },
        clearItems: (state) => {
            state.cartItems = [];
            state.cartTotalQuantity = 0;
            state.cartTotalAmount = 0;
        },
    }
})

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartQTY = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const { setCloseCart, setOpenCart,clearItem, addNewItem, clearItems, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
