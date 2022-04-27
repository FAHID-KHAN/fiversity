import React from "react";
import building from './sisu_building.json'
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Common from "../common";
import { Row, Col, Card } from "react-bootstrap";


const Schoolinfo = () => {
 
    return (




         <div>
            <div style={{ marginTop: "50px" }}>
         <h2 style={{ color: "Blues", padding: "10px", textAlign: "center" }}>
         Tamperer University locations
         </h2>
 
 <Row>
 
 
             
         { building.map(schoolinfo =>{
            return(
             <Col>
             <Card border="light"
               style={{
                 width: "18rem",
                 margin: "10px",
                 minHeight: "100px",
               }}
             >

            
                 <Card.Header>{schoolinfo.name.fi}</Card.Header>
                 <Card.Body>
                 <Card.Text>{ schoolinfo.address.streetAddress}</Card.Text>
                 <Card.Text>{schoolinfo.address.postalCode}</Card.Text>
                 <Card.Text>{schoolinfo.address.city}</Card.Text>
              
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
       











   
    export default Schoolinfo;
    