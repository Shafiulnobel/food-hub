import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Category = ({category}) => {
    const{id,category_name,img}=category;
    return (
        <div>
            <Col>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className='name'>{category_name}</Card.Title>
            </Card.Body>
          </Card>
            </Col>
        </div>
    );
};

export default Category;