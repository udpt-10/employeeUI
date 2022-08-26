import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const LeaveRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  const [dataState, setDataState] = useState();
  useEffect(() => {
    if (data) {
      setDataState(data);
    }
  }, [data]);

  if (!dataState) {
    return;
  }
  const changeDate = (e) => {
    let newDataState = [...dataState];
    newDataState[0].date = e.target.value;
    setDataState(newDataState);
  };

  const changeTime = (e) => {
    let newDataState = [...dataState];
    newDataState[0].hour = e.target.value;
    setDataState(newDataState);
  }

  const changeReason = (e) => {
    let newDataState = [...dataState];
    newDataState[0].reason = e.target.value;
    setDataState(newDataState);
  }
  console.log(dataState);
  return (
    <>
      <Dialog open={open} className="dialog-LeaveRequest">
        <DialogTitle>Leave Request</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col">Date</div>
            <div className="col">
              <input value={dataState[0].date} onChange={changeDate} />
            </div>
          </div>
          <div className="row">
            <div className="col">Time</div>
            <div className="col">
              <input value={dataState[0].hour} onChange={changeTime}/>
            </div>
          </div>
          <div className="row">
            <div className="col">Status</div>
            <div className="col">
              <input value={dataState[0].isApproved} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Approver</div>
            <div className="col">
              <input value={dataState[0].managerName} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Request Reason</div>
            <div className="col">
              <input value={dataState[0].reason} onChange={changeReason}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Deny Reason</div>
            <div className="col">
              <input value={dataState[0].approveReason} readOnly />
            </div>
          </div>
          <div className="row">
            <button
              onClick={() => onSubmitClicked(dataState)}
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

export default LeaveRequest;
