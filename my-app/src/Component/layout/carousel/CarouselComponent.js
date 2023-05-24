import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import NavbarComponent from '../Navbar/NavbarComponent';
import './CarouselComponent.css';
import { Button } from 'react-bootstrap';

const MyCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [autoSlide, setAutoSlide] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setAutoSlide(window.innerWidth > 768);
  };

  useEffect(() => {
    const ids = [1, 2, 3, 4];
    const fetchSlides = async () => {
      const fetchedSlides = [];
      for (let id of ids) {
        try {
          const res = await axios.get(`http://localhost:8000/api/articles/show/${id}`);
          fetchedSlides.push(res.data);
        } catch (error) {
          console.error(error);
        }
      }
      setSlides(fetchedSlides);
    }

    fetchSlides();
    handleResize();
    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <NavbarComponent />
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 0 }}>
        <Carousel controls={window.innerWidth <= 768} interval={autoSlide ? 2000 : null}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index} interval={autoSlide ? 2000 : null}>
              <img
                className="d-block w-100 carousel-image"
                src={slide.imageUrl}
                alt={slide.title}
              />
              <Carousel.Caption className="carousel-caption m-4   ">
                <h3 className="title-h " >{slide.title}</h3>
                <hr className="border border-Light border-1" />
                <p className="title-t">{slide.text}</p>
                <Button variant="danger" size="sm" className='rounded-b'>المزيد</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
