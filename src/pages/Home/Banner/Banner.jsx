import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import banner from '../../../assets/burger.png'
const Banner = () => {
    return (
        <div className='bg d-flex align-items-center'>
            <Container className='py-5 text-white'>
                <Row xs={1} md={2} className='d-flex align-items-center'>
                    <Col xs={{ order: 2 }} md={{ order: 1 }}>
                        <img className='img-fluid' src={banner} alt="" />
                    </Col>
                    <Col xs={{ order: 1 }} md={{ order: 2 }}>
                        <div>
                            <h1 className='w-50'>It is even better than an expensive cookery book</h1>
                            <p>Learn how to make your favorite restaurant’s dishes</p>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Banner;