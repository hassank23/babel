import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import logo from './babel.png';
import './TopComponent.css';

const TopComponent = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async () => {
        // Send a POST request to the login endpoint
        const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
    
        if (response.ok) {
            const data = await response.json();
            // Save the JWT to localStorage
            console.log(data.access_token)
            localStorage.setItem('token', data.access_token);
            setIsLoggedIn(true);
            handleClose();
        } else {
            alert('Login failed');
        }
    };
    

    const handleLogout = async () => {
        // Retrieve the JWT from localStorage
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        // Send a POST request to the logout endpoint
        const response = await fetch('http://127.0.0.1:8000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the JWT in an Authorization header
            },
        });
    
        if (response.ok) {
            // Remove the JWT from localStorage
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            window.location.reload();
        } else {
            alert('Logout failed');
        }
    };
    

    return (
        <Container>
            <Row>
                <Col className="d-flex t " xs={12} md={4}>
                    {isLoggedIn ? (
                        <Button variant="link" onClick={handleLogout}>تسجيل خروج</Button>
                    ) : (
                        <Button variant="link" onClick={handleShow}>تسجيل دخول</Button>
                    )}
                </Col>
                <Col className="d-flex justify-content-center" xs={12} md={4}>
                    <img src={logo} alt="babel logo" className="mx-auto d-block logo-babel" />
                </Col>
                <Col xs={12} md={4}>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>تسجيل دخول</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>البريد الإلكتروني</Form.Label>
                            <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>كلمة المرور</Form.Label>
                            <Form.Control type="password" placeholder="كلمة المرور" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>إغلاق</Button>
                    <Button variant="primary" onClick={handleLogin}>تسجيل دخول</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default TopComponent;
