import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Blog.css'
import useTitle from '../../hook/useTitle';
const Blog = () => {
    const[blogs,setBlogs] = useState([]);
    useTitle('Blog')
    useEffect(()=>{
        fetch('https://food-hub-server-4ugh75mru-shafiul-islam-nobels-projects.vercel.app/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <Container className='my-5'>
            <h2 className='text-center blog mb-3'>Our Blogs</h2>
            <Row xs={1} md={2} className="g-4">
                {blogs.map((blog) => (
                    <Col key={blog.id}>
                        <Card>
                            <Card.Img variant="top" src={blog.img} />
                            <Card.Body>
                            <Card.Text className='txt'>{blog.short}</Card.Text>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blog;