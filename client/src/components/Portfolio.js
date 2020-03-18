import React, { useState } from 'react';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import petsImg from './pets.png';

const Portfolio = () => {

    const [show, setShow] = useState(true);

    return (
        <Container>
            <br>
            </br>
            <Row>
                <Col sm={4} >
                    <Image src={petsImg} roundedCircle fluid />
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br>
            </br>
            <Row>

            </Row>
            <br></br>
            <Row>

            </Row>
        </Container >)
}

export default Portfolio;