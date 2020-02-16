import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.scss'
import img1 from '../../assets/img/img1.jpg'


function Home() {
    return (
      <Container fluid>
        <Row>
       <img src={img1} className="img1"></img>
        </Row>
        </Container>
         
          
    );
  }
  
  export default Home;
  