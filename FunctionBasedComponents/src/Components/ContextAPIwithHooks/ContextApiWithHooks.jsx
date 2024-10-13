import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

//create,provide,use

export const MyData = createContext();

const ContextApiWithHooks = () => {
  const [data, setData] = useState(1);
  const [salary, setSalary] = useState(1);

  const getSalary =(val)=>{
    console.log("Salary is",val);
    
  }
  return (
    <MyData.Provider value={{valueData:data,getSalary:getSalary}}>
    <>
      <h2>Context Api With Hooks</h2>
      <button onClick={() => setData(data + 1)}>Update Data</button>
      <Child1 />
    </>
    </MyData.Provider>
  );
};

export default ContextApiWithHooks;
