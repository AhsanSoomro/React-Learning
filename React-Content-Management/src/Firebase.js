import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyClWS_OaKjFPR1dsiOXBajD3u4JEfkNc_w",
    authDomain: "react-crud-f8bd6.firebaseapp.com",
    databaseURL: "https://react-crud-f8bd6-default-rtdb.firebaseio.com",
    projectId: "react-crud-f8bd6",
    storageBucket: "react-crud-f8bd6.appspot.com",
    messagingSenderId: "44941420410",
    appId: "1:44941420410:web:cda997425c355f569a98c3"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();