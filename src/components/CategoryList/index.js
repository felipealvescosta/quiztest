import React, { useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CategoryList = ({ categories }) => {
    const categoryexists = useSelector((state) => state.category);
    const history = useHistory();

    useEffect(() => {
        console.log(categoryexists);
    }, [categoryexists]);

    function handleCategoryCheck(category) {
        if (categoryexists.length > 0) {
            let filtered = categoryexists.some((item) => {
                return item == category;
            });
            console.log('aqeui' + filtered);
            if (filtered === true) {
                console.log('existe' + filtered + ':' + category);
                history.push(`/score/${category}`);
            } else {
                console.log('n existe' + filtered + ':' + category);
                history.push(`/category/${category}`);
            }
        } else {
            console.log('adicionou');
            history.push(`/category/${category}`);
        }
    }

    return (
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
    );
};

export default memo(CategoryList);
