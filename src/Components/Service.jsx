import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import school from "../images/school.jpeg";
import place from "../images/places.jpeg";
import res from "../images/res.jpeg";
import uni from "../images/uni.jpg";

import Curriculum from "./Curriculum";
import Schoolinfo from "./Schoolinfo";
import PlacesToEat from "./PlacesToEat";
import PlacesToSee from "./PlacesToSee";

const Service = () => {
  return (
    <div>
      <div style={{ marginTop: "50px" , marginBottom:"20px"}}>
        <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" , paddingBottom:"3rem"}}>
          Fiversity Services
        </h2>
        <Row>
          <Col>
            <Card
              style={{
                width: "20rem",
                margin: "10px",
                minHeight: "100px",
                
              }}
            >
              <Card.Img src={school} alt="Card image" />
              <Card.Title style={{ marginTop: "65px", textAlign: "center" }}>School Curriculum</Card.Title>
              <Card.Body>
                <Card.Text>
                  Click the button to know more about the school curriculm and course list
                </Card.Text>
                <a style={{ marginTop: "30px" }}href="/curriculum" class="btn btn-primary">
                  Open info
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "20rem",
                margin: "10px",
                minHeight: "100px",
              }}
            >
              <Card.Img src={uni} alt="Card image" />
              <Card.Title style={{ marginTop: "54px", textAlign: "center" }}>School Info</Card.Title>
              <Card.Body>
                <Card.Text>
                  Click the button to know more about the school locations
                </Card.Text>
                <a style={{ marginTop: "30px" }} href="/schoolinfo" class="btn btn-primary">
                Open info
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
              <Card
                style={{
                  width: "20rem",
                  margin: "10px",
                  minHeight: "100px",
                }}
              >
                <Card.Img src={place} alt="Card image" />
                <Card.Title style={{ marginTop: "50px", textAlign: "center" }}>Explore</Card.Title>
                <Card.Body>
                  <Card.Text>
                    Click the button to know more about places to see in tampere
                  </Card.Text>
                  <a style={{ marginTop: "30px" }} href="/PlacesToSee" class="btn btn-primary">
                  Open info
                  </a>
                </Card.Body>


                
              </Card>
              

             
            </Col>
            <Col>
              <Card
                style={{
                  width: "20rem",
                  margin: "10px",
                  minHeight: "100px",
                }}
              >
                <Card.Img src={res} alt="Card image" />
                <Card.Title style={{ marginTop: "30px", textAlign: "center" }}>Resturant</Card.Title>
                <Card.Body>
                  <Card.Text>
                    Click the button to know more about different resturant in Tampere
                  </Card.Text>
                  <a style={{ marginTop: "54px" }} href="/PlacesToEat" class="btn btn-primary">
                  Open info
                  </a>
                </Card.Body>


                
              </Card>
              

             
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
