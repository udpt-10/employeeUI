import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import SupportDialog from "../SupportDialog/SupportDialog";
import NewSupportDialogRequest from "../SupportDialog/NewSupportDialog";
import { addNewSupportRequest, editSupportRequest } from "../../API";
const columnsDef = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "department", headerName: "Department", width: 150, editable: true },
  { field: "date", headerName: "Date", width: 150, editable: true },

  { field: "approver", headerName: "Approver", width: 150, editable: true },
  {
    field: "reason",
    headerName: "Request Reason",
    width: 150,
    editable: true,
  },
  {
    field: "approved",
    headerName: "Deny Reason",
    width: 150,
    editable: true,
  },
  { field: "status", headerName: "Status", width: 150, editable: true },
  {
    field: "approveDate",
    headerName: "Date Approve",
    width: 200,
    editable: true,
  },
];

const SupportDetails = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

  const { data, employeeID, reloadCallBack} = props;

  if (!data) {
    return;
  }

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    // console.log(selectedRowsData);
  };

  const onSubmitClicked = (dataSupport) => {
    console.log(dataSupport);
    editSupportRequest(dataSupport);
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

  const onNewSubmitClicked = (supportData) =>{
    console.log(supportData);
    addNewSupportRequest(supportData);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
    reloadCallBack();
  }
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
      <SupportDialog
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewSupportDialogRequest
        open={openDialogNewRequest}
        employeeID={employeeID}
        onNewSubmitClicked={onNewSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default SupportDetails;
