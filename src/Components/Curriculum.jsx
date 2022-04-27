  import React from "react";
  import subject from './tunicurriculum.json'
  import 'bootstrap/dist/css/bootstrap.css';
  import { Row, Col, Card } from "react-bootstrap";
  import Common from "../common";
  
  
  
  const Curriculum = () => {
    
 
   
      return (

        <div>
           <div style={{ marginTop: "50px" }}>
        <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" }}>
          Tampere University Curriculum 
        </h2>

<Row>


            
        { subject.map(curriculum =>{
           return(
            <Col>
            <Card   border="light"
              style={{
                width: "18rem",
                margin: "10px",
                minHeight: "100px",
              
              }}
            >

              <Card.Header >{curriculum.name}</Card.Header>
       
              <Card.Body>
               
                <Card.Text>ID: {curriculum.id}</Card.Text>
                <Card.Text>Study type: {curriculum.type}</Card.Text>
                <Card.Text>Total credits: {curriculum.credits}</Card.Text>
                <Card.Text>Course code: {curriculum.code}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
      );
   })}
   </Row>
  
  </div>
   </div>
        );
        
      };
      
  
      export default Curriculum;
      
      