import React, { Fragment} from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expenses Found for Selected Year
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expenses) => {
        return (
          <Fragment>
            <ExpenseItem
              id={expenses.id}
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
              deleteItemHandler={props.deleteItemHandler}
            />
          </Fragment>
        );
      })}
    </ul>
  );
};
export default ExpensesList;
