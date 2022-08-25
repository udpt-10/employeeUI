import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const WFHRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  const [dataState, setDataState] = useState();

  useEffect(() => {
    if (data) {
      setDataState(data);
    }
  }, [data]);

  const changeDate = (e) =>{
    let newDataState = [...dataState];
    newDataState[0].date = e.target.value;
    setDataState(newDataState);
  }
  if (!dataState) {
    return;
  }
  return (
    <>
      <Dialog open={open} className="dialog-WFHRequest">
        <DialogTitle>WFH Request</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col">Date</div>
            <div className="col">
              <input value={dataState[0].date} onChange={changeDate} type="datetime-local"/>
            </div>
          </div>
          <div className="row">
            <button onClick={() => onSubmitClicked(dataState)} className="col-btn submit">
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

export default WFHRequest;
