import axios from "axios";

//get data details from api
export const getEmployeeDetailsFromUserName = (username) => {
  const config = { headers: { "Content-Type": "text/plain" } };
  const url = "http://localhost:8080/employee/findByUserName";
  return axios.post(url, username, config);
};

export const login = (username, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const data = { userName: username, password: password };
  const url = "http://localhost:8080/employee/login";
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
  const url = "http://localhost:8080/OTRequest/" + employeeID;
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
  delete data[0].id;
  const url = "http://localhost:8080/OTRequest/edit";
  return axios.post(url, data[0], config);
};

export const addNewOTRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/OTRequest/add";
  return axios.post(url, data, config);
};

export const leaveRequest = (employeeID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/LeaveRequest/" + employeeID;
  return axios.get(url, config);
};


export const addNewLeaveRequest = (data) =>{
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const url = "http://localhost:8080/LeaveRequest/add";
  return axios.post(url, data, config);
}

export const editLeaveRequest = (data) =>{
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  delete [0].id;
  const url = "http://localhost:8080/LeaveRequest/edit";
  return axios.post(url, data[0], config);
};


export const WFHRequest = (employeeID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url ="http://localhost:8080/WorkFromHome/" + employeeID;
  return axios.get(url, config);
}


export const addNewWFHRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const url="http://localhost:8080/WorkFromHome/add";
  return axios.post(url, data, config);
}


export const editWFHRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  delete data[0].id;
  const url = "http://localhost:8080/WorkFromHome/edit";
  return axios.post(url, data[0], config);
}

export const supportRequest = (employeeID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url ="http://localhost:8080/SupportRequest/allByEmployeeId/" + employeeID;
  return axios.get(url, config);
}

export const addNewSupportRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const url = "http://localhost:8080/SupportRequest/add";
  return axios.post(url, data, config);
}

export const editSupportRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  delete data[0].id;
  delete data[0].employeeName;
  delete data[0].managerName;
  delete data[0].directorName;
  console.log(data);
  const url ="http://localhost:8080/SupportRequest/edit";
  return axios.post(url, data[0], config);
}