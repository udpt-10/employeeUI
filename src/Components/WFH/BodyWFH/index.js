import Navigation from "../../Navigation";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import WFHDetails from "../WFHDetails";
import { WFHRequest } from "../../API";
const BodyWFH = () => {
  const [data, setData] = useState();
  const [isReload, setReload] = useState(false);
  const employeeID = JSON.parse(localStorage.getItem("data")).employeeId;

  const reloadCallBack = () => {
    setReload(!isReload);
  };

  useEffect(() => {
    if (data) {
      return;
    }
    WFHRequest(employeeID).then((res) => setData(res.data));
  }, [data, isReload]);

  if (!data) {
    return;
  }

  if (data) {
    for (let i = 0; i < data.length; i++) {
      data[i].id = i + 1;
      data[i].date = new Date(data[i].date);
    }
  }
  return (
    <>
      <Navigation />
      <WFHDetails data={data} employeeID={employeeID} reloadCallBack={reloadCallBack}/>
      <Footer />
    </>
  );
};

export default BodyWFH;
