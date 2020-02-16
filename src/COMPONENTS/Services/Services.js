import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
function Services() {
    return (
    
   
     <Container>
      
      
       <Row className="row1"> 
    

         <Col md={4}>
           <img src={img2} className="img3"></img>
           <div className="div1">
           <h3>Preconstruction<br></br> Planning</h3>
           <p>I'm a paragraph. 
             Click here to add<br></br>  your 
             own text and edit me. It’s easy.<br></br>
             Just click “Edit Text” or double 
             click<br></br> me to add your own content and<br></br> 
             make changes to the font.</p></div>
         </Col>
         <Col md={4}>
           <h1 className="f_h">Services</h1>
           <img src={img3} className="img2"></img>
           <div className="div1">
           <h3>Architectural<br></br>
            Modelling
            </h3>
           <p>I'm a paragraph. 
             Click here to add<br></br>  your 
             own text and edit me. It’s easy.<br></br>
             Just click “Edit Text” or double 
             click<br></br> me to add your own content and<br></br> 
             make changes to the font.</p></div></Col>
         <Col md={4}><img src={img4} className="img3"></img>
         <div className="div1">
           <h3>Construction <br></br>
              Management</h3>
           <p>I'm a paragraph. 
             Click here to add<br></br>  your 
             own text and edit me. It’s easy.<br></br>
             Just click “Edit Text” or double 
             click<br></br> me to add your own content and<br></br> 
             make changes to the font.</p></div></Col>
       </Row>
     </Container>
   
  
         
          
    );
  }
  
  export default Services;
  