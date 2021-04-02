import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Dashboard.scss'
//import { Browser } from 'react-kawaii';



const Dashboard = () => {



    return (
        <Container className="Dashboard">
            <Row>
                <Col xs={12} className="text-center">
                    <h1>Welcome to your personal dashboard!</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
