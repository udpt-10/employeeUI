import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./index.scss";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import LeaveRequest from "../LeaveDialog/LeaveRequest";
import NewLeaveRequest from "../LeaveDialog/NewLeaveRequest";
import { addNewLeaveRequest, editLeaveRequest } from "../../API";
const columnsDef = [
  { field: "id", headerName: "STT", width: 50, hide: true},
  { field: "date", headerName: "Date", width: 300, editable: true },
  { field: "hour", headerName: "Hour", width: 200, editable: true },
  { field: "isApproved", headerName: "Status", width: 200, editable: true },
  { field: "managerName", headerName: "Approvers", width: 200, editable: true },
  {
    field: "reason",
    headerName: "Requeset Reason",
    width: 200,
    editable: true,
  },
  {
    field: "approveReason",
    headerName: "Deny Reason",
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


const LeaveDetail = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);
  const {data, employeeID, reloadCallBack} = props;
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = (leaveData) => {
    editLeaveRequest(leaveData[0]);
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

  const onNewSubmitClicked = (newLeaveData) => {
    addNewLeaveRequest(newLeaveData);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
    reloadCallBack();
  }
  return (
    <>
      <div className="row">
        <div className="col LeaveLable">Leave -  {JSON.parse(localStorage.getItem("data")).employeeName}</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>

      <div className="Leave-Table">
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
      <LeaveRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
      <NewLeaveRequest
        open={openDialogNewRequest}
        employeeID={employeeID}
        onNewSubmitClicked={onNewSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default LeaveDetail;
