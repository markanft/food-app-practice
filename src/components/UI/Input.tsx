import { forwardRef, ForwardRefExoticComponent } from 'react';
import classes from './Input.module.css';
import InputData from '@src/types/inputData';

const Input = forwardRef<HTMLInputElement, { label: string; input: InputData }>(
  (props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} id={props.input.id} {...props.input.config} />
      </div>
    );
  }
);

export default Input;
