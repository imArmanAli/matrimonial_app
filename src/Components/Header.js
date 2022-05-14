/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Popup from './Popup';
import Login from './Authentication/Login'
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      default:
        return;
    }
  };
  render() {
    const { isOpen } = this.state;
    const mystyle = {
      maxWidth: "100%",
      display: "inline-block",
    };
    return (
      <div>
        <div className="w3layouts-banner">
          <div className="container">
            <div className="logo">
              <h1>
                <a className="cd-logo link link--takiri">
                  UrgentRishta{" "}
                  <span>
                    <i className="fa fa-heart" aria-hidden="true"></i>Find Your
                    Soulmate Online
                  </span>
                </a>
              </h1>
            </div>
            <div className="link menu">
              <h4>
                <Link to="/about">
                <a href="" className="ur_menu">
                  About Us
                </a></Link>
                <Link to="/contact">
                <a href="" className="ur_menu">
                  Contact Us
                </a></Link>
                <button  className="btn" onClick={() => this.hideComponent("showHideAdv")}>
                <a  className="ur_menu">
                  Login
                </a></button>
    {this.state.isOpen && <Popup
      content={<>
      {/* Login Component Here */}
      <Login />
      </>}
      handleClose={() => this.hideComponent("showHideAdv")}
    />}
              </h4>
            </div>
          </div>
          <div className="profile_search">
            <div className="container wrap_1">
              <form action="">
                <div className="search_top">
                  <div className="inline-block">
                    <label className="gender_1">I am looking for :</label>
                    <div className="age_box1" style={mystyle}>
                      <select>
                        <option value="">* Select Gender</option>
                        <option value="Male">Bride</option>
                        <option value="Female">Groom</option>
                      </select>
                    </div>
                  </div>
                  <div className="inline-block">
                    <label className="gender_1">Located In :</label>
                    <div className="age_box1" style={mystyle}>
                      <select>
                        <option value="">* Select State</option>
                        <option value="Washington">Washington</option>
                        <option value="Texas">Texas</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Colorado">Colorado</option>
                      </select>
                    </div>
                  </div>
                  <div className="inline-block">
                    <label className="gender_1">Interested In :</label>
                    <div className="age_box1" style={mystyle}>
                      <select>
                        <option value="">* Select Interest</option>
                        <option value="Sports &amp; Adventure">
                          Sports &amp; Adventure
                        </option>
                        <option value="Movies &amp; Entertainment">
                          Movies &amp; Entertainment
                        </option>
                        <option value="Arts &amp; Science">
                          Arts &amp; Science
                        </option>
                        <option value="Technology">Technology</option>
                        <option value="Fashion">Fashion</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="age_box2" style={{ maxWidth: "220px" }}>
                    <label className="gender_1">Age :</label>
                    <input
                      className="transparent"
                      placeholder="From:"
                      style={{ width: "34%" }}
                      type="text"
                      value=""
                    />
                    &nbsp;-&nbsp;
                    <input
                      className="transparent"
                      placeholder="To:"
                      style={{ width: "34%" }}
                      type="text"
                      value=""
                    />
                  </div>
                </div>
                <div className="inline-block">
                  <label className="gender_1">Status :</label>
                  <div className="age_box1" style={mystyle}>
                    <select>
                      <option value="">* Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="In a Relationship">
                        In a Relationship
                      </option>
                      <option value="It's Complicated">It's Complicated</option>
                    </select>
                  </div>
                </div>
                <div className="submit inline-block">
                  <input
                    id="submit-btn"
                    className="hvr-wobble-vertical"
                    type="submit"
                    value="Find Matches"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
