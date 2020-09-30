import React, { useState, useEffect, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from '../../service/firebase';
import api from '../../service/api';

import Question from '../../components/Question';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [nextQuestion, setNextQuestion] = useState(0);
    const [difficulty, setDifficulty] = useState('easy');
    const [difficultyCount, setDifficultyCount] = useState(1);
    const [quizEnded, setQuizEnded] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        api.get('api.php', {
            params: {
                amount: 1,
                category,
                difficulty: difficulty,
                type: 'multiple',
            },
        })
            .then((response) => {
                setQuestions(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [nextQuestion, difficulty, category]);

    const handleAnswer = (answer) => {
        setNextQuestion(nextQuestion + 1);

        console.log('DifficultyCount:' + difficultyCount);
        if (answer === questions[0].correct_answer) {
            setDifficultyCount(difficultyCount + 1);
            console.log('acertei' + difficultyCount);
            if (difficultyCount === 2) {
                setDifficultyCount(1);
                changeDifficultyUp();
            }
        } else {
            setDifficultyCount(difficultyCount - 1);
            console.log('errei' + difficultyCount);
            if (difficultyCount === 0) {
                setDifficultyCount(1);
                changeDifficultyDown();
            }
        }

        if (nextQuestion === 9) {
            setQuizEnded(true);
        }
    };

    const changeDifficultyUp = () => {
        console.log('subiu');
        switch (difficulty) {
            case 'easy':
                setDifficulty('medium');
                break;
            case 'medium':
                setDifficulty('hard');
                break;
            default:
                setDifficulty(difficulty);
                break;
        }
    };

    const changeDifficultyDown = () => {
        console.log('mudoy pra baixo');
        switch (difficulty) {
            case 'hard':
                setDifficulty('medium');
                break;
            case 'medium':
                setDifficulty('easy');
                break;
            default:
                setDifficulty(difficulty);
                break;
        }
    };

    return quizEnded ? (
        <div>
            <h1>Quiz Finally</h1>
            <Link to="/"> Home</Link>
        </div>
    ) : questions.length > 0 ? (
        <div className="container">
            <Question
                data={questions[0]}
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
