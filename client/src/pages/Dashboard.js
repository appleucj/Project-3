import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import  AlertDismissable  from '../components/AlertDismissable';
import  Alertlink  from '../components/Alertlink';
import  Stackings  from '../components/Stacking';

function Dashboard() {

    return (
        <div style={{ backgroundColor: "lightgrey" }}>
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
                        <Alertlink />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={2}>
                        <Stackings />
                    </Col>
                    <Col sm={6}>
                     
                    </Col>
                        <Col sm={2}></Col>
                </Row>
            </Container >
         </div>
    )
}

export default Dashboard