import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Categories.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://food-hub-server-4ugh75mru-shafiul-islam-nobels-projects.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <Container className='text-center my-5'>
            <h1 className='category'>Recipes By Category</h1>
            <p>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                  categories.map(category=><Category
                  key={category.id}
                  category={category}
                  ></Category>)
                }

            </Row>
        </Container>
    );
};

export default Categories;