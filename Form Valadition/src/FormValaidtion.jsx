import { useState } from "react";

const FormValaidtion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginForm(e) {
    e.preventDefault();
    if(email.length<3 || password.length<5){
        alert("Bhai shi se form fill krdo")
    }else{
        console.log(email);
        console.log(password);
        alert("Thanks")
        
    }
  }

  function emailHandler(e) {
    // console.log(e.target.value.length);
    let elemnet = e.target.value;
    if (elemnet.length < 3) {
      //   console.log("Minum 3 latter required");
      setErr(true);
    } else {
      setErr(false);
    }
    setEmail(elemnet)
  }

  function passwordHandler(e) {
    // console.log(e.target.value.length);
    let elemnet = e.target.value;
    if (elemnet.length < 5) {
      //   console.log("Minum 3 latter required");
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(elemnet)
  }
  return (
    <>
      <form onSubmit={loginForm}>
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={emailHandler}
        />
        {err ? <span>Minum 3 latter required</span> : <span></span>}
        <br />
        <input
          type="text"
          placeholder="Enter Your password"
          onChange={passwordHandler}
        />
        {passErr ? <span>Enter minum 5 letter</span> : <span></span>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormValaidtion;
