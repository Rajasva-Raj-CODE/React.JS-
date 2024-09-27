import React, { useState } from "react";

const Valadation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function formHandler(e) {
    e.preventDefault();
    if(email.length < 3 || password.length < 8){
        alert("Fill the form properly")
    }else{
        console.log(email);
        console.log(password);
        alert("Thanks")
    }
  }

  function emailHandler(e) {
    //  console.log(e.target.value.length);
    let element = e.target.value;
    if (element.length < 3) {
      // console.log("Minium 3 letters required");
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(element)
  }

  function passwordHandler(e) {
    // console.log(e.target.value.length);
    let element = e.target.value;
    if (element.length < 8) {
      // console.log("Minium 8 letters required");
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(element)
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={emailHandler}
        />
        {emailError ? <span>Minium 3 letters required</span> : <span></span>}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Password"
          onChange={passwordHandler}
        />
        {passwordError ? <span>Minium 8 letters required</span> : <span></span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Valadation;
