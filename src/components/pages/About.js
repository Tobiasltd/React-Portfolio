import React, { Fragment } from "react";
import Picture from "../about/Picture";
import Body from "../about/Body";
import Navbar from "../about/Navbar";
import MobileNavbar from "../about/MobileNavbar";

const About = () => {
  return (
    <Fragment>
      <div className="desktop">
        <Navbar />
      </div>
      <div className="mobile">
        <MobileNavbar />
      </div>
      <Picture />
      <Body />
    </Fragment>
  );
};

export default About;
