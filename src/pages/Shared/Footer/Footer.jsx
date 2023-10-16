import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black py-5 mt-4'>
            <Container>
                <Row className='text-white txt'>
                    <Col xs={12} md={3}>
                        <img className='img-fluid' src={logo} alt="" />
                        <p className='mt-3'>Food Service Company</p>
                    </Col>
                    <Col className='text-center' xs={12} md={3}>
                        <div className='text-start'>
                           <h3>Product</h3>
                            <p>Features</p>
                            <p>Services</p>
                            <p>Pricing</p>
                            <p>How it works</p>
                        </div>

                    </Col>
                    <Col className='text-center' xs={12} md={3}>
                        <div className='text-start'>
                          <h3>Resources</h3>
                            <p>Documentation</p>
                            <p>New Update</p>
                            <p>Blog</p>
                        </div>

                    </Col>
                    <Col className='text-center' xs={12} md={3}>
                        <div className='text-start'>
                            <h3>Contact Us</h3>
                            <p>+8801723234324</p>
                            <p>LinkedIn</p>
                        </div>
                     
                    </Col>
                </Row>
                <hr className='text-white' />
                <h3 className=' mt-5 mb-4 text-white text-center txt'>Follow Us</h3>
                <div className=' text-white text-center'>
                    <FaFacebook className='me-3 fs-4' />
                    <FaInstagram className='me-3 fs-4' />
                    <FaTwitter className='me-3 fs-4' />
                    <FaLinkedin className='fs-4' />

                </div>
            </Container>
        </div>

    );
};

export default Footer;