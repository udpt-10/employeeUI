import OTDeTail from "../OTDetails";
import Navigation from "../../Navigation";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import { OTRequest } from "../../API";
const BodyOT = () => {
  const [data, setData] = useState();
  //isreload
  //fucn reload 
  const [isReload, setReload] = useState(false);

  const employeeID = JSON.parse(localStorage.getItem("data")).employeeId;
  console.log(employeeID);

  const reloadCallBack =() =>{
    setReload(!isReload);
  }
  useEffect(() => {
    if (data) {
      return;
    }
    // console.log("data: ", data);
    OTRequest(employeeID).then((res) => setData(res.data));
  }, [data, isReload]);

  // console.log("data: ", data);

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
      <OTDeTail data={data} employeeID={employeeID} reloadCallBack={reloadCallBack}/>
      <Footer />
    </>
  );
};

export default BodyOT;
