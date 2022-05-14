import React from "react";
import Login from "./Login";

const PersonalDetails = ({prevStep, nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }
  return (
    <div>
Personal Details
<button onClick={ Previous }>Previous</button>
<button onClick={ Continue }>Next</button>
    </div>
  );
};

export default PersonalDetails;