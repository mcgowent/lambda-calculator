import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbersBox">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      numberState.map(num => (
        <button className="button numbers">{num}</button>
      ))}
    </div>
  );
};
export default Numbers;
