import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Chef from '../Chef/Chef';
import './Chef.css'
const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://food-hub-server-4ugh75mru-shafiul-islam-nobels-projects.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <Container className='my-3'>
            <div className='text-center'>
            <h1 className='chef'>Our Chef</h1>
            <p>
            With a passion for crafting extraordinary dishes that tantalize the taste buds,they bring a wealth of experience and creativity to our kitchen. 
            </p>
            </div>
         
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </Carousel>
        </Container>

    );
};

export default Chefs;