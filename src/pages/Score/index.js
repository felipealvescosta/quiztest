import React, { useEffect, useState, memo } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Feedback from '../../components/ShowScore';

import './styles.css';

function Score() {
    const scores = useSelector((state) => state.category);
    const [scoreBoard, setScoreBoard] = useState([]);
    const history = useHistory();
    const { id } = useParams();
    console.log(scores, id);

    useEffect(() => {
        if (scores.length === 0) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [scores]);

    useEffect(() => {
        function loadScore(id) {
            let score = scores.find((item) => {
                return item.id === id;
            });
            setScoreBoard(score);
        }
        loadScore(id);
        // eslint-disable-next-line
    }, [id]);

    console.log(scoreBoard);
    return (
        <div className="container">
            <Header />
            <h1>Quiz Finished</h1>
            <div>
                <h3>Score</h3>
                <div>
                    <b>
                        Corrects: {scoreBoard?.score?.points?.correct}
                    </b>
                </div>
                <div>
                    <b>
                        Inorrects:
                        {scoreBoard?.score?.points?.incorrect}
                    </b>
                </div>

                <div className="score">
                    <h4>Questions Level:</h4>
                    <div>
                        <b>Easy</b>
                        <ul>
                            <li>
                                Correct:
                                {scoreBoard?.score?.easy?.correct}
                            </li>
                            <li>
                                Incorrect:
                                {scoreBoard?.score?.easy?.incorrect}
                            </li>
                        </ul>
                        <b>Medium</b>
                        <ul>
                            <li>
                                Correct:
                                {scoreBoard?.score?.medium?.correct}
                            </li>
                            <li>
                                Incorrect:
                                {scoreBoard?.score?.medium?.incorrect}
                            </li>
                        </ul>
                        <b>Hard</b>
                        <ul>
                            <li>
                                Correct:
                                {scoreBoard?.score?.hard?.correct}
                            </li>
                            <li>
                                Incorrect:
                                {scoreBoard?.score?.hard?.incorrect}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Feedback category={id} />
            <Link to="/" className="button">
                New Quiz
            </Link>
        </div>
    );
}

export default memo(Score);
