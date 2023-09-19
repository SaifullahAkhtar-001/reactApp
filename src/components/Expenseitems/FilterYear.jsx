import React from "react";
import Card from "../Card";

function FilterYear(props) {
  const filterHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <Card className="flex justify-between items-center mb-4">
      <p>Filter By Year</p>
      <select
        className="p-4 rounded-xl"
        onChange={filterHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </Card>
  );
}

export default FilterYear;
