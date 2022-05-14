/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import image from "./images/client_2.jpg";
import { Link } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const mystyle = {
      maxWidth: "100%",
      display: "inline-block",
    };
    return (
      <div>
        {/* <div className="w3layouts-banner">
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
                <a href="" className="ur_menu">
                  Contact Us
                </a>
                <a  href="" className="ur_menu">
                  Login
                </a>
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
        </div> */}
        <div className="w3l_find-soulmate text-center">
          <h3>Find Your Soulmate</h3>
          <div className="container">
            <a className="scroll" href="#home">
              <div className="col-md-3 w3_soulgrid">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <h3>Sign Up</h3>
                <p>Signup for free and Upload your profile</p>
              </div>
            </a>
            <a className="scroll" href="#home">
              <div className="col-md-3 w3_soulgrid">
                <i className="fa fa-search" aria-hidden="true"></i>
                <h3>Search</h3>
                <p>Search for your right partner</p>
              </div>
            </a>
            <a className="scroll" href="#home">
              <div className="col-md-3 w3_soulgrid">
                <i className="fa fa-users" aria-hidden="true"></i>
                <h3>Connect</h3>
                <p>Connect with your perfect Match</p>
              </div>
            </a>
            <a className="scroll" href="#home">
              <div className="col-md-3 w3_soulgrid">
                <i className="fa fa-comments-o" aria-hidden="true"></i>
                <h3>Interact</h3>
                <p>Become a member and start Conversation</p>
              </div>
            </a>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div class="w3layouts_featured-profiles">
          <div class="container">
            <div class="agile_featured-profiles">
              <h2>Success Stories</h2>
					<Carousel itemsToShow={3}>
					<div class="col-md-3 biseller-column">
					  <div class="card">
                      <img
                        class="card-img-top"
                        src={image}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Couple</h5>
                        <p class="card-text">
                          I am glad to share that, I got Engaged on 19th of October in Indore with Mr. Yogesh Wankhede and happy to have my life partner from UrgentRishta.com. Thanking team of UrgentRishta.com for providing me the best one I deserve
                        </p>
                        <a href="#" class="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>

                  </div>
				  <div class="col-md-3 biseller-column">
					  <div class="card">
                      <img
                        class="card-img-top"
                        src={image}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Couple</h5>
                        <p class="card-text">
                          I am glad to share that, I got Engaged on 19th of October in Indore with Mr. Yogesh Wankhede and happy to have my life partner from UrgentRishta.com. Thanking team of UrgentRishta.com for providing me the best one I deserve
                        </p>
                        <a href="#" class="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>

                  </div>
				  <div class="col-md-3 biseller-column">
					  <div class="card">
                      <img
                        class="card-img-top"
                        src={image}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Couple</h5>
                        <p class="card-text">
                          I am glad to share that, I got Engaged on 19th of October in Indore with Mr. Yogesh Wankhede and happy to have my life partner from UrgentRishta.com. Thanking team of UrgentRishta.com for providing me the best one I deserve
                        </p>
                        <a href="#" class="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>

                  </div>
					</Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
