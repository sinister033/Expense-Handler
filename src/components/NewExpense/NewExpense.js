import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const saveExpenseFormDataHandler = (enteredData) => {
    const singleExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(singleExpenseData);
    props.onExpenseData(singleExpenseData);
    setIsVisible(false);
  };
  const addExpenseHandler = () => {
    setIsVisible(true);
  };
  const onMakeItDisappear=()=>{
    setIsVisible(false);
  }
  return (
    <div className="new-expense">
      {!isVisible && (
        <button className=".new-expense" onClick={addExpenseHandler}  >
          Add Expense
        </button>
      )}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseFormDataHandler} onCancelButton={onMakeItDisappear}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
