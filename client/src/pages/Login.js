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
//  import { Image } from 'react-bootstrap';
import pupy from '../components/dogwalker.jpeg';
import Headers from '../components/header';
import Footers from '../components/footer';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Login() {
  return (
    <div
      style={{
        // backgroundImage: `url(${pupy})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // minHeight: '100vh'
        background: "lightgrey"
      }}
    >

      <Container>
        <Row>
          <Headers />
        </Row>
        <br>
        </br>
        <br></br>

        <div>
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Col sm={2}></Col>
              <Form.Label column sm={2}>
                Email:
          </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
              <Col sm={2}></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Col sm={2}></Col>
              <Form.Label column sm={2}>
                Password:
        </Form.Label>
              <Col sm={6}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
              <Col sm={2}></Col>
            </Form.Group>
            <Form.Row>
            <Col sm={5}></Col>
            <Col sm={2}>
              <Button variant="primary" type="submit">
                Submit
          </Button>
          </Col>
          <Col sm={5}></Col>
            </Form.Row>
          </Form>
        </div>

      </Container >
      <Footers />
    </div>
  );
}

export default Login;
