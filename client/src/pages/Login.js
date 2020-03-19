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
// import { Image } from 'react-bootstrap';
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
          {/* <Navbar bg="dark" variant="dark" width="100%" fixed="top">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Pet Care Hello
           </Navbar.Brand>
          </Navbar> */}
        </Row>
        <br>
        </br>
        <br></br>
        <Row >
          <Col sm={2}></Col>
          <Col sm={8}
        <Image width='80%'  src={pupy} fluid />
        <Col sm={2}></Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Navbar />
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
    </div>
  );
}

export default Login;
