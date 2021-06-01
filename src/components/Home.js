import React from "react";
import Slider from "./Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import img1 from "./images/img-home.jpg";
import Jumbotron from "./Jumbotron";

const Home = () => {
    return <>
        <Slider/>
        <Container style={{padding:'2rem'}}>
            <Row>
                <Col>
                    <Card  style={{'width':'18rem'}}>
                        <Card.Img variant='top' src={img1} />
                        <Card.Body>
                            <Card.Title>Web Dev Blog</Card.Title>
                            <Card.Text>
                                My Web Developer Blog : igor JS
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card  style={{'width':'18rem'}}>
                        <Card.Img variant='top' src={img1} />
                        <Card.Body>
                            <Card.Title>Web Dev Blog</Card.Title>
                            <Card.Text>
                                My Web Developer Blog : igor JS
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card  style={{'width':'18rem'}}>
                        <Card.Img variant='top' src={img1} />
                        <Card.Body>
                            <Card.Title>Web Dev Blog</Card.Title>
                            <Card.Text>
                                My Web Developer Blog : igor JS
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{ marginBottom : '30px' }}>
            <Row >
                <Col md={7} >
                    <img src={img1} style={{ maxWidth : '400px' }}/>
                </Col>
                <Col md={5} >
                    <h2>Hi, I'm Igor</h2>
                    <p>
                        My Web Developer Blog : igor JS
                        My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                        My Web Developer Blog : igor JS
                        My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                        My Web Developer Blog : igor JS
                        My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                        My Web Developer Blog : igor JS
                    </p>
                </Col>
            </Row>
        </Container>
    </>
}

export default Home;