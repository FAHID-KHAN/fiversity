import React from "react";
import web from "../images/housing.jpeg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div Class="col-md-4 col-10 mx-auto">
        <div Class="card">
          <img src={props.imgsrc} Class="card-img-top" alt={props.imgsrc} />
          <div Class="card-body">
            <h5 Class="card-title font-weight-bold">{props.title}</h5>
            <p Class="card-text"></p>
            <NavLink to="#" Class="btn btn-primary">
              Open Info 
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
