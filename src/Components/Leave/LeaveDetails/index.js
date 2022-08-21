import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import LeaveRequest from "../LeaveDialog/LeaveRequest";
import NewLeaveRequest from "../LeaveDialog/NewLeaveRequest";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "date", headerName: "Date", width: 150, editable: true },
  { field: "period", headerName: "Period", width: 150, editable: true },
  { field: "status", headerName: "Status", width: 150, editable: true },
  {
    field: "request_reason",
    headerName: "Requeset Reason",
    width: 150,
    editable: true,
  },
  {
    field: "deny_reason",
    headerName: "Deny Reason",
    width: 150,
    editable: true,
  },
];

const rowDataFake = [
  {
    id: 1,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    period: "3days",
    status: "Sent",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 2,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    period: "3days",
    status: "Sent",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 3,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    period: "3days",
    status: "Sent",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 4,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    period: "3days",
    status: "Sent",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
];

const LeaveDetail = () => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      rowDataFake.find((row) => row.id === id)
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
        <div className="col LeaveLable">Leave - Tran Bao Khanh</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>

      <div className="Leave-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={rowDataFake}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </Box>
      </div>
      <LeaveRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewLeaveRequest
        open={openDialogNewRequest}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default LeaveDetail;
