import React, { memo } from 'react';

import './styles.css';
import easy from '../../assets/images/easy.png';
import medium from '../../assets/images/medium.png';
import hard from '../../assets/images/hard.png';

const Question = ({
    handleAnswer,
    data: {
        question,
        correct_answer,
        incorrect_answers,
        difficulty,
        category,
    },
}) => {
    const shuffledAnswers = [correct_answer,...incorrect_answers,].sort(() => Math.random() - 0.5);

    console.log(correct_answer);
    return (
        <>
            <div className="answer">
                <p
                    id="category"
                    dangerouslySetInnerHTML={{ __html: category }}
                />
                <h3 dangerouslySetInnerHTML={{ __html: question }} />
                <div className="image-score">
                    {difficulty === 'easy' ? (
                        <img src={easy} alt={difficulty} />
                    ) : difficulty === 'medium' ? (
                        <img src={medium} alt={difficulty} />
                    ) : (
                        <img src={hard} alt={difficulty} />
                    )}
                </div>
            </div>
            <div className="buttons">
                {shuffledAnswers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{
                            __html: answer,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default memo(Question);
