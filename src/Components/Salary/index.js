import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./index.scss";
import Navigation from "../Navigation";
import Footer from "../Footer";

const columnsDef = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "date", headerName: "Date", width: 250, editable: true },
  { field: "total_time", headerName: "Total Time", width: 250, editable: true },
  { field: "salary", headerName: "Salary", width: 250, editable: true },
  { field: "total_get", headerName: "Total Get", width: 250, editable: true },
];

const rowsDataFake = [
  {
    id: 1,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 2,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 3,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 4,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 5,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 6,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 7,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 8,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
  {
    id: 9,
    date: "07/30/2022",
    total_time: 150,
    salary: "100,000,000",
    total_get: "100,000,000",
  },
];
const Salary = () => {
  return (
    <>
      <Navigation />
      <div className="row">
        <div className="col SalaryLable">Salary - Tran Bao Khanh</div>
      </div>

      <div className="Salary-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={rowsDataFake}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
      <Footer/>
    </>
  );
};

export default Salary;
