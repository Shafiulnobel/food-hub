import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='bg-news d-flex align-items-center'>
            <Container className='text-white'>
                <h2 className='fw-bold'>Subscribe to our Newsletter</h2>
                <p>Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum.</p>
                    <Button variant='success'>Subscribe</Button>
            </Container>
        </div>
    );
};

export default Newsletter;