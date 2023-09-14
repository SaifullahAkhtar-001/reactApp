import React, { useState } from "react";
import Expensedate from "./Expensedate";
import Card from "../Card";

function Expenseitems(props) {
  return (
      <Card className="flex max-xl:flex-col max-xl:gap-10 justify-between items-center mb-4 bg-stone-900">
        <Expensedate date={props.date} />
        <div className="font-bold text-2xl">{props.title}</div>
        <div className="p-4 bg-stone-700 rounded-xl border-gray-400 border-[1px]">
          ${props.amount}
        </div>
      </Card>

  );
}

export default Expenseitems;
