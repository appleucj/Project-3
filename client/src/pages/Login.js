import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AlertDismissable from "../components/AlertDismissable";
import Forms from "../components/Forms";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbars from "../components/Navbar";
import { Navbar } from 'react-bootstrap';

function Login() {

  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Container>
        <Row>
          <Navbar bg="dark" variant="dark" width="100%" fixed="top">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
      Pets Care
    </Navbar.Brand>
          </Navbar>
        </Row>
        <br>
        </br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Navbar />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <br>
        </br>
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
    </div>
  );
}

export default Login;
