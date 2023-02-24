import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj-EtZcgvT5cWTpSudnVErRdIAECRfkXA",
    authDomain: "portfolio-eden.firebaseapp.com",
    projectId: "portfolio-eden",
    storageBucket: "portfolio-eden.appspot.com",
    messagingSenderId: "342922951138",
    appId: "1:342922951138:web:380d8433a75a91dbfc21bb"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)

app.mount('#app')
