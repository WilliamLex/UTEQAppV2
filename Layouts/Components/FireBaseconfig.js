import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJO-nU6stWQkdzk_u1IfQQw3qX5dJ1ATk",
    authDomain: "react-native-login-a10ab.firebaseapp.com",
    projectId: "react-native-login-a10ab",
    storageBucket: "react-native-login-a10ab.appspot.com",
    messagingSenderId: "956181354392",
    appId: "1:956181354392:web:a9a4e9c968aa4daa9a7ded"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;