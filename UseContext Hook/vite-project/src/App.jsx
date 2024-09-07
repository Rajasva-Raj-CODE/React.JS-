import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext();
const App = () => {
  const name = "Rajasva";
  const gender = "male";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default App;
export {data,data1}

//useContext hook ----> create,provider,useContext
