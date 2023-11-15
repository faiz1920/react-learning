import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  /**
   * multiple useState can be used to handle states of multiple variables.
   * each variable state can be updated individually
   */
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /**
   * single useState can be used to handle the state of multiple varibales as an object
   * all variables in object need to update all variables
   */
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);

    /** #first approach **/
    // setUserInput({ ...userInput, title: event.target.value });

    /**
     * #second approach
     * react schedules the state updates, does't perform instantly
     * so using #first approach may result in outdate or incorrect states
     * in #second approach react guarantee the states will be the latest state snapshot
     */
    // setUserInput((...prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({ ...userInput, amount: event.target.value });
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput, date: event.target.value });
  };

  /**
   * shared change event handler
   */
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event) => inputChangeHandler("title", event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler("amount", event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler("date", event.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
