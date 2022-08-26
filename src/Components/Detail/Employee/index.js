import React from "react";
import "./index.scss";
const Employee = (props) => {
  const { data } = props;

  const checkSex = (sex) => {
    if(sex ===true)
      return <p>Sex: Female </p>
    if (sex ===false)
      return <p>Sex: Male </p>
  }
  console.log("data in employee: ", data);
  return (
    <div className="employee-body">
      <p className="name-employee">{data.employeeName}</p>
      <div className="row employee-detail">
        <div className="col employee-detail-left">
          <p>EmployeeID: {data.employeeId}</p>
          <p>Address: {data.address}</p>
          <p>Phone Number: {data.phone}</p>
          <p>Date Of Brith: {data.dateOfBirth}</p>
          {checkSex(data.sex)}
        </div>
        <div className="col employee-detail-right">
          <p>Email: {data.email}</p>
          <p>Position: {data.position}</p>
          <p>Information Summary: {data.informationSummary}</p>
          <p>Leaving Day Balanec: {data.leavingDayBalance}</p>
        </div>
      </div>
      <div className="employee-company">
        <p>Name Company: TMA </p>
        <p>Director: {data.directorName}</p>
        <p>Manager: {data.managerName}</p>
      </div>
    </div>
  );
};

export default Employee;
