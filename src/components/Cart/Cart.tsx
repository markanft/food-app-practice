import { FC, useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { showCart } from '@src/store/slices/cartSlice';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import CartContext from '@src/store/cart-context';
import CartItem from './CartItem.js';
import CartContextInterface from '@src/interfaces/cartContextInterface';
import Item from '@src/types/item';

const DModal = dynamic(() => import('../UI/Modal'), { ssr: false });

const Cart: FC = () => {
  const cartCtx: CartContextInterface = useContext(CartContext);
  const totalAmount: string = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems: boolean = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string): void => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: Item): void => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(showCart(false));
  };
  const cartState = useAppSelector((state) => state.cart);
  return (
    <Fragment>
      {cartState.isShown && (
        <DModal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={closeModal}>
              Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </DModal>
      )}
    </Fragment>
  );
};

export default Cart;
