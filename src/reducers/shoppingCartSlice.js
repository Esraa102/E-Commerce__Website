import { createSlice } from "@reduxjs/toolkit";

export const shoppingSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedCard = {
        id: action.payload.id,
        title: action.payload.title,
        img: action.payload.productImg,
        cartQuantity: 1,
        price: Number(action.payload.price),
      };
      state.cart.push(addedCard);
    },
    increaseCart: (state, action) => {
      const card = state.cart.filter(
        (ele) => ele.id === Number(action.payload)
      )[0];
      if (card.cartQuantity <= 20) {
        card.cartQuantity += 1;
      }
    },
    decreaseCart: (state, action) => {
      const card = state.cart.filter(
        (ele) => ele.id === Number(action.payload)
      )[0];
      if (card.cartQuantity > 1) {
        card.cartQuantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (ele) => ele.id !== Number(action.payload)
      );
    },
  },
});
export const { addToCart, removeFromCart, increaseCart, decreaseCart } =
  shoppingSlice.actions;
