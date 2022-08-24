import OTDeTail from "../OTDetails";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import { OTRequest } from "../../API";
const BodyOT = () => {
  const [data, setData] = useState();
  const employeeID = JSON.parse(localStorage.getItem("data")).employeeId;
  console.log(employeeID);

  useEffect(() => {
    if (data) {
      return;
    }
    console.log("data: ", data);
    OTRequest(employeeID).then((res) => setData(res.data));
  }, [data]);

  console.log("data: ", data);

  if(!data){
    return;
  }

  if (data) {
    for(let i = 0; i < data.length; i++) {  
        data[i].id = i + 1;
        data[i].date = new Date(data[i].date);
    }
  }



  return (
    <>
      <Navigation />
      <OTDeTail data={data}/>
      <Footer />
    </>
  );
};

export default BodyOT;
