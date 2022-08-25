import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const OTRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  const [dataState, setDataState] = useState();

  useEffect(() => {
    if (data) {
      setDataState(data);
    }
  }, [data]);

  const changeHour = (e) => {
    let newDataState = [...dataState];
    newDataState[0].hour = e.target.value;
    setDataState(newDataState);
    console.log(e.target.value);
  };

  const changeReason = (e) => {
    let newDataState = [...dataState];
    newDataState[0].reason = e.target.value;
    setDataState(newDataState);
    console.log(e.target.value);
  };

  console.log(data);
  if (!dataState) {
    return;
  }
  return (
    <>
      <Dialog open={open} className="dialog-OTRequest">
        <DialogTitle> OT Request </DialogTitle>{" "}
        <DialogContent>
          <div className="row">
            <label className="col"> ID: </label>{" "}
            <div className="col">
              <input value={dataState[0].id} readOnly />
            </div>{" "}
          </div>
          <div className="row">
            <label className="col"> Date: </label>{" "}
            <div className="col">
              <input value={dataState[0].date} />{" "}
            </div>{" "}
          </div>
          <div className="row">
            <label className="col"> Time: </label>{" "}
            <div className="col">
              <input
                type="text"
                value={dataState[0].hour}
                onChange={changeHour}
              />{" "}
            </div>{" "}
          </div>
          <div className="row">
            <label className="col"> Status: </label>{" "}
            <div className="col">
              <input value={dataState[0].isApproved} readOnly />
            </div>{" "}
          </div>
          <div className="row">
            <label className="col"> Approver: </label>{" "}
            <div className="col">
              <input value={dataState[0].managerId} readOnly />
            </div>{" "}
          </div>
          <div className="row">
            <label className="col"> Reason: </label>{" "}
            <div className="col">
              <input
                value={dataState[0].reason}
                type="text"
                onChange={changeReason}
              />{" "}
            </div>{" "}
          </div>
          <div className="row">
            <button
              onClick={() => onSubmitClicked(dataState)}
              className="col-btn submit"
            >
              Submit{" "}
            </button>{" "}
            <button onClick={onCancelClicked} className="col-btn cancel">
              Cancel{" "}
            </button>{" "}
          </div>{" "}
        </DialogContent>{" "}
      </Dialog>{" "}
    </>
  );
};

export default OTRequest;
