import React from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

export default class Curriculams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "TAMK",
      curriculamns: [],
    };
  }

  componentDidMount() {
    let getCurriculamns = `https://opendata.tamk.fi/openapi/tamk_curriculums_openapi2.yaml`;
    console.log(getCurriculamns);
    axios.get(getCurriculamns).then((res) => {
      this.setState({ curriculamns: res.data.programmes });
    });
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" }}>
          Check Out Curriculams in {this.state.name}
        </h2>
        <Row>
          {this.state.curriculamns.map((curriculamn) => {
            return (
              <Col>
                <Card
                  style={{ width: "18rem", margin: "10px", minHeight: "100px" }}
                >
                  <Card.Body>
                    <Card.Title>{curriculamn.name}</Card.Title>
                    <Card.Text>{curriculamn.description}</Card.Text>
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
