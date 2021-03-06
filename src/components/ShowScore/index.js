import React, { useEffect, useState, memo } from 'react';
import firebase from '../../service/firebase';

function ShowScore({ category }) {
    const [token, setToken] = useState();
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        function loadToken() {
            setToken(localStorage.getItem('@token/webtest'));
        }
        loadToken();

        firebase
            .database()
            .ref('answers')
            .on('value', (snapshot) => {
                if (snapshot.val() != null)
                    setAnswers({
                        ...snapshot.val(),
                    });
            });
    }, []);
    console.log('aqio' + answers?.token?.category);
    return (
        <div>
            <h3>Feedback</h3>

            <table>
                <thead>
                    <th>id</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                    <th>Difficulty</th>
                    <th>Is Correct</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {Object.keys(answers).map((answer) => {
                        return (
                            <tr>
                                <td>{answer?.token}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default memo(ShowScore);
