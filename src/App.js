import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "School Books",
    amount: 94.12,
    date: new Date(2021, 3, 14),
  },
  {
    id: "2",
    title: "New Washing machine",
    amount: 789.49,
    date: new Date(2020, 9, 14),
  },
  {
    id: "3",
    title: "House Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 22),
  },
  {
    id: "4",
    title: "New Desk (Steel)",
    amount: 450,
    date: new Date(2022, 5, 11),
  },
];

const App = () => {
  const [expenses, setExpensesArray] = useState(DUMMY_EXPENSES);
  const expenseDataHandler = (expense) => {
   // console.log(expense);
    setExpensesArray((prevState) => {
      return [expense, ...prevState];
    });
  };
  const deleteHandler = (id) => {
    let newItems = expenses.filter((item) => {
      return item.id.toString() !== id.target.value;
    });
    console.log(id.target.value);
    setExpensesArray(newItems);
  };
  return (
    <div>
      <NewExpense onExpenseData={expenseDataHandler}></NewExpense>
      <Expenses expenses={expenses} deleteItemHandler={deleteHandler}></Expenses>
    </div>
  );
};

export default App;
