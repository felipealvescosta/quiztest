import React, { useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import randtoken from 'rand-token';

import api from '../../service/api';

import CategoryList from '../../components/CategoryList';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get('api_category.php').then((response) => {
            setCategories(response.data.trivia_categories);
        });
    }, []);

    useEffect(() => {
        const checkToken = () => {
            let token = localStorage.getItem('@token/webtest');
            if (token) {
                return token;
            } else {
                token = randtoken.generate(16);
                localStorage.setItem('@token/webtest', token);
                return token;
            }
        };
        checkToken();
    }, []);

    return (
        <>
            <h1>Categories</h1>
            <CategoryList categories={categories} />
        </>
    );
};

export default memo(Categories);
