import React from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

export default class ThingsToSee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Tampere",

      placeSuggestions: [],
    };
  }
  componentDidMount() {
    let getPlaceSuggestions = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=things-to-see-${this.state.city}&key=${process.env.REACT_APP_MAP_API_KEY}`;
    axios.all([axios.get(getPlaceSuggestions)]).then(
      axios.spread((places) => {
        this.setState({ placeSuggestions: places.data.results });
      })
    );
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" }}>
          Things To See in {process.env.REACT_APP_MOOVIE_API}
        </h2>
        <Row>
          {this.state.placeSuggestions.map((place) => {
            return (
              <Col>
                <Card
                  style={{ width: "18rem", margin: "10px", minHeight: "100px" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "50px" }}
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyB6wWNi-K-Mq8RM0NpVM0P8VbyyS7HjT7E`}
                  />
                  <Card.Body>
                    <Card.Title>{place.name}</Card.Title>
                    <Card.Text>{place.formatted_address}</Card.Text>
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
