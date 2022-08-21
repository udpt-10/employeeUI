import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import CheckingDialogRequest from "../CheckingDialog/CheckingDialogRequest";
import NewCheckingDialogRequest from "../CheckingDialog/NewCheckingDialogRequest";

const columnsDef = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "date", headerName: "Date", width: 150, editable: true },
  { field: "checkin", headerName: "Checkin", width: 150, editable: true },
  { field: "checkout", headerName: "Checkout", width: 150, editable: true },
  { field: "total", headerName: "Total", width: 150, editable: true },
];

const rowsDataFake = [
  {
    id: 1,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 2,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 3,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 4,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 5,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 6,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 7,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
  {
    id: 8,
    date: "09/08/2022",
    checkin: "09/08/2022 08:30:00",
    checkout: "09/08/2022 17:30:00",
    total: "8h",
  },
];

const CheckingDetails = () => {
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
        <div className="col CheckingLable">Checking - Tran Bao Khanh</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>

      <div className="Checking-Table">
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

      <CheckingDialogRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewCheckingDialogRequest
        open={openDialogNewRequest}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default CheckingDetails;
