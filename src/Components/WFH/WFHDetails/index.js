import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WFHRequest from "../WFHDialog/WFHRequest";
import NewWFHRequest from "../WFHDialog/NewWFHRequest";

const columnsDef = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "date", headerName: "Date", width: 250, editable: true },
  { field: "checkin", headerName: "Check In", width: 250, editable: true },
  { field: "checkout", headerName: "Check Out", width: 250, editable: true },
  { field: "total", headerName: "Total", width: 250, editable: true },
];

const rowsFakeData = [
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
const WFHDetails = () => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      rowsFakeData.find((row) => row.id === id)
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
        <div className="col OTLable">WFH - Tran Bao Khanh</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest}/>
        </div>
      </div>

      <div className="WFH-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={rowsFakeData}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </Box>
      </div>
      <WFHRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewWFHRequest
        open={openDialogNewRequest}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default WFHDetails;
