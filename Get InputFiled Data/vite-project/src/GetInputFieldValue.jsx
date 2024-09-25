import { useState } from "react";

const GetInputFieldValue = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getValue(val) {
    setData(val.target.value);
    // console.log(val.target.value);
    // setPrint(false);
  }
  return (
    <div>
      {print ? <h2>{data}</h2> : null}

      <input type="text" onChange={getValue} />
      <button onClick={() => setPrint(true)}>Display Value</button>
    </div>
  );
};

export default GetInputFieldValue;
