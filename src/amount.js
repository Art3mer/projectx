import React from "react";
import style from "./App.css";
import {useState,useEffect} from 'react';
import PersonForm from "./person form";

function Amount() {
  var persons = localStorage.getItem('personDetails')
  const [retrievedData,setRetrievedData] = useState([]);
  console.log("vguvg"+localStorage.getItem("personDetails"))
  console.log(persons)
  useEffect(() => {
    setRetrievedData(persons)
  }, [])
  console.log("ihbhg"+(retrievedData));
return(
  <>
  {retrievedData !=null ? (retrievedData.map((item) => {
      <div style={style.gridItemsContainer}>
        <h1>{item.Amount}</h1>
      </div>
    
  })):null}
</>
)
}
export default Amount;
 