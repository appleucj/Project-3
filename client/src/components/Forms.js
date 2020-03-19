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

    // <Form>
    //   <Form.Group controlId="formGroupEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>
    //   <Form.Group controlId="formGroupPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    // </Form>
    //   <Row xs={1} md={2}>
    //   <Col>1 of 3</Col>
    //   <Col>2 of 3</Col>
    //   <Col>3 of 3</Col>
    // </Row>

    <Form>
       <Form.Group as={Row} controlId="formHorizontalEmail">
        <Col sm={2}></Col>
        <Form.Label fontsize='8' column sm={2} positon="relative" left="50px">
         First Name
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" placeholder="First Name" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalLastName">
        <Col sm={2}></Col>
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" placeholder="Last Name" />
        </Col>
        <Col sm={1}></Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Col sm={2}></Col>
        <Form.Label column sm={1}>
          Email
        </Form.Label>
        <Col sm={7}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>


      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Col sm={2}></Col>
        <Form.Label column sm={1}>
          Password
</Form.Label>
        <Col sm={7}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Col sm={2}></Col>
        <Form.Label column sm={1}>
          Confirm
    </Form.Label>
        <Col sm={7}>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
        <Col sm={2}></Col>
      </Form.Group>



    </Form>
  )
}

export default Forms;