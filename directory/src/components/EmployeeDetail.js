import React from "react";

function EmployeeDetail(props) {
  return (

    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.handleOnClick}>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(item => (
          <tr key={item.id.value}>
            <td><img alt={item.name.first + " " + item.name.last} src={item.picture.thumbnail}></img></td>
            <td>{item.name.first} {item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.cell}</td>
            <td>{item.dob.date.slice(0,10)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeDetail;
