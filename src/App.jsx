import { useState } from "react";
import "./index.css";
import Forms from "./components/Forms";
import Expense from "./components/Expense";

function App() {
  const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Bills",
      amount: 200,
      date: new Date(2021, 1, 20),
    },
    {
      id: "e3",
      title: "Rent",
      amount: 2000,
      date: new Date(2019, 3, 20),
    },
  ];
  const [Expenses, setExpense] = useState(DUMMY_EXPENSE);
  const formSubmitHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpense(prevExpenses=>{
      return[ExpenseData,...prevExpenses]});
  };
  
  return (
    <div className="flex flex-col gap-10">
      <Forms onFormSubmision={formSubmitHandler} />
      <Expense items={Expenses}/>
    </div>
  );
}

export default App;
