import React from "react";

function Expensedate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="flex flex-col w-24 bg-stone-700 p-4 rounded-lg border-[1px] border-[#ececec]">
        <div className="font-bold">{month}</div>
        <div className="font-semibold">{day}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}

export default Expensedate;
