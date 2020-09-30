import React from 'react';
import firebase from '../../service/firebase';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
    const handleCreateSesssion = (category) => {
        const token = localStorage.getItem('@token/webtest');
        firebase
            .database()
            .ref('answers')
            .child(token)
            .child('category')
            .set(category);
    };

    return (
        <ul>
            {categories.map((category) => (
                <li
                    key={category.id}
                    onClick={() => handleCreateSesssion(category.id)}
                >
                    <Link to={`category/` + category.id}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;
