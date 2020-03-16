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
function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col sm={12}>
          </Col>

        </Row>
        <br>
        </br>
        <br>
        </br>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <AlertDismissable />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Forms />
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>

        <Row>
          <Col sm={8}>

            <Card >
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Contact us
            </Accordion.Toggle>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
