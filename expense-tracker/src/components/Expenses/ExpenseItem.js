import React, { useState } from "react";
import Card from "../Commons/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /**
   * useState is a react hook
   * react hooks starts with 'use' keyword
   * it return 2 value first one is the current state value and second one is a function
   * function can be used to update the value ans also respective component function will reloded/re-evaluated
   */
  const [title, setTitle] = useState(props.expense.title);

  /** handles the click event of change title button */
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
