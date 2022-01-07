// index.tsx
import React, { FC } from 'react';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import Header from '@src/components/Layout/Header';
import Meals from '@src/components/Meals/Meals';
import Meal from '@src/models/meal';
import { GetStaticProps } from 'next';

const DUMMY_MEALS: Meal[] = [
  new Meal('m1', 'Sushi', 'Finest fish and veggies', 22.99),
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Home: FC<{ mealList: Meal[] }> = (props) => {
  return (
    <main>
      <Meals mealsList={props.mealList} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      mealList: JSON.parse(JSON.stringify(DUMMY_MEALS)),
    },
  };
};

export default Home;
