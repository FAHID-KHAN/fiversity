import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react/cjs/react.production.min";

const ThingsToSee = () => {
  const [place, setPlace] = useState([]);
  const getPlaces = async () => {
    const url =
      "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT&key=AIzaSyCBdlR9aoETRtX07DhPm52A5aZTIrAiey0";
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const data = responseJson.results;
      setPlace(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ color: "white", padding: "10px" }}>
        Things To See in Tampere
      </h2>
      <Row>
        {place.map((places) => {
          return (
            <Col>
              <Card
                style={{ width: "18rem", margin: "10px", minHeight: "400px" }}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "200px" }}
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyCBdlR9aoETRtX07DhPm52A5aZTIrAiey0`}
                />
                <Card.Body>
                  <Card.Title>{places.name}</Card.Title>
                  <Card.Text>{places.formatted_address}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ThingsToSee;
