import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const SupportDialog = (props) => {
    const { open, data, onSubmitClicked, onCancelClicked } = props;

    if (!data) {
      return;
    }
  
    return (<>
        <Dialog open={open} className="dialog-OTRequest">
        <DialogTitle>OT Request</DialogTitle>
        <DialogContent>
          <div className="row">
            <label className="col">Date: </label>
            <div className="col">
              <input value={data[0].date} readOnly />
            </div>
          </div>

          <div className="row">
            <label className="col">Status: </label>
            <div className="col">
              <input value={data[0].status} readOnly/>
            </div>
          </div>


          <div className="row">
            <label className="col">Approver: </label>
            <div className="col">
              <input value={data[0].approver} readOnly />
            </div>
          </div>

          <div className="row">
            <label className="col">Reason: </label>
            <div className="col">
              <input value={data[0].reason} />
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
    </>);
};

export default SupportDialog;