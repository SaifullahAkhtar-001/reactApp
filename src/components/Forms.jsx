import React, { useState } from "react";
import Card from "./Card";

function Forms(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const changeTitleHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const [enteredAmount, setenteredAmount] = useState("");
  const changeAmountHandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const [enteredDate, setenteredDate] = useState("");
  const changeDateHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onFormSubmision(ExpenseData)
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };
  return (
    <Card className="bg-stone-950">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col text-left gap-3">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={changeTitleHandler}
            type="text"
            className="p-2 rounded-lg"
          />
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={changeAmountHandler}
            type="number"
            min="0.02"
            step="0.01"
            name=""
            id=""
            className="p-2 rounded-lg"
          />
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={changeDateHandler}
            type="date"
            name=""
            id=""
            min="2023-01-01"
            className="p-2 rounded-lg"
          />
        </div>
        <button
          className="p-2 px-8 mt-4 bg-stone-600 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Card>
  );
}

export default Forms;
