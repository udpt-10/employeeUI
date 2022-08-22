import axios from 'axios';
 
//get data details from api
export const getEmployeeDetailsFromUserName = (username) => {
    const config = { headers: {'Content-Type': 'text/plain'} };
    const url = 'http://localhost:8001/employee/findByUserName';
    return axios.post(url, username,config);
}