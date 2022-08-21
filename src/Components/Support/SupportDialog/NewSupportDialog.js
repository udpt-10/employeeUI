import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewSupportDialogRequest = (props) => {
  const { open, onSubmitClicked, onCancelClicked } = props;
  return (
    <>
      <Dialog open={open}>
        <DialogTitle className="NewOTRequest title">New OT Request</DialogTitle>
        <DialogContent className="NewOTRequest content">
          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input />
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

export default NewSupportDialogRequest;
