import firebase from 'firebase';

let firebaseConfig = {
    apiKey: 'AIzaSyDRR2TNj8NxGcQ6BjJWjGOnHVZxF2kGb64',
    authDomain: 'quiz-sas.firebaseapp.com',
    databaseURL: 'https://quiz-sas.firebaseio.com',
    projectId: 'quiz-sas',
    storageBucket: 'quiz-sas.appspot.com',
    messagingSenderId: '624254837221',
    appId: '1:624254837221:web:d0a321e07f2184d8778f0c',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
