import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from 'axios';
import './NavbarComponent.css';

const NavbarComponent = () => {
  const categories = ["culture", "economy", "news", "photos-videos", "sport"];

  const handleClick = async (category) => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/category-visit/${category}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar expand="md" variant="light" bg="none">
      <Container fluid className="navbar-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="navbar-nav">
            {categories.map((category, index) => (
              <React.Fragment key={`${category}-${index}`}>
                <Nav.Link onClick={() => handleClick(category)} className="linkText">
                  {category.split("-").join(" ")}
                </Nav.Link>
                {index < categories.length - 1 && <hr className="vr" />}
              </React.Fragment>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
