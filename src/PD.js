import React from "react";
import { useState } from "react";

function PD() {
  const [value,setValue] = useState()
  setValue(localStorage.getItem("personDetails"));
  var val = JSON.parse(value);
  // let val = JSON.stringify(value)
  console.log(val);
  return(
    <>
    {
    value ?(
    val.map((item) => {
      return (
        <div>
          <h1>User Details</h1>
          <p>{item.name}</p>
        </div>
      );
    })

  ) : null
}
  </>
  )
}

export default PD;


