import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaThumbsUp,FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Chef = ({ chef }) => {
    const { id, chef_name, chef_img, experience, number_of_recipes, likes } = chef;
    return (
        <div>
            <Card className='me-3 text-center name'>
                <div>
                <Card.Img className='img-fluid w-50' variant="top" src={chef_img} />
                </div>
                <Card.Body className='text-start'>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold'>{experience}+ </span>
                         years experience
                    </Card.Text>
                    <Row xs={2} md={2}>
                        <Col>
                        <Card.Text className='d-flex align-items-center '>
                        <FaClipboardList className='me-2 text-danger'/> <span>{number_of_recipes} recipes</span> 
                    </Card.Text>
                        </Col>
                        <Col>
                        <Card.Text className='d-flex align-items-center '>
                       <FaThumbsUp className='me-2 text-primary'/> <span>{likes} likes </span>
                    </Card.Text>
                        </Col>
                    </Row>
                    <Link className='text-decoration-none' to={`/chefs/${id}`} ><Button className='w-100 mt-3' variant="outline-warning">View Recipes</Button></Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;