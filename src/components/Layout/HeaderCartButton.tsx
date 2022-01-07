import { FC, useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '@src/store/cart-context';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { showCart } from '@src/store/slices/cartSlice';
import Item from '@src/types/item';

const HeaderCartButton: FC = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(showCart(true));
  };
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber: number, item: Item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClases = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClases} onClick={openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
