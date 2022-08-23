import axios from 'axios';
 
//get data details from api
export const getEmployeeDetailsFromUserName = (username) => {
    const config = { headers: {'Content-Type': 'text/plain'} };
    const url = 'http://localhost:8001/employee/findByUserName';
    return axios.post(url, username,config);
}

export const login = (username, password) => {
    const config = { headers: {'Content-Type': 'application/json'} };
    const data = {userName:username, password:password};
    const url = 'http://localhost:8001/employee/login';
    return axios.post(url,data, config);
}