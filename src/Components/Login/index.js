import React, { useEffect, useState } from "react";
import "./index.scss";
import {login} from "../API/index";
import { useNavigate } from "react-router-dom";
import { Details } from "../constants";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(undefined);
  let navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log("username", userName);
  console.log("password", password);


  const test = () => {
    login(userName, password).then(res => setData(res.data));
  }
  console.log(data);

  useEffect(() => {
    if(!data){
      return; 
    }
    localStorage.setItem("data", JSON.stringify(data));
    navigate(Details, {replace: true});
  }, [data]);

  console.log('data real: ', JSON.parse(localStorage.getItem("data" )));
  return (
    <div id="pageLogin">
      <div className="fomr">
        <h2>Welcome Employee</h2>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" onChange={handleUsername} />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" onChange={handlePassword} />
            </li>
          </ul>
        </fieldset>
        <button onClick={test}>Login</button>
      </div>
    </div>
  );
};
export default Login;
