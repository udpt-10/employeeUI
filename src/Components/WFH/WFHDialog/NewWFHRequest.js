import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewWFHRequest = (props) => {
  const { open, employeeID, onNewSubmitClicked, onCancelClicked } = props;
  const [data, setData] = useState({
    employeeId: employeeID,
    date: ""
  });


  const changeDate = (e) =>{
    let newData = {...data};
    newData.date = e.target.value;
    setData(newData);
  }
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewWFHRequest title">
          New WFH Request
        </DialogTitle>
        <DialogContent className="NewWFHRequest content">
          <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input type="datetime-local" onChange={changeDate} />
            </div>
          </div>
          <div className="row">
            <button onClick={() =>onNewSubmitClicked(data)} className="col-btn submit">
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

export default NewWFHRequest;
