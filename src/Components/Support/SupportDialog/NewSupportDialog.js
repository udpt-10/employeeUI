import React, {useState} from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewSupportDialogRequest = (props) => {
  const { employeeID, open, onNewSubmitClicked, onCancelClicked } = props;

  const [data, setData] = useState({
    employeeId: employeeID,
    date: "",
    department: "",
    reason: "",
    describe: "",
    managerId:   JSON.parse(localStorage.getItem("data")).manager,
    directorId: JSON.parse(localStorage.getItem("data")).director
  });

  const changeDate = (e) => {
    let newData = {...data};
    newData.date = e.target.value;
    setData(newData);
  }

  const changedDepartment = (e) => {
    let newData = {...data};
    newData.department = e.target.value;
    setData(newData);
  }

  const changeReason = (e) => {
    let newData = {...data};
    newData.reason = e.target.value;
    setData(newData);
  }

  const changeDescribe = (e) => {
    let newData = {...data};
    newData.describe = e.target.value;
    setData(newData);
  }
  
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewOTRequest title">New OT Request</DialogTitle>
        <DialogContent className="NewOTRequest content">
        <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input type="datetime-local" onChange={changeDate}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Department: </div>
            <div className="col">
              <input type="text" onChange={changedDepartment}/>
            </div>
          </div>
          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input type="text" onChange={changeReason}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Describe: </div>
            <div className="col">
              <input type="text" onChange={changeDescribe}/>
            </div>
          </div>
          <div className="row">
            <button onClick={() => onNewSubmitClicked(data)} className="col-btn submit">
              Submit
            </button>
            <button onClick={onCancelClicked} className="col-btn cancel">
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewSupportDialogRequest;
