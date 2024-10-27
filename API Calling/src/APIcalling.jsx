import { React,useEffect, useState } from "react";
const APIcalling = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        console.log("Response",response);
        setData(response);
      });
    });
  }, []);
  return (
    <>
      <h2>API calling</h2>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>UserName</td>
            <td>UserName</td>
            <td>Email</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => 
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default APIcalling;
