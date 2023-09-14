import React, { useState } from 'react'
import Expenseitems from './Expenseitems/Expenseitems';
import Card from './Card';
import FilterYear from './Expenseitems/FilterYear';

function Expense() {
  const [year, setYear] = useState(2020)
  const changeHandler = seletedYear =>{
      setYear(seletedYear);
  };
    const Expenses = [
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
          date: new Date(2021, 3, 20),
        },
      ];
      return (
        <>
        <Card className='bg-stone-950'>
          <FilterYear onFilterChange={changeHandler} defaultYear={year}/>
          <Expenseitems title={Expenses[0].title} date={Expenses[0].date} amount={Expenses[0].amount}/>
          <Expenseitems title={Expenses[1].title} date={Expenses[1].date} amount={Expenses[1].amount}/>
          <Expenseitems title={Expenses[2].title} date={Expenses[2].date} amount={Expenses[2].amount}/>
        </Card>
        </>
        );
}

export default Expense
