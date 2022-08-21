import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewLeaveRequest = (props) => {
  const { open, onSubmitClicked, onCancelClicked } = props;
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
              <input type="date" />
            </div>
          </div>
          <div className="row">
            <div className="col">Time</div>
            <div className="col">
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col">Request Reason</div>
            <div className="col">
              <input type="text" />
            </div>
          </div>
          <div className="row">
            <button onClick={onSubmitClicked} className="col-btn submit">
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
