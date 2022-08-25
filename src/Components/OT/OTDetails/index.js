import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import OTRequest from "../OTDialog/OTRequest";
import NewOTRequest from "../OTDialog/NewOTRequest";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { addNewOTRequest, editOTRequest } from "../../API";
const columnsDef = [
  { field: "id", headerName: "STT", width: 20 },
  { field: "date", headerName: "Date", width: 300, editable: true },
  { field: "hour", headerName: "Time", width: 200, editable: true },
  { field: "isApproved", headerName: "Status", width: 200, editable: true },
  { field: "managerId", headerName: "Approvers", width: 200, editable: true },
  { field: "reason", headerName: "Reason", width: 200, editable: true },
  {
    field: "approveReason",
    headerName: "Approve Reason",
    width: 200,
    editable: true,
  },
  {
    field: "approveDate",
    headerName: "Date Approve",
    width: 200,
    editable: true,
  },
];

const OTDeTail = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

  const { data, employeeID, reloadCallBack} = props;


  // console.log("data in body OT: ", data);

  if (!data) {
    return;
  }
  // console.log("data of OT body: ", data);

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    // console.log(selectedRowsData);
  };

  const onSubmitClicked = (otEditData) => {
    // console.log(otEditData);
    // delete otEditData[0].id;
    // console.log(otEditData);
    editOTRequest(otEditData[0]);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  };

  const onNewSubmitClicked = (newOTData) => {
    // console.log(newOTData);
    addNewOTRequest(newOTData);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
    reloadCallBack();
  };
  const onCancelClicked = () => {
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  };

  const clickedAddNewRequest = () => {
    setOpenDialogNewRequest(true);
  };

  return (
    <>
      <div className="row">
        <div className="col OTLable"> OT - Tran Bao Khanh </div>{" "}
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />{" "}
        </div>{" "}
      </div>{" "}
      <div className="OT-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />{" "}
        </Box>{" "}
      </div>{" "}
      <OTRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      ></OTRequest>
      <NewOTRequest
        open={openDialogNewRequest}
        employeeID={employeeID}
        onNewSubmitClicked={onNewSubmitClicked}
        onCancelClicked={onCancelClicked}
      />{" "}
    </>
  );
};

export default OTDeTail;
