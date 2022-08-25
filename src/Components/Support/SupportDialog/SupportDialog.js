import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const SupportDialog = (props) => {
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
    }

    const changeReason = (e) => {
      let newDataState = [...dataState];
      newDataState[0].reason = e.target.value;
      setDataState(newDataState);
    }

    const changeDescribe = (e) => {
      let newDataState = [...dataState];
      newDataState[0].describe = e.target.value;
      setDataState(newDataState);
    }
    return (<>
        <Dialog open={open} className="dialog-OTRequest">
        <DialogTitle>OT Request</DialogTitle>
        <DialogContent>
          <div className="row">
            <label className="col">Date: </label>
            <div className="col">
              <input value={dataState[0].date} onChange={changeDate} />
            </div>
          </div>

          <div className="row">
            <label className="col">Status: </label>
            <div className="col">
              <input value={dataState[0].status} readOnly/>
            </div>
          </div>


          <div className="row">
            <label className="col">Approver: </label>
            <div className="col">
              <input value={dataState[0].approver} readOnly />
            </div>
          </div>

          <div className="row">
            <label className="col">Reason: </label>
            <div className="col">
              <input value={dataState[0].reason} onChange={changeReason}/>
            </div>
          </div>

          <div className="row">
            <label className="col">Describe: </label>
            <div className="col">
              <input value={dataState[0].describe} onChange={changeDescribe}/>
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
    </>);
};

export default SupportDialog;