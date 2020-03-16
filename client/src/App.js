import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Figure } from 'react-bootstrap';
import AlertDismissable from "./components/AlertDismissable";
import Forms from "./components/Forms";
import Breadcrumbs from "./components/Breadcrumbs";
import Figures from "./components/Figures";
function App() {
  return (
    <div className="App">

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
      </Container>
    </div>
  );
}

export default App;
