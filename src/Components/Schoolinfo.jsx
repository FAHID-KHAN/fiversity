import React from "react";
import building from './sisu_building.json'
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Common from "../common";


const Schoolinfo = () => {
    return (
      <div>
                <div Class="col-md-4 col-10 mx-auto">
         <h1> Tamperer University locations</h1>           
          
 { building.map(schoolinfo =>{
    return(
          <ListGroup>
                <ListGroup.Item>{ schoolinfo.name.fi}</ListGroup.Item>
             <ListGroup.Item>{ schoolinfo.address.streetAddress}</ListGroup.Item>
          </ListGroup>
    
     

        
    )
 })
       
 }

</div>
 </div>
      );
    };

    export default Schoolinfo;
    