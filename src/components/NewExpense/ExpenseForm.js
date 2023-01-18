import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //   const [changedUserInput, setChangedUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const changedTitleHandler = (event) => {
    setInputTitle(event.target.value);
    // setChangedUserInput({
    //   ...changedUserInput,
    //   enteredTitle: event.target.value, // this may give some different result
    // });
    // setChangedUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };  // whenever state depends on previous state we should use this function it is more optimal
    // });
  };
  const changedAmountHandler = (event) => {
    setInputAmount(event.target.value);
    // setChangedUserInput({
    //   ...changedUserInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const changedDateHandler = (event) => {
    setInputDate(event.target.value);
    // setChangedUserInput({
    //   ...changedUserInput,
    //   enteredDate: event.target.value,
    // });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__actions">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={inputTitle}
              onChange={changedTitleHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={inputAmount}
              onChange={changedAmountHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              value={inputDate}
              onChange={changedDateHandler}
            ></input>
          </div>
        </div>
        <button type="button" className="new-expense__action" onClick={props.onCancelButton}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
