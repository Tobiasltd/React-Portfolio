import React, { Fragment } from "react";
import Header from "../selectedworks/Header";
import Navbar from "../selectedworks/Navbar";
import MobileNavbar from "../selectedworks/MobileNavbar";
import Overview from "../selectedworks/Overview";
import Frysling from "../selectedworks/Frysling";
import ReactGym from "../selectedworks/ReactGym";
import ITLogger from "../selectedworks/ITLogger";
import ContactKeeper from "../selectedworks/ContactKeeper";
import GitHubFinder from "../selectedworks/GitHubFinder";

const Home = () => {
  return (
    <Fragment>
      <div className="desktop">
        <Navbar />
      </div>
      <div className="mobile">
        <MobileNavbar />
      </div>
      <Header />
      <Overview />
      <Frysling />

      <ReactGym />

      <ITLogger />
      <ContactKeeper />
      <GitHubFinder />
    </Fragment>
  );
};

export default Home;
