import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const LeaveRequest = (props) => {

    const { open, data, onSubmitClicked, onCancelClicked } = props;

    if (!data) {
      return;
    }
    console.log(data);
    return(<>
        <Dialog open={open} className="dialog-LeaveRequest">
            <DialogTitle>Leave Request</DialogTitle>
            <DialogContent>
            <div className="row">
              <div className = "col">Date</div>
              <div className = "col"><input value={data[0].date}/></div>
            </div>
            <div className="row">
              <div className = "col">Time</div>
              <div className = "col"><input value={data[0].period}/></div>
            </div>
            <div className="row">
              <div className = "col">Status</div>
              <div className = "col"><input value={data[0].status} readOnly/></div>
            </div>
            <div className="row">
              <div className = "col">Approver</div>
              <div className = "col"><input value={data[0].approver} readOnly/></div>
            </div>
            <div className="row">
              <div className = "col">Request Reason</div>
              <div className = "col"><input value={data[0].request_reason} /></div>
            </div>

            <div className="row">
              <div className = "col">Deny Reason</div>
              <div className = "col"><input value={data[0].deny_reason} readOnly/></div>
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
    </>);
};

export default LeaveRequest;