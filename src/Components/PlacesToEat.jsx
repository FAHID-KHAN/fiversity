import React from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export default class PlacesToEat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Tampere",
      resturants: [],
    };
  }

  componentDidMount() {
    let getResturantSuggetions = `/maps/api/place/textsearch/json?query=resturants-in-${this.state.city}&key=${process.env.REACT_APP_MAP_API_KEY}`;
    console.log(getResturantSuggetions);
    axios.get(getResturantSuggetions).then((res) => {
      this.setState({ resturants: res.data.results });
    });
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" }}>
          Resturant to explore in {this.state.city}
        </h2>
        <Row>
          {this.state.resturants.map((resturant) => {
            return (
              <Col>
                <Card
                  style={{ width: "18rem", margin: "10px", minHeight: "100px" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "200px" }}
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${resturant.photos[0].photo_reference}&key=${process.env.REACT_APP_MAP_API_KEY}`}
                  />
                  <Card.Body>
                    <Card.Title>{resturant.name}</Card.Title>
                    <Card.Text>{resturant.formatted_address}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
