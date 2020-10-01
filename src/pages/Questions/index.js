import React, { useState, useEffect, memo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import firebase from '../../service/firebase';
import api from '../../service/api';

import Question from '../../components/Question';

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [nextQuestion, setNextQuestion] = useState(0);
    const [difficulty, setDifficulty] = useState('easy');
    const [difficultyCount, setDifficultyCount] = useState(1);
    const [score, setScore] = useState({
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
    function handleAnswer(answer) {
        let is_correct = true;
        setNextQuestion(nextQuestion + 1);

        console.log('DifficultyCount:' + difficultyCount);
        if (answer === questions[0].correct_answer) {
            setDifficultyCount(difficultyCount + 1);
            console.log('acertei' + difficultyCount);
            scoreCounter(is_correct);
            saveQuestion(answer, is_correct);
            if (difficultyCount === 2) {
                setDifficultyCount(1);
                changeDifficultyUp();
            }
        } else {
            setDifficultyCount(difficultyCount - 1);
            console.log('errei' + difficultyCount);
            is_correct = false;
            scoreCounter(is_correct);
            saveQuestion(answer, is_correct);
            if (difficultyCount === 0) {
                setDifficultyCount(1);
                changeDifficultyDown();
            }
        }

        if (nextQuestion === 0) {
            addCategory(category);
            history.push(`/score/${category}`);
        }
    }

    function scoreCounter(is_correct) {
        let countscore = score;
        if (is_correct === true) {
            countscore[difficulty].correct++;
            setScore(countscore);
            console.log(score);
        } else {
            countscore[difficulty].incorrect++;
            setScore(countscore);
            console.log(score);
        }
    }

    function saveQuestion(answer, is_correct) {
        let correct_answer = questions[0].correct_answer;

        console.log(
            'aqui',
            token,
            category,
            answer,
            difficulty,
            correct_answer,
            is_correct
        );
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
    }

    function changeDifficultyUp() {
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
    }

    function changeDifficultyDown() {
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
    }

    function addCategory(category) {
        dispatch({
            type: 'ADD_CATEGORY',
            category,
            score,
        });
    }

    return questions.length > 0 ? (
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
