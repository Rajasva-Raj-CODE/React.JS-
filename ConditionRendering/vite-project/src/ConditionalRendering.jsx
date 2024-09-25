import { useState } from "react";

const ConditionalRendering = () => {
  const [vote, setVote] = useState(false);
  const [age, setAge] = useState(40);
  //   if (vote) {
  //     return (
  //       <div>
  //         <h2>You can Vote</h2>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h2>You canNot Vote</h2>
  //       </div>
  //     );
  //   }
  return (
    <div>
      {/* {vote &&  <h2>You can Vote</h2> } */}
      {/* {age>15 ? <h2>your age is greater then 15</h2> :<h2>your age is less then 15</h2>}  */}
      {age == 10 ? (
        <h2>you r a kid</h2>
      ) : age == 20 ? (
        <h2>you r young</h2>
      ) : age == 30 ? (
        <h2>your age is 30</h2>
      ) : (
        <h2>your are old</h2>
      )}
    </div>
  );
};

export default ConditionalRendering;
