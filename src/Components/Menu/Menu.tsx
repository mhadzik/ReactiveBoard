import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Menu.scss'
import { Browser } from 'react-kawaii';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'




const Menu = () => {

    const [viewMode, setViewMode] = useState(false)
    useEffect(() => {
        console.log(viewMode)
    })

    return (
        <Container className="Menu">
            <Row>
                <Col xs={3} md={3}>
                    <Browser mood="blissful" color="#78b159" size={50}/>
                </Col>
                <Col xs={{span: 3, offset: 3}} md={{span: 1, offset: 7}}>
                    <BootstrapSwitchButton checked={true} onstyle="light" offstyle="dark" size="xs"
                    onChange={()=> setViewMode(!viewMode)}
                    />
                    <h5>Lightmode</h5>
                </Col>
                <Col xs={3} md={{span: 1, offset: 0}}>
                    <h5><a href="/">Logout</a></h5>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Menu;
