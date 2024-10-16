import React from "react";
// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
const BootstrapArrayListing = () => {
  const employeeInfo = [
    { name: "raj", email: "raj@gmail.com", contact: 1234 },
    { name: "rohan", email: "rohan@gmail.com", contact: 12345 },
    { name: "sohan", email: "sohan@gmail.com", contact: 12346 },
    { name: "sohan", email: "sohan@gmail.com", contact: 12346 },
    { name: "sohan", email: "sohan@gmail.com", contact: 12346 },
    { name: "dindong", email: "dindong@gmail.com", contact: 12347 },
  ];

  return (
    <div>
      <h2>BootstrapArrayListing</h2>
      {/* <Button variant="success" onClick={()=>alert("hello")}>Success</Button>{' '} */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {employeeInfo.map((item, index) =>
            item.name === "sohan" ? (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BootstrapArrayListing;
