import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import SupportDialog from "../SupportDialog/SupportDialog";
import NewSupportDialogRequest from "../SupportDialog/NewSupportDialog";
const columnsDef = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "date", headerName: "Date", width: 150, editable: true },
  { field: "status", headerName: "Status", width: 150, editable: true },
  { field: "approver", headerName: "Approver", width: 150, editable: true },
  {
    field: "request_reason",
    headerName: "Request Reason",
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

const rowsDataFake = [
  {
    id: 1,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 2,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 3,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 4,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 5,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 6,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
  {
    id: 7,
    name: "Tran Bao Khanh",
    date: "09/09/2022",
    status: "Sent",
    approver: "Nguyen Van Man",
    request_reason: "khanh dep trai",
    deny_reason: "khong",
  },
];

const SupportDetails = () => {
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
        <div className="col SupportLable">Support - Tran Bao Khanh</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>

      <div className="Support-Table">
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
      <SupportDialog
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewSupportDialogRequest
        open={openDialogNewRequest}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default SupportDetails;
