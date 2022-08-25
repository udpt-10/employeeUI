import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewOTRequest = (props) => {
  const { open, onNewSubmitClicked, onCancelClicked } = props;
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState(0);
  const [reason, setReason] = useState("");

  const changedDate = (e) =>{
    setDate(e.target.value);
  }

  const changedTime = (e) =>{
    setTime(e.target.value);
  }


  const changedReason = (e) =>{
    setReason(e.target.value);
  }

  if(date && time && reason) {
    let tmp = {date, time, reason};
    setData(tmp);
  }
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewOTRequest title">New OT Request</DialogTitle>
        <DialogContent className="NewOTRequest content">
          <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input type="datetime-local" onChange={changedDate}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Time: </div>
            <div className="col">
              <input type="number" onChange={changedTime}/>
            </div>
          </div>
          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input type="text" onChange={changedReason}/>
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

export default NewOTRequest;
