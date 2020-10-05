import React, { useEffect, useState, memo } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    }, [scores]);

    useEffect(() => {
        function loadScore(id) {
            let score = scores.find((item) => {
                console.log('aquiiiisdd' + item.id);
                return item.id === id;
            });
            setScoreBoard(score);
        }
        loadScore(id);
    }, [id]);

    console.log(scoreBoard);
    return (
        <>
            <h1>Quiz Finished</h1>
            <div>
                <h3>Score</h3>
                <div>
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
            <Link to="/">New Quiz</Link>
        </>
    );
}

export default memo(Score);
