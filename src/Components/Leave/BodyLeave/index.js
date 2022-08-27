import Navigation from "../../Navigation";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import LeaveDetail from "../LeaveDetails";
import { leaveRequest } from "../../API/index";
const BodyLeave = () => {
  const [isReload, setReload] = useState(false);
  const [data, setData] = useState();

  const employeeID = JSON.parse(localStorage.getItem("data")).employeeId;
  console.log(employeeID);

  const reloadCallBack =() =>{
    setReload(!isReload);
  }
  useEffect(() => {
    // if (data) {
    //   return;
    // }
    leaveRequest(employeeID).then((res) => setData(res.data));
  }, [ isReload]);

  console.log('data of leave: ', data);
  if (!data) {
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
      <LeaveDetail data={data} employeeID={employeeID} reloadCallBack={reloadCallBack}/>
      <Footer />
    </>
  );
};

export default BodyLeave;
