import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WFHRequest from "../WFHDialog/WFHRequest";
import NewWFHRequest from "../WFHDialog/NewWFHRequest";
import { addNewWFHRequest, editWFHRequest } from "../../API";

const columnsDef = [
  { field: "id", headerName: "STT", width: 50 },
  { field: "date", headerName: "Date", width: 500, editable: true },
];

const WFHDetails = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

  const { data, employeeID, reloadCallBack} = props;
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = (data) => {
    editWFHRequest(data);
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

  const onNewSubmitClicked = (wfhData) =>{
    addNewWFHRequest(wfhData);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
    reloadCallBack();
  }
  return (
    <>
      <div className="row">
        <div className="col OTLable">WFH -  {JSON.parse(localStorage.getItem("data")).employeeName}</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest}/>
        </div>
      </div>

      <div className="WFH-Table">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data}
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
        employeeID={employeeID}
        onNewSubmitClicked={onNewSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default WFHDetails;
