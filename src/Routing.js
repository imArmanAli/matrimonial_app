import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from './Components/Authentication/Login'
import ScrollToTop from "./Components/ScrollToTop";

const Routing = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Fragment>
  );
};

export default Routing;
