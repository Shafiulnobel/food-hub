import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';
import Chefs from '../Chefs/Chefs';
import Blog from '../../Blog/Blog';
import useTitle from '../../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Newsletter></Newsletter>
            <Chefs></Chefs>
            <Blog></Blog>
        </div>
    );
};

export default Home;