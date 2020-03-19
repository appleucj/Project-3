import React, { useState } from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import img from './Brother.png';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const Portfolio = () => {
    const [show, setShow] = useState(true);
    return (
        <Container>
            
            <Row>

                <Col sm={8}>
                    <Card style={{ width: '33rem', height:'30rem' }}>
                        <Col sm={4} >
                            <Image style={{padding:'2rem'}} src={img} fluid />
                        </Col>
                        <Card.Body>
                            <Card.Title>Steven</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Manhattan, New York</Card.Subtitle>
                            <Card.Text>
                                I can walk your dog, my rate is $20 per hour.
                            </Card.Text>
                            <Card.Link href="#">Contact Me</Card.Link>
                            <Card.Link href="#">Leave a Message</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container >)
}

export default Portfolio;