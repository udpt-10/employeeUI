import React, {useState} from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewLeaveRequest = (props) => {
  const { open, onNewSubmitClicked, onCancelClicked, employeeID } = props;
  const [data, setData] = useState({
    employeeId: employeeID,
    date: "",
    hour: 0,
    reason: "",
    managerId:  JSON.parse(localStorage.getItem("data")).manager
  });

  const changeDate =  (e) =>{
    let newData = {...data};
    newData.date = e.target.value;
    setData(newData);
  };


  const changeTime = (e) =>{
    let newData = {...data};
    newData.hour = e.target.value;
    setData(newData);
  };

  const changeReason = (e) =>{
    let newData = {...data};
    newData.reason = e.target.value;
    setData(newData);
  }
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewLeaveRequest title">
          New Leave Request
        </DialogTitle>
        <DialogContent className="NewLeaveRequest content">
          <div className="row">
            <div className="col">Date</div>
            <div className="col">
              <input type="datetime-local" onChange={changeDate} />
            </div>
          </div>
          <div className="row">
            <div className="col">Time</div>
            <div className="col">
              <input type="number" onChange={changeTime}/>
            </div>
          </div>
          <div className="row">
            <div className="col">Request Reason</div>
            <div className="col">
              <input type="text" onChange={changeReason} />
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

export default NewLeaveRequest;
