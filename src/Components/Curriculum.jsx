


  import React from "react";
  import subject from './curriculum.json'
  import 'bootstrap/dist/css/bootstrap.css';
  import ListGroup from 'react-bootstrap/ListGroup';
  import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
  import Common from "../common";
  
  
  const Curriculum = () => {
    
 
   
      return (
        <div>
           <div Class="col-md-4 col-10 mx-auto">
           <h1> Tamperer University Curriculum</h1>           
            
        { subject.map(curriculum =>{
           return(
            <ListGroup>
                  <ListGroup.Item>
                    <h4>Name: {curriculum.name}</h4>
                    <p>ID: {curriculum.id}</p>
                    <p>Type: {curriculum.type}</p>
                    <p>Credits: {curriculum.credits}</p>
                    <p>Code: {curriculum.code}</p>
                  </ListGroup.Item>
                 
            </ListGroup>
      
       
  
          
      )
   })
         
   }
  
  </div>
   </div>
        );
      };
  
      export default Curriculum;
      