import { useState } from "react";
import "./index.css";
import Expense from "./components/Expense";
import Forms from "./components/Forms";

function App() {
  const SubmitHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(ExpenseData);
  };
  return (
    <div className="flex flex-col gap-10">
      <Forms onFormSubmision={SubmitHandler} />
      <Expense />
    </div>
  );
}

export default App;
