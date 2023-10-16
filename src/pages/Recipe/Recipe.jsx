import React from 'react';
import { Button, Card, Col, Row, Toast } from 'react-bootstrap';
import icon from '../../assets/chef-hat.png'
import { FaHeart } from 'react-icons/fa';
const Recipe = ({ recipe, category }) => {
    const { category_name, category_img, category_description, ingredient_1, ingredient_2, ingredient_3, ingredient_4, ingredient_5 } = recipe;
    const { chef_name } = category;

    const handleFavorite = () =>{
       alert('Added to the favorite')
    }
    return (
        <div>
            <Col>
                <Card className='shadow-none'>
                    <div className="position-relative">
                        {/* Floating Rating Button */}
                        <Button onClick={handleFavorite} className="rating-button position-absolute" variant="none">
                            <FaHeart className='text-danger fs-4'/>
                        </Button>
                        <Card.Img variant="top" src={category_img} />
                    </div>
                    <Card.Body>
                        <Card.Title className='name fw-bold'>{category_name}</Card.Title>
                        <Card.Text>
                            {category_description}
                        </Card.Text>
                        <Card.Text>
                            <p className='fw-bold'>Ingredients: </p>
                            <Row xs={1} ms={1}>
                                <Col className='mb-3'> <Button variant="outline-success">{ingredient_1}</Button></Col>
                                <Col className='mb-3'> <Button variant="outline-success">{ingredient_2}</Button></Col>
                                <Col className='mb-3'> <Button variant="outline-success">{ingredient_3}</Button></Col>
                                <Col className='mb-3'> <Button variant="outline-success">{ingredient_4}</Button></Col>
                                <Col> <Button variant="outline-success">{ingredient_5}</Button></Col>
                            </Row>
                        </Card.Text>
                        <Card.Text>
                            <img style={{ width: '2rem' }} className='img-fluid' src={icon} alt="" />
                            <span className='ms-2'>{chef_name}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;