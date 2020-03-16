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

 function App (){return (
  <div className="App">
    <Container>
      <Row>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
        </Figure>
        <Col sm={8}>

        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm={8}> <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form></Col>
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
