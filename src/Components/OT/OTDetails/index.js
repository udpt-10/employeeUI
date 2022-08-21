import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import OTRequest from "../OTDialog/OTRequest";
import NewOTRequest from "../OTDialog/NewOTRequest";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const columnsDef = [
  { field: "id", headerName: "STT", width: 20 },
  { field: "date", headerName: "Date", width: 150, editable: true },
  { field: "time", headerName: "Time", width: 150, editable: true },
  { field: "status", headerName: "Status", width: 150, editable: true },
  { field: "approver", headerName: "Approvers", width: 150, editable: true },
  { field: "reason", headerName: "Reason", width: 150, editable: true },
];

const rowsDataFake = [
  {
    id: 1,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 2,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 3,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 4,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 5,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 6,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 7,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 8,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 9,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 10,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
  {
    id: 11,
    date: "2022-09-08",
    time: "3hours",
    status: "Approved",
    approver: "Nguyen Van Man",
    reason: "travel",
  },
];


const OTDeTail = () => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      rowsDataFake.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = () => {
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
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
        <div className="col OTLable">OT - Tran Bao Khanh</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>
      <div className="OT-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={rowsDataFake}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </Box>
      </div>
      <OTRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      ></OTRequest>

      <NewOTRequest
        open={openDialogNewRequest}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default OTDeTail;
