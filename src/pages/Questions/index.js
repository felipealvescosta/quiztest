import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { Link, useParams } from 'react-router-dom';

import api from '../../service/api';

import Question from '../../components/Question';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const [score, setScore] = useState(0);
    const { category } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('api.php', {
            params: {
                amount: 10,
                category: category,
                type: 'multiple',
            },
        })
            .then((response) => {
                setQuestions(response.data.results);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }, []);

    const handleAnswer = (answer) => {
        const difficult = questions[currentIndex].difficulty;
        const questionIndex = currentIndex + 1;
        setCurrentIndex(questionIndex);

        console.log(questionIndex);
        console.log(difficult);

        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 1);
            console.log('yessss');
            dispatch({
                type: 'NEW_SCORE',
                score: difficult,
            });
        }

        if (questionIndex >= questions.length) {
            setQuizEnded(true);
        }
    };

    return quizEnded ? (
        <div>
            <h1>Game Finally</h1>
            <Link to="/"> Home</Link>
        </div>
    ) : questions.length > 0 ? (
        <div className="container">
            <Question
                data={questions[currentIndex]}
                handleAnswer={handleAnswer}
            />
        </div>
    ) : (
        <div className="loading">
            <h1>Loading ...</h1>
        </div>
    );
};
export default memo(Questions);
