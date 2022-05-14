/* eslint react/prop-types: 0 */
import React, { Suspense } from "react";
import "./index.css";
import "./Components/css/bootstrap.css";
import "./Components/css/font-awesome.css";
import "./Components/css/menu.css";
import "./Components/css/style.css";
import "./Components/css/easy-responsive-tabs.css";
import Routing from "./Routing";
// import 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;subset=devanagari,latin-ext';
// import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese';

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default class Layout extends React.Component {
  render() {
    return (
      <Suspense>
        <Header />
              <Routing /> 
        <Footer />
      </Suspense>
    );
  }
}
