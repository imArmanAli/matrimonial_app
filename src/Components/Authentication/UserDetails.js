import React from "react";
import { Link } from "react-router-dom";
const UserDetails = ({prevStep, nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
  return (
    <div>
User Details
<button onClick={ Continue }>Next</button>
<Link to="/about">About</Link>
    </div>
  );
};
 
export default UserDetails;