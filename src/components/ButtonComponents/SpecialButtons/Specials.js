import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(specials);
  console.log(props);
  return (
    <div className="specialsBox">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      specials.map(arg => (
        <button key={specials} className="button specials">
          {arg}
        </button>
      ))}
    </div>
  );
};
export default Specials;
