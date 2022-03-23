import React from "react";
import web from "../src/images/homepage2.png";
import { NavLink } from "react-router-dom";
import Common from "./common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to the Fiversity ,your go to website to get started in Tampere "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
