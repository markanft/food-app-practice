import { FC, useContext } from 'react';
import Meal from '@src/models/meal';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '@src/store/cart-context';
import CartContextInterface from '@src/interfaces/cartContextInterface';

const MealItem: FC<{ meal: Meal }> = (props) => {
  const cartCtx: CartContextInterface = useContext(CartContext);
  const price: string = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount: number): void => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
