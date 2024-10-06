import React, { useCallback, useState } from "react";
import ExampleUseCallback from "./ExampleUseCallback";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(2);

  const newData = useCallback(() => {
    console.log("I am NewData Function", item);
  }, [item]);
  return (
    <>
      <h1> UseCallback</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <ExampleUseCallback item={item} data={newData} />
      <button onClick={() => setItem(item * 2)}>Item</button>
    </>
  );
};

export default UseCallback;
