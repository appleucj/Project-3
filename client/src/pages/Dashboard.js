import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import AlertDismissable from '../components/AlertDismissable';
import Alertlink from '../components/Alertlink';
import Stackings from '../components/Stacking';
import Portfolio from '../components/Portfolio';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Dashboard() {
    return (
        <div style={{ backgroundColor: "lightgrey" }}>
            <Container>
                <Row>
                    <Navbar bg="dark" variant="dark" width="100%" fixed="top">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                             Pets Care
                         </Navbar.Brand>
                    </Navbar>
                    <div className="d-flex justify-content-end">
                        <Button  variant="outline-info">
                            Logout
                        </Button>
                    </div>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <AlertDismissable />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Alertlink />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={2}>
                        <Stackings />
                    </Col>
                    <Col sm={6}>
                        <Portfolio />
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Dashboard