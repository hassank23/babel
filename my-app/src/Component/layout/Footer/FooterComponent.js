import React from 'react';
import { Container, Row, Col ,Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './FooterComponent.css';

const FooterComponent = () => {
  return (

      <Container>
            <div className="gray-bg">
        <Row>
          <Col xs={12} md={2} className='left-side'>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="h">بما تطلبه</h1>
              <a className="a" href="#1">هناك العديد من الانواع</a>
              <a className="a" href="#1">بعض النوادر او الكلمات</a>
              <a className="a" href="#1">عليك ان تتحقق اولا أن</a>
            </div>
          </Col>
          <Col xs={12} md={2} className='left-side'>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="h">بما تطلبه</h1>
              <a className="a" href="#1">هناك العديد من الانواع</a>
              <a className="a" href="#1">بعض النوادر او الكلمات</a>
              <a className="a" href="#1">عليك ان تتحقق اولا أن</a>
            </div>
          </Col>
          <Col xs={12} md={2} className='left-side'>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="h">بما تطلبه</h1>
              <a className="a" href="#1">هناك العديد من الانواع</a>
              <a className="a" href="#1">بعض النوادر او الكلمات</a>
              <a className="a" href="#1">عليك ان تتحقق اولا أن</a>
            </div>
          </Col>
          <Col xs={12} md={1} className='left-side'>
            
          </Col>
          <Col xs={12} md={5}>
            <Row>
            <Col xs={12} md={6} className='right-side'></Col>
              <Col xs={12} md={6} className='right-side'>
                <div className="d-flex flex-column align-items-center justify-content-center tw">
                  <h1 className="h">مشاهدة على توتر</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="d-flex flex-column align-items-end justify-content-end right-bottom ">
                <InputGroup>
                  <Form.Control aria-label="الاشتراك" className='form-area txt-size  'dir="rtl" />
                  <InputGroup.Text className="red-background txt-size  "  dir="rtl">
                    الاشتراك
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="icon-col">
                <div className="icon-container">
                  <div className="facebook-button">
                    <FontAwesomeIcon icon={faFacebookF} size="1x" />
                  </div>
                  <div className="facebook-button">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                  </div>
                  <div className="facebook-button">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
      </Container>

  );
};

export default FooterComponent;
