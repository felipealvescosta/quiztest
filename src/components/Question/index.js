import React, { memo } from 'react';

const Question = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers, difficulty },
}) => {
    const shuffledAnswers = [
        correct_answer,
        ...incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    console.log(correct_answer);
    return (
        <>
            <div className="answer">
                <h3 dangerouslySetInnerHTML={{ __html: question }} />
                <small>{difficulty}</small>
            </div>
            <div className="buttons">
                {shuffledAnswers.map((answer, index) => (
                    <button
                        key={index}
                        className={
                            correct_answer === answer
                                ? 'bg-color-1'
                                : 'bg-color-2'
                        }
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
