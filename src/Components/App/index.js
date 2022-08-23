import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Checking,
  Details,
  Leave,
  OT,
  SalaryPath,
  Support,
  WFH,
  LoginURL
} from "../constants";
import Body from "../Detail/Body";
import BodyWFH from "../WFH/BodyWFH";
import BodySupport from "../Support/BodySupport";
import Salary from "../Salary";
import BodyOT from "../OT/BodyOT";
import BodyChecking from "../Checking/BodyChecking";
import BodyLeave from "../Leave/BodyLeave";
import Login from "../Login";
const AppComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path={Details} element={<Body />} />
          <Route path={Checking} element={<BodyChecking />} />
          <Route path={Leave} element={<BodyLeave />} />
          <Route path={OT} element={<BodyOT />} />
          <Route path={SalaryPath} element={<Salary />} />
          <Route path={Support} element={<BodySupport />} />
          <Route path={WFH} element={<BodyWFH />} />
          <Route path="*" element={<Body />} />
          <Route path="/" element={<Login />} />
          <Route path={LoginURL} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppComponent;
