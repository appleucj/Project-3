import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AlertDismissable from "../components/AlertDismissable";
import Forms from "../components/Forms";
import Breadcrumbs from "../components/Breadcrumbs";
import Figures from "../components/Figures";


function Login() {

  return (
      <Container>
        <br>
        </br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
          <AlertDismissable />
          </Col>
          <Col sm={2}></Col>
        </Row>

        <br>
        </br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            
            <Figures/>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Forms />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Breadcrumbs />
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container >
  );
}

export default Login;
