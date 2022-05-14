/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Popup from '../Popup';
import About from '../About'
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email:'',
      username:'',
      password:'',
      isOpen: false,
    };
  }
  hideComponent = (name) => {
    switch (name) {
      case "showHideAdv":
        return this.setState((prev) => ({
          ...prev,
          isOpen: !this.state.isOpen,
        }));
        case "sign":
          return this.setState((prev) => ({
            ...prev,
            isOpen: this.state.isOpen,
          }));
      default:
        return;
    }
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  

  render() {
    const { step } = this.state;
    const { isOpen } = this.state;
    const { email, username, password } = this.state;
    const values = { email, username, password}
    switch (step) {
      case 1: 
        return (
          <div>
          <UserDetails
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
          <button  className="btn" onClick={() => this.hideComponent("showHideAdv")}>
          <a  className="ur_menu">
          SignUp
          </a></button>
          {this.state.isOpen &&
          <About />}
    </div>
        )
      case 2: 
        return (
          <div>
          <PersonalDetails
          prevStep = {this.prevStep}
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
          <button  className="btn" onClick={() => this.hideComponent("showHideAdv")}>
          <a  className="ur_menu">
            SignUp
          </a></button>
          {this.state.isOpen && <Popup
            content={<>
            {/* SignUp Component Here */}
            <SignUp />
            </>}
            handleClose={() => this.hideComponent("showHideAdv")}
          />}
    </div>
        )
      case 3: 
        return (
          <div>
          <Success
          prevStep = {this.prevStep}
           />
 <button  className="btn" onClick={() => this.hideComponent("showHideAdv")}>
      <a  className="ur_menu">
        SignUp
      </a></button>
      {this.state.isOpen && <Popup
        content={<>
        {/* SignUp Component Here */}
        <SignUp />
        </>}
        handleClose={() => this.hideComponent("showHideAdv")}
      />}
</div>
        )
      default: 
      <div>
      <button  className="btn" onClick={() => this.hideComponent("showHideAdv")}>
      <a  className="ur_menu">
        SignUp
      </a></button>
      {this.state.isOpen && <Popup
        content={<>
        {/* SignUp Component Here */}
        <SignUp />
        </>}
        handleClose={() => this.hideComponent("showHideAdv")}
      />}</div>
    }
  }
}
export default SignUp;