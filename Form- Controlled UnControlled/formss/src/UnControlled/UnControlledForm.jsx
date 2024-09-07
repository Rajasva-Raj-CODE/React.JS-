import React, { useRef } from "react";

const UnControlledForm = () => {
  const refObject = useRef();
  console.log(refObject);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(refObject.current.value);
  }

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label>First name:</label>
        <br />
        <input type="text" ref={refObject} /> <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UnControlledForm;
