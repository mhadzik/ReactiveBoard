import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import './UserPage.scss'
//import { Browser } from 'react-kawaii';

//Components
import Menu from '../Components/Menu/Menu'
import Footer from '../Components/Footer/Footer'




const UserPage = () => {



    return (
        <React.Fragment>
            <Menu />
                <Container className="UserPage">
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1>Welcome to your personal dashboard!</h1>
                            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, ullam ducimus eaque aperiam est perspiciatis sequi numquam incidunt nostrum, porro obcaecati veritatis officiis pariatur impedit dolorem. Vero minus laboriosam sapiente?</h5>
                        </Col>
                    </Row>
                </Container>
            <Footer />
        </React.Fragment>

    );
}

export default UserPage;
