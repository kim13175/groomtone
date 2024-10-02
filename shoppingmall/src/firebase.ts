import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "react-next-firebase-chat-app",
    storageBucket: "react-next-firebase-chat-app.appspot.com",
    messagingSenderId: "196291088065",
    appId: "1:196291088065:web:59b5e6725c74ce041b8e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;