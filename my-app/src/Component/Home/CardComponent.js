import React from 'react';
import { Card } from 'react-bootstrap';
import TopComponent from '../layout/header/TopComponent';
import './CardComponent.css'; // Create a new CSS file for CardComponent styles
import CopyrightComponent from '../layout/Copyright/CopyrightComponent';
import CarouselComponent from '../layout/carousel/CarouselComponent';
import FooterComponent from '../layout/Footer/FooterComponent';
const CardComponent = () => {

  return (

    <Card className="cad">
      <Card.Body className="small-t">
        <TopComponent />
        <CarouselComponent/>
        <FooterComponent/>
        <CopyrightComponent/>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;