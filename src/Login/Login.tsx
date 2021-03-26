import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Login.scss'
import { Browser } from 'react-kawaii';



const Login = () => {



    return (
        <Container className="login">
            <Container className="login__hero">
                <Browser mood="blissful" color="#00CFB3" />
            </Container>
            <Container className="login__container">
                <Row className="text-center" >
                    <Col>
                        <h1>Log in to your ReactiveBoard!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}  className="login__col">
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
