import React from 'react';
import { Card } from 'react-bootstrap';
import TopComponent from '../layout/header/TopComponent';
import './CardComponent.css'; // Create a new CSS file for CardComponent styles
import CopyrightComponent from '../layout/Copyright/CopyrightComponent';
import CarouselComponent from '../layout/carousel/CarouselComponent';
import FooterComponent from '../layout/Footer/FooterComponent';
import MostreadComponent from '../layout/MostRead/MostreadComponent';
const CardComponent = () => {

  return (

    <Card className="cad">
      <Card.Body className="small-t">
        <TopComponent />
        <CarouselComponent/>
        <hr className='hr-line'/>
        <MostreadComponent/>
        <hr className='hr-line'/>
        <FooterComponent/>
        <CopyrightComponent/>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;