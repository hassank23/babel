
import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './CategoryComponent.css'
import axios from 'axios';

const CategoriesComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/homepage/aggregate/24hours')
      .then(response => {
        if (response.data.data.length < 5) {
          axios
            .get('http://127.0.0.1:8000/api/homepage/aggregate/week')
            .then(secondResponse => {
              setData(secondResponse.data.data.slice(0, 5));
            })
            .catch(error => {
              console.log('Error fetching data from second URL', error);
            });
        } else {
          setData(response.data.data.slice(0, 5));
        }
      })
      .catch(error => {
        console.log('Error fetching data', error);
      });
  }, []);

  return (
    <div>
    <Container>
      <Row className='mt-2'>
        <Col sm={12} md={12} lg={7}>
          {[0, 1].map(rowIdx => (
            <Row className="mb-2" key={rowIdx}>
              {data.slice(1 + rowIdx * 2, 3 + rowIdx * 2).map((item, idx) => (
                <Col sm={12} md={6} key={idx}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="text-end">
                      <Card.Title className='tit'>{item.category}</Card.Title>
                      <Button  className="more rounded-pill"size="sm">
                      المزيد
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
        </Col>
        {data.length > 0 && (
          <Col sm={12} md={12} lg={5} className='mb-2'>
            <Card className="h-100 ">
              <Card.Img
                variant="top"
                src={data[0].image}
                style={{ height: '85%', objectFit: 'cover' }}
              />
              <Card.Body className="text-end">
                <Card.Title className='tit'>{data[0].category}</Card.Title>
                <Button  size="sm" className="rounded-pill more">
                 المزيد
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
    </div>
  );
};

export default CategoriesComponent;
