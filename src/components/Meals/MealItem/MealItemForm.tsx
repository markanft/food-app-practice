import Input from '@src/components/UI/Input';
import { FC } from 'react';
import classes from './MealItemForm.module.css';
import { FormEvent, useRef, MutableRefObject, useState } from 'react';

const MealItemForm: FC<{ id: string; onAddToCart: (amount: number) => void }> = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const enteredAmount: string = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          config: {
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          },
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
