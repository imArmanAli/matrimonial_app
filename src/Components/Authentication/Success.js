import React from "react";
import Login from "./Login";
 
const Success = ({prevStep, nextStep, handleChange, values}) => {
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }
  return (
    <div>
Success
<button onClick={ Previous }>Previous</button>
    </div>
  );
};
 
export default Success;