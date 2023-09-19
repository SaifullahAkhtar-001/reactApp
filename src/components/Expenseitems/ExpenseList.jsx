import React from 'react';

import Expenseitems from './Expenseitems';

const ExpensesList = (props) => {
  if (props.expense.length === 0) {
    return <h2>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.expense.map((expense) => (
        <Expenseitems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;