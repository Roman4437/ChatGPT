import { getApp, getApps, initializeApp } from 'firebase/app'
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0ao6UVUQZUjt7IwmQu7AQ1_JS57dcjqo",
  authDomain: "chat-gpt-64083.firebaseapp.com",
  projectId: "chat-gpt-64083",
  storageBucket: "chat-gpt-64083.appspot.com",
  messagingSenderId: "1036544174958",
  appId: "1:1036544174958:web:160b058ba2791dcc20ef7f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }