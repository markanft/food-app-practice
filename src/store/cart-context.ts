import React from 'react';
import CartContextInterface from '@src/interfaces/cartContextInterface';

const CartContext = React.createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
