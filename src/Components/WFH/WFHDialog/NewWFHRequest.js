import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewWFHRequest = (props) => {
  const { open, onSubmitClicked, onCancelClicked } = props;

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
              <input type="date" />
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

export default NewWFHRequest;
