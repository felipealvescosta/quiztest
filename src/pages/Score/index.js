import React, { useEffect, useMemo, memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Score() {
    const scores = useSelector((state) => state.category);
    //const { id } = useParams();
    const id = 20;
    console.log(scores);

    useEffect(() => {
        
    }, []);

    return (
        <>
            <h1>Quiz Finished</h1>
            <div>
                <h3>Score</h3>
                <div>
                    <h4>Questions Level:</h4>
                    <div>
                        <b>Easy</b>
                    </div>
                </div>
            </div>
            <Link to="/">New Quiz</Link>
        </>
    );
}

export default Score;
