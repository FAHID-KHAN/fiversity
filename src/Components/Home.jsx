import React from "react";

import web from "../images/homepage1.webp";
import { NavLink } from "react-router-dom";

import Common from "../common";

const Home = () => {
  return (
    <>
      <Common
        name="Get into student life in Tampere with  "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
