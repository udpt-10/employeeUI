import React from "react";
import "./index.scss";
const Login = () => {
  return (
    <div id="pageLogin">
      <form>
        <h2>Welcome Back!</h2>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </li>
          </ul>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
