import React from "react";
import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  function handleChnage(e) {
    console.log(e.target.name);

    if (e.target.name == "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPswd(e.target.value);
    }
  }

  return (
    <>
      <form>
        <label>First name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleChnage}
        />{" "}
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={pswd}
          onChange={handleChnage}
        />
        <br />
      </form>
    </>
  );
};

export default Controlled;
