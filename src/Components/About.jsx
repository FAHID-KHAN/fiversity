import React from "react";

import web from "../images/homepage2.jpeg";
import { NavLink } from "react-router-dom";

import Common from "../common";

const About = () => {
  return (
    <div data-testid="common">
      <Common
        name="Welcome to the Fiversity ,your go to website to get started in Tampere "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};

export default About;
