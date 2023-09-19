import React, { useState } from "react";
import Card from "./Card";
import FilterYear from "./Expenseitems/FilterYear";
import Expenseitems from "./Expenseitems/Expenseitems";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./Expenseitems/ExpenseList";

function Expense(props) {
  const [year, setYear] = useState();
  const FilterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  const changeHandler = (seletedYear) => {
    setYear(seletedYear);
  };
  return (
    <div>
      <Card className="bg-stone-950">
        <FilterYear onFilterChange={changeHandler} />
        <ExpenseChart expenses={FilterExpense}/>
        <ExpensesList expense={FilterExpense}/>
      </Card>
    </div>
  );
}

export default Expense;
