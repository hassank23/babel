import React from 'react';
import { Container } from 'react-bootstrap';
import './CopyrightComponent.css';

const CopyrightComponent = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center bg-white text-success py-3">
      <p className="text-center mb-0 responsive-text sm">Copyright(c) website name</p>
    </Container>
  );
};

export default CopyrightComponent;