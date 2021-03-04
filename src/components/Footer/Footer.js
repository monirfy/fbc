import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
library.add(faFacebook, faTwitter, faLinkedin);
const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <Container>
        <Row>
          <Col>
            <p className="text-center text-light mb-0">
              Copyright &copy; 2021 | Fake Broadcasting Corporation (FBC) by{' '}
              <a className="text-light" href="http://monirhossain.com">
                Monir Hossain
              </a>
            </p>
            <>
              <Nav className="justify-content-center social-icon" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
