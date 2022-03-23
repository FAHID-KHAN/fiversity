import React from "react";
import web from "../src/images/homepage1.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}{" "}
                    <strong className="brand-name"> Fiversity </strong>
                  </h1>
                  <h2 className="my-3">
                    This is a go to web page for students who are coming to
                    Tampere to start their student life .The website is a info
                    tool for the students to get the required information about
                    evrything that one student need while starting their life in
                    a new city .The website contains various info about
                    admission process ,Programme available , Clubs in different
                    universities and also the related things to get started in
                    city of Tampere .
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
