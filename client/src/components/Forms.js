import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useAuthContext } from './utils/UserContext';
import { Row } from 'react-bootstrap';

const Forms = () => {
  const [show, setShow] = useState(true);

  const [_, dispatch] = useAuthContext();

  const login = () => {
    dispatch({
      type: "login"
    });
  }

  return (
    <div>
    <Form>
      <hr />
      <p>
        Walk-About is a premier Pet Services Platform to connect Pet lovers and Pet entrepreneurs together. Today, we are offering dog walking services on our platform, but in weeks to come our platform will be able to accept more services like pet sitting, pet boarding, pet glooming and more. Please check on our <a href="road map">road map</a> link for more services and approximate dates for release on our platform. 

      </p>
      <hr />
      <p>Please fillout the short user information below to create a new account to access our platform. Thank you and we hope to be your connection to everything pets related!!!</p>
      <hr />
      <br />
      <Form.Group as={Row} controlId="formHorizontalFirstName">
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
         First Name:
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" placeholder="First Name" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalLastName">
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
          Last Name:
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" placeholder="Last Name" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

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

      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
          Confirm:
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>
      <div>
      <Button onClick={login} variant="primary" type="submit">
            Submit
          </Button>
      </div>
    </Form>
    </div>
  )
}

export default Forms;