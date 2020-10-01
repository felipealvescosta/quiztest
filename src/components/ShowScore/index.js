import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../service/firebase';

function ShowScore() {
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

    return (
        <div>
            <h1>Quiz Finally</h1>

            <Link to="/"> Home</Link>
        </div>
    );
}

export default memo(ShowScore);
