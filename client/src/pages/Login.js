import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import AlertDismissable from "../components/AlertDismissable";
import Forms from "../components/Forms";
import Breadcrumbs from "../components/Breadcrumbs";
// import Navbars from "../components/Navbar";
import { Navbar } from 'react-bootstrap';
 import { Image } from 'react-bootstrap';
import pupy from './pupy.jpeg';
import Headers from '../components/header'

function Login() {
  return (
    <div style={{
      backgroundImage: `url(${pupy})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh'
    }}>
      <Container>
        <Row>
          <Headers />
        </Row>
        <br>
        </br>
        <br></br>
        <Row >
          <Col sm={2}></Col>
          <Col sm={8}>
            <Image width='80%'  src={pupy} fluid />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <br></br>
        <Row>
          {/* <Col sm={2}></Col> */}
          <Col sm={12}>
            <Navbar />
          </Col>
          {/* <Col sm={2}></Col> */}
        </Row>

        <Row>
          {/* <Col sm={2}></Col> */}
          <Col sm={12}>
            <Forms />
          </Col>
          {/* <Col sm={2}></Col> */}
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
