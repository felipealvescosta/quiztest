import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import randtoken from 'rand-token';

import api from '../../service/api';

import CategoryList from '../../components/CategoryList';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log('Totken:' + token);
        api.get('api_category.php').then((response) => {
            console.log(response.data.trivia_categories);
            setCategories(response.data.trivia_categories);
        });
    }, []);

    return (
        <>
            <h1>Categories</h1>
            <CategoryList categories={categories} />
        </>
    );
};

export default memo(Categories);
