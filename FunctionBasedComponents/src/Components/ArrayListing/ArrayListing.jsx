import React from "react";

const ArrayListing = () => {
  //   const employee = ["raj", "rohan", "sohan", "dindong"];
  //!using map function
  //   employee.map((item) => {
  //     console.log("my name is ", item);
  //   });
  //!using for loop
  // for(let i =0; i<employee.length;i++){
  //     console.log("my name is ", employee[i]);
  // }

  const employeeInfo = [
    { name: "raj", email: "raj@gmail.com", contact: 1234 },
    { name: "rohan", email: "rohan@gmail.com", contact: 12345 },
    { name: "sohan", email: "sohan@gmail.com", contact: 12346 },
    { name: "dindong", email: "dindong@gmail.com", contact: 12347 },
  ];
  return (
    <div>
      <h2>ArrayListing</h2>
      {/* {employee.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))} */}

      <table border={1}>
        <tbody>
        {employeeInfo.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.contact}</td>
          </tr>
         
        ))}
         </tbody>
      </table>
    </div>
  );
};

export default ArrayListing;
