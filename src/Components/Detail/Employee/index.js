import React from "react";
import "./index.scss";
const Employee = () => {
  return (
    <div className="employee-body">
      <p className="name-employee">Tran Bao Khanh</p>
      <div className="employee-detail">
        <div className="employee-detail-left">
          <p>EmployeeID: 12312312</p>
          <p>Address: HCM</p>
          <p>Phone Number: 12312312312</p>
        </div>
        <div className="employee-detail-right">
          <p>Email: tbkhanh.company@gmail.com</p>
          <p>Position: Engineer</p>
          <p>Information Summary</p>
        </div>
      </div>
      <div className="employee-company">
        <p>Name Company: xxx </p>
        <p>Director: </p>
        <p>Manager</p>
      </div>
    </div>
  );
};

export default Employee;
