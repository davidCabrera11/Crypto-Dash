import React from "react";

const FiterInput = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        placeholder="Filter coins by name or symbol (ticker)"
        onChange={(e) => onFilterChange(e.target.value)}
      ></input>
    </div>
  );
};

export default FiterInput;
