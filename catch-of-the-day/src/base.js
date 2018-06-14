import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9Df44OA1P03nHk7KeB-yo6sDDihaLW0k",
    authDomain: "catch-of-the-day-sandyclause.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sandyclause.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;