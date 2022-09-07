import React from "react";
import style from "./App.css";
import {useState} from 'react';

function Amount() {
  var retrievedData = localStorage.getItem("Spend");
  var value = JSON.parse(retrievedData);
  value.map((item) => {
    return (
      <div style={style.gridItemsContainer}>
        <h>{item.Amount}</h>
      </div>
    );
  });
}
export default Amount;
