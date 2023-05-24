import React from 'react';
import { Card } from 'react-bootstrap';
import TopComponent from '../layout/header/TopComponent';
import './CardComponent.css'; // Create a new CSS file for CardComponent styles

import CarouselComponent from '../layout/carousel/CarouselComponent';
const CardComponent = () => {
  const isSmallScreen = window.innerWidth <= 600; // Check if the screen size is small

  return (
    <Card className={`m-5 ${isSmallScreen ? 'no-border' : ''}`}>
      <Card.Body className="p-3 ">
        <TopComponent />
        <CarouselComponent/>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;