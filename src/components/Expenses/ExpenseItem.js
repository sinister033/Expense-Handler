import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  // setTitle(props.title);
  //   console.log(title);
  // };
  // const deleteHandler = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Click me </button> */}
      </div>
      <div>
        <button className="btn" onClick={props.deleteItemHandler} value={props.id}>
          Delete
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
