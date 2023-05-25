import React from 'react';
import { Col, Container, Row ,} from 'react-bootstrap';
import logo from './babel.png';
import './TopComponent.css'
const TopComponent = () => (
    <Container>
    <Row>
        <Col className="d-flex t " xs={12} md={4}>
            <a href="facebook.com"  >تسجيل دخول</a>
        </Col>
        <Col className="d-flex justify-content-center" xs={12} md={4}>
            <img src={logo}  alt="babel logo" className="mx-auto d-block logo-babel"/>
        </Col>
        <Col xs={12} md={4}>
           
        </Col>
    </Row>
    </Container>
);

export default TopComponent;
