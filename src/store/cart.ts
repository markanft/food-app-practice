import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  isShown: boolean;
};

const initialAuthState: CartState = {
  isShown: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialAuthState,
  reducers: {
    showCart(state, action: PayloadAction<boolean>) {
      state.isShown = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
