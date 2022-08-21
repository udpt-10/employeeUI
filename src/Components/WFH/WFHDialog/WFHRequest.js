import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const WFHRequest = (props) => {
    const { open, data, onSubmitClicked, onCancelClicked } = props;
    if (!data) {
        return;
      }
    return (<>
        <Dialog open={open} className="dialog-WFHRequest">
            <DialogTitle>WFH Request</DialogTitle>
            <DialogContent>
                <div className="row">
                    <div className="col">Date</div>
                    <div className="col"><input value={data[0].date}/></div>
                </div>
                <div className="row">
                    <div className="col">Checkin</div>
                    <div className="col">
                        <input type="datetime-local"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">Checkout</div>
                    <div className="col">
                        <input type="datetime-local"/>
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

export default WFHRequest;