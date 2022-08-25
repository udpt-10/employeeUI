import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewOTRequest = (props) => {
  const { employeeID, open, onNewSubmitClicked, onCancelClicked } = props;
  const [data, setData] = useState({
    employeeId: employeeID,
    date: "",
    hour:0,
    reason: ""
  });
 

  const changedDate = (e) => {
    let newData = {...data};
    newData.date = e.target.value;
    setData(newData);
  };

  const changedTime = (e) => {
    let newData = {...data};
    newData.hour = e.target.value;
    setData(newData);
  };

  const changedReason = (e) => {
    let newData = {...data};
    newData.reason = e.target.value;
    setData(newData);
  };



  // console.log(data);
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewOTRequest title">New OT Request</DialogTitle>
        <DialogContent className="NewOTRequest content">
          <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input type="datetime-local" onChange={changedDate} />
            </div>
          </div>

          <div className="row">
            <div className="col">Time: </div>
            <div className="col">
              <input type="number" onChange={changedTime} />
            </div>
          </div>
          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input type="text" onChange={changedReason} />
            </div>
          </div>
          <div className="row">
            <button
              onClick={() => onNewSubmitClicked(data)}
              className="col-btn submit"
            >
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

export default NewOTRequest;
