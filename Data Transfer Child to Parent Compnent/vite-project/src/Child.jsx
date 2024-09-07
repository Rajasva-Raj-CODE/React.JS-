import { React, useState } from "react";

const Child = () => {
  const [name, setName] = useState();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;
