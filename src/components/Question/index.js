import React, { memo } from 'react';


const Question = ({
    handleAnswer, 
    data: {question, correct_answer, incorrect_answers
    },
    }) => {

        const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5);

        return (
            <>
                <div className="answer">
                    <h3 dangerouslySetInnerHTML={{ __html: question }}/>
                </div>
                <div className="buttons">
                    {shuffledAnswers.map(  (answer,index) =>(
                      <button 
                      key={index}
                      className={correct_answer === answer? 'bg-color-1': 'bg-color-2'}
                      onClick={()=> handleAnswer(answer)} 
                      > 
                        {answer} 
                      </button>
                    ))}
                  
                </div>
            </>
     ); 
}

export default memo(Question);