import { FC } from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
import Meal from '@src/models/meal';

const Meals: FC<{ mealsList: Meal[] }> = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals mealList={props.mealsList} />
    </Fragment>
  );
};

export default Meals;
