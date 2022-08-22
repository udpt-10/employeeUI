import React, { useEffect, useState } from "react";
import Navigation from "../../Navigation/index";
import Employee from "../Employee/index";
import Footer from "../../Footer";
import {getEmployeeDetailsFromUserName} from "../../API/index";

const Body = () => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    if (userDetails) {
      return;
    }
    getEmployeeDetailsFromUserName('TBKhanh').then(res => setUserDetails(res));
  },[userDetails]);
  console.log(userDetails);
  return (
    <>
      <Navigation/>
      <Employee/>
      <Footer/>
    </>
  );
};

export default Body;
