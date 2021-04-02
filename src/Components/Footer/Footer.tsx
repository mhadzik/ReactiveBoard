import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.scss'
import heart from '../../Assets/img/heart-16x16.png'
//import { Browser } from 'react-kawaii';



const Footer = () => {



    return (
        <Container className="Footer" fluid>
            <Row>
                <Col xs={12} className="text-center">
                    <h5>Thanks for using our dashboard!</h5>
                </Col>
            </Row>
            <Row className="Footer__social">
                <Col xs={12} md={6}>
                    <span>Created with <img src={heart} alt=""/> by <span className="Footer__name"> Mikołaj Hadzik</span></span>
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <ul>
                        <li><a href="https://www.google.pl/" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://www.google.pl/" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://www.google.pl/" target="_blank" rel="noreferrer">mikolaj.hadzik@gmail.com</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
