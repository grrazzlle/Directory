import React from "react";

function SearchForm(props) {
  return (
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
      </div>
  );
}

export default SearchForm;
