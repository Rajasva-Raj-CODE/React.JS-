import React, { useState } from "react";

const Form = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]:e.target.value });
    console.log(inputData);
    
  }
  return (
    <form className="container">
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={inputData.name}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          value={inputData.email}
          onChange={handleData}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Your Password"
          name="password"
          value={inputData.password}
          onChange={handleData}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
