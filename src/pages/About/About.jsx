import React from 'react';
import banner from '../../assets/banner_about.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../assets/about.jpg'
import './About.css'
import useTitle from '../../hook/useTitle';
const About = () => {
    useTitle('About')
    return (
        <div>
            <img style={{ width: '100%', height: '50vh' }} src={banner} alt="" />
            <Container>
                <h2 className='text-center about my-3'>About US</h2>
                <Row xs={1} md={2} className='my-5 d-flex align-items-center'>
                    <Col>
                        <img className='img-fluid' src={img} alt="" />
                    </Col>
                    <Col>
                        <h2>Welcome to Food Hub</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                           <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    <h3 className='blog text-warning'>Since: 1998-2023</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;