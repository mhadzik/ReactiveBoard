import React from 'react';
import './Login.scss'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Browser } from 'react-kawaii';



const Login = () => {



    return (
        <Container className="login">
            <Container className="login__hero">
                <Browser mood="blissful" color="#61DDBC" />
            </Container>
            <Container className="login__container">
                <Row className="text-center" >
                    <Col>
                        <h2>Log in to your ReactiveBoard!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <Form>
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
                            <Button variant="green" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Login;
