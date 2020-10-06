import React, { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import randtoken from 'rand-token';

import api from '../../service/api';

import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header/index';

import './styles.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const categoriesDone = useSelector((state) => state.category);

    useEffect(() => {
        api.get('api_category.php').then((response) => {
            setCategories(response.data.trivia_categories);
        });
    }, [categoriesDone]);

    useEffect(() => {
        checkToken();
        // eslint-disable-next-line
    }, []);

    function checkToken() {
        let token = localStorage.getItem('@token/webtest');
        if (token) {
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
            return token;
        }
    }

    return (
        <>
            <div className="container">
                <Header />
                <CategoryList categories={categories} />
            </div>
        </>
    );
};

export default memo(Categories);
