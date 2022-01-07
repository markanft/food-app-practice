import { FC } from 'react';

// import MealType from '@src/types/meal';
import Meal from '@src/models/meal';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals: FC<{ mealList: Meal[] }> = (props) => {
  const mealList = props.mealList.map((meal) => <MealItem key={meal.id} meal={meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
