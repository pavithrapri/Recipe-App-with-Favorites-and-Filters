import React from "react";

const FilterBar = ({ setFilter }) => {
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Gluten-Free">Gluten-Free</option>
      </select>
    </div>
  );
};

export default FilterBar;
