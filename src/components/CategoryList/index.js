import React, { useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';

const CategoryList = ({ categories }) => {
    const categoryExists = useSelector((state) => state.category);
    const history = useHistory();

    useEffect(() => {}, [categoryExists]);

    function handleCategoryCheck(category) {
        if (categoryExists.length > 0) {
            let filtered = categoryExists.some((item) => {
                return item.id === category;
            });
            if (filtered === true) {
                history.push(`/score/${category}`);
            } else {
                history.push(`/category/${category}`);
            }
        } else {
            console.log('adicionou');
            history.push(`/category/${category}`);
        }
    }

    return (
        <div className="categories">
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => {
                            handleCategoryCheck(category.id);
                        }}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default memo(CategoryList);
