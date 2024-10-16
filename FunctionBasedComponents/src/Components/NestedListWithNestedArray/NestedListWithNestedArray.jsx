import React from "react";
import Table from "react-bootstrap/Table";
const NestedListWithNestedArray = () => {
  const employeeInfo = [
    {
      name: "raj",
      email: "raj@gmail.com",
      contact: 1234,
      address: [
        { houseNo: "123", city: "delhi", country: "india" },
        { houseNo: "143", city: "noida", country: "india" },
        { houseNo: "153", city: "banglore", country: "india" },
      ],
    },
    {
      name: "rohan",
      email: "rohan@gmail.com",
      contact: 12345,
      address: [
        { houseNo: "123", city: "delhi", country: "india" },
        { houseNo: "143", city: "noida", country: "india" },
        { houseNo: "153", city: "banglore", country: "india" },
      ],
    },
    {
      name: "sohan",
      email: "sohan@gmail.com",
      contact: 12346,
      address: [
        { houseNo: "123", city: "delhi", country: "india" },
        { houseNo: "143", city: "noida", country: "india" },
        { houseNo: "153", city: "banglore", country: "india" },
      ],
    },
    {
      name: "dindong",
      email: "dindong@gmail.com",
      contact: 12347,
      address: [
        { houseNo: "123", city: "delhi", country: "india" },
        { houseNo: "143", city: "noida", country: "india" },
        { houseNo: "153", city: "banglore", country: "india" },
      ],
    },
  ];

  return (
    <div>
      <h1>NestedListWithNestedArray</h1>
      <Table bordered hover striped variant="dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {employeeInfo.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>
                <tbody>
                  <Table variant="dark">
                    <tbody>
                      {item.address.map((data, index) => (
                        <tr key={index}>
                          <td>{data.houseNo}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </tbody>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NestedListWithNestedArray;
