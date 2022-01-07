import { FC } from 'react';
import classes from './Card.module.css';

const Card: FC = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
