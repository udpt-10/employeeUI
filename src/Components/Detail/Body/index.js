import React from "react";
import Navigation from "../../Navigation/index";
import Employee from "../Employee/index";
import Footer from "../../Footer";


const Body = () => {

  const data =  JSON.parse(localStorage.getItem("data" ));
  console.log('data in detail: ', data);
  return (
    <>
      <Navigation/>
      <Employee/>
      <Footer/>
    </>
  );
};

export default Body;
