import axios from "axios";

//get data details from api
export const getEmployeeDetailsFromUserName = (username) => {
    const config = { headers: { "Content-Type": "text/plain" } };
    const url = "http://localhost:8001/employee/findByUserName";
    return axios.post(url, username, config);
};

export const login = (username, password) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const data = { userName: username, password: password };
    const url = "http://localhost:8001/employee/login";
    return axios.post(url, data, config);
};

export const OTRequest = (employeeID) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };
    const url = "http://localhost:8002/OTRequest/" + employeeID;
    return axios.get(url, config);
};

export const editOTRequest = (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };
    delete data.id;
    const url = "http://localhost:8002/OTRequest/edit";
    return axios.post(url, data, config);
};

export const addNewOTRequest = (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };
    const url = "http://localhost:8002/OTRequest/add";
    return axios.post(url, data, config);
};