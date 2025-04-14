// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO29MFtWwEM-uFUI8qRdUzXxRYc6_ChOY",
    authDomain: "dragon-news-project-8a427.firebaseapp.com",
    projectId: "dragon-news-project-8a427",
    storageBucket: "dragon-news-project-8a427.firebasestorage.app",
    messagingSenderId: "515312791895",
    appId: "1:515312791895:web:0d681d6975321d5f0f4e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;