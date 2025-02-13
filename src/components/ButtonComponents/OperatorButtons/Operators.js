import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);

  return (
    <div className="operatorsBox">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorsState.map(operators => (
        <button key={operators} className="button operators">
          {operators.char}
        </button>
      ))}
    </div>
  );
};
export default Operators;
