import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randtoken from 'rand-token';

import api from '../../service/api';

import CategoryList from '../../components/CategoryList';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const categoriesDone = useSelector((state) => state.category);

    useEffect(() => {
        api.get('api_category.php').then((response) => {
            setCategories(response.data.trivia_categories);
        });
    }, [categoriesDone]);

    useEffect(() => {
        checkToken();
    }, []);

    function checkToken() {
        let token = localStorage.getItem('@token/webtest');
        if (token) {
            dispatch({
                type: 'READ_TOKEN',
                token,
            });
            return token;
        } else {
            createToken();
            return token;
        }
    }

    function createToken() {
        let token = randtoken.generate(16);
        if (token) {
            localStorage.setItem('@token/webtest', token);
            dispatch({
                type: 'CREATE_TOKEN',
                token,
            });
        }

        return token;
    }

    return (
        <>
            <h1>Categories</h1>
            <CategoryList categories={categories} />
        </>
    );
};

export default memo(Categories);
