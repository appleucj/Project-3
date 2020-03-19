import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useAuthContext } from './utils/UserContext';

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
      <Form.Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>
      </Form.Row>


      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>



      <Button variant="primary" type="submit" onClick={login}>
        <span>Submit</span>
      </Button>
    </Form>
  )
}

export default Forms;