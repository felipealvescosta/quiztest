import React, { useState, useEffect, memo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import firebase from '../../service/firebase';
import api from '../../service/api';

import Question from '../../components/Question';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

import Loading from '../../assets/images/loading.gif';

import './styles.css';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [nextQuestion, setNextQuestion] = useState(0);
    const [difficulty, setDifficulty] = useState('medium');
    const [difficultyCount, setDifficultyCount] = useState(1);
    const [modal, setModal] = useState({
        open: false,
        isCorrect: null,
    });
    const [score, setScore] = useState({
        points: {
            correct: 0,
            incorrect: 0,
        },
        easy: {
            correct: 0,
            incorrect: 0,
        },
        medium: {
            correct: 0,
            incorrect: 0,
        },
        hard: {
            correct: 0,
            incorrect: 0,
        },
    });
    const { category } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('@token/webtest');

    useEffect(() => {
        if (category <= 0 || category == null) {
            history.push('/');
        } else {
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
                    history.push('/');
                });
        }
        // eslint-disable-next-line
    }, [nextQuestion]);

    const handleAnswer = (answer) => {
        let isCorrect = true;

        if (answer === questions[0]?.correct_answer) {
            setDifficultyCount(difficultyCount + 1);
            saveQuestion(answer, isCorrect);
            if (difficultyCount === 2) {
                setDifficultyCount(1);
                changeDifficultyUp();
            }
        } else {
            setDifficultyCount(difficultyCount - 1);
            isCorrect = false;
            saveQuestion(answer, isCorrect);
            if (difficultyCount === 0) {
                setDifficultyCount(1);
                changeDifficultyDown();
            }
        }
        scoreCounter(isCorrect);

        setModal({ open: true, isCorrect });
    };

    const nextAnswer = () => {
        setNextQuestion((oldState) => oldState + 1);
    };

    const scoreCounter = (is_correct) => {
        let countscore = score;
        if (is_correct === true) {
            countscore[difficulty].correct++;
            countscore.points.correct++;
            setScore(countscore);
        } else {
            countscore[difficulty].incorrect++;
            countscore.points.incorrect++;
            setScore(countscore);
        }
    };

    const saveQuestion = (answer, is_correct) => {
        let correct_answer = questions[0].correct_answer;
        firebase
            .database()
            .ref('answers')
            .child(token)
            .child(category)
            .child(nextQuestion)
            .set({
                answer,
                correct_answer,
                is_correct,
                difficulty,
                date: format(new Date(), 'dd/MM/yyyy H:m:s'),
            });
    };

    const changeDifficultyUp = () => {
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

    const handleCloseModal = () => {
        setModal({
            open: false,
        });

        if (nextQuestion === 9) {
            addCategory(category);
            history.push(`/score/${category}`);
        } else {
            nextAnswer();
        }
    };

    const addCategory = (category) => {
        dispatch({
            type: 'ADD_CATEGORY',
            category: { id: category, score },
        });
    };

    return questions.length > 0 ? (
        <div className="container">
            <Header />
            <h1 id="questions">Question {nextQuestion + 1} of 10</h1>
            <Question
                data={questions[0]}
                handleAnswer={handleAnswer}
            />

            <Modal
                open={modal.open}
                isCorrect={modal.isCorrect}
                onClose={handleCloseModal}
            />
        </div>
    ) : (
        <div className="loading">
            <img src={Loading} alt="Loading" />
            <h2>loading ...</h2>
        </div>
    );
};
export default memo(Questions);
