import React from "react";
import Employee from "./Employee";

const Reuse = () => {

    const employeeInfo = [
        { name: "raj", email: "raj@gmail.com", contact: 1234 },
        { name: "rohan", email: "rohan@gmail.com", contact: 12345 },
        { name: "sohan", email: "sohan@gmail.com", contact: 12346 },
        { name: "dindong", email: "dindong@gmail.com", contact: 12347 },
      ];

  return (
    <div>
      <h1>Reuse</h1>
      {
        employeeInfo.map((item,i)=>
            <Employee data={item}/>
        )
      }
    </div>
  );
};

export default Reuse;
