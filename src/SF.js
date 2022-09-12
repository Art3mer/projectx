import React from "react";
import { useState, useEffect } from "react";
import Amount from "./amount";
function SF() {
  var val = JSON.parse(localStorage.getItem("Spend"));
  const [value, setValue] = useState();
  // console.log(val);
  useEffect(() => {
    setValue(val);
  }, []);
  return (val.map((item) => {
    return (
      <div>
        <p>Amount :{item.Amount}</p>
      </div>
    );
  }));
}
export default SF;
