import React, { useState, useEffect, memo, useCallback } from 'react'
import {Link, useParams} from 'react-router-dom'

import api from '../../service/api'

import Question from '../../components/Question'

const  Questions = () => {

  const [ questions , setQuestions ] = useState([]);
  const [ currentIndex, setCurrentIndex] = useState(0);
  const [ quizEnded, setQuizEnded] = useState(false);
  const { category }  = useParams(); 
 
  useEffect( () => {
       api.get('/api.php',{
         params:{
           amount:10,
           category:category,
           type:'multiple'
         }
       })
       .then( (response) => {
         setQuestions(response.data.results)
       })
       .catch( (error) => {
        // handle error
        console.log(error);
      })
  } , [] );

 
  const handleAnswer =  (answer) => {
    const questionIndex = currentIndex + 1;
    setCurrentIndex(questionIndex)

    console.log(questionIndex)

    if(answer === questions[currentIndex].correct_answer){
      console.log('yessss');
    }

    if(questionIndex >= questions.length){
      setQuizEnded(true);
    }
  };


  return quizEnded ? (
    <div>
        <h1>Game Finally</h1>
        <Link to="/"> Home</Link>
    </div>
    

   ) : questions.length >  0 ? (
        <div className="container">
              <Question 
                data={questions[currentIndex]} 
                handleAnswer={handleAnswer}
              />
        </div>
        ):
        (
          <div className="loading">
            <h1>Loading ...</h1>
          </div>
        )
}
export default memo(Questions);