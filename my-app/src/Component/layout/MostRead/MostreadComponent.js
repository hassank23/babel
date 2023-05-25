import { useState } from 'react';
import { Col, Button, Collapse, Card, Container, Row, Image } from 'react-bootstrap';
import './MostreadComponent.css';

const MostreadComponent = () => {
  const [open, setOpen] = useState([true, false, false, false]);

  const toggleOpen = (index) => {
    let newOpen = [...open];
    newOpen[index] = !newOpen[index];

    // Check if all collapses are closed
    const allClosed = newOpen.every((isOpen) => !isOpen);

    // If all collapses are closed, keep the first one open
    if (allClosed) {
      newOpen[0] = true;
    }

    setOpen(newOpen);
  };

  const buttonTexts = [
    'كلمات عشوائية',
    'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم',
    'هنالك العديد من الأنواع المتوفرة لنصوص ',
    'هنالك العديد من الأنواع',
  ];
  const cardTexts = [
    'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً',
    'لبروفيسور "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي',
    ' أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) للمفكر شيشيرون (Cicero) والذي كتبه في عام 45 قبل الميلاد. ',
    'وهو بروفيسور اللغة اللاتينية في جامعة هامبد',
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h4 className="title" dir="rtl">
              الأكثر قراءة
            </h4>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="sides">
                <div
                  className={`button-container ${open[index] ? 'expanded' : ''}`}
                  onClick={() => toggleOpen(index)}
                >
                  <Button variant="success" className={`expand-button ${open[index] ? 'active' : ''}`}>
                    {buttonTexts[index]}
                  </Button>
                  <Button
                    variant="success"
                    className={`collapse-button ${open[index] ? 'active' : ''}`}
                  >
                    {open[index] ? '-' : '+'}
                  </Button>
                </div>
                <Collapse in={open[index]}>
                  <Card className="collapse-card">
                    <Card.Body dir="rtl">{cardTexts[index]}</Card.Body>
                  </Card>
                </Collapse>
              </div>
            ))}
          </Col>
          <Col sm={6}>
            <Image src="https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Your Image" className="right-column-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MostreadComponent;
