import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import banner from '../../assets/banner.png'
const Recipes = () => {
    const chefs = useLoaderData();
    const chef = [];
    chef.push(chefs);
    console.log(typeof chefs)
    return (
        <div>
        
        <div>
            <img style={{width:'100vw'}} className='' src={banner} alt="" />
        </div>
        <Container className='my-5'>
                
                {
                    chef.map(category => <div
                        category={category}
                    >
                        <h2 className='text-center fw-bold mb-4'>Mr. {category.chef_name}'s Recipe</h2>
                        <Row xs={1} md={3} className="g-4">
                            {
                                category.food_categories.map(recipe => <Recipe
                                    recipe={recipe}
                                    category={category}
                                ></Recipe>)
                            }
                        </Row>
                    </div>)
                }
            
        </Container>
        </div>
    );
};

export default Recipes;