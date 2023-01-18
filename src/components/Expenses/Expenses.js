import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2021");
  const inputFilterDate = (inputDate) => {
    setFilterDate(inputDate);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate.toString();
  });
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterDate}
          onGetFilterDate={inputFilterDate}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} deleteItemHandler={props.deleteItemHandler}/>
      </Card>
    </li>
  );
};
export default Expenses;
