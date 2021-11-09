import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCyRRuBNBCJ_-yUJdhjbCgMW49mpAEQ-D4",
  authDomain: "project-4f863.firebaseapp.com",
  projectId: "project-4f863",
  storageBucket: "project-4f863.appspot.com",
  messagingSenderId: "436831184922",
  appId: "1:436831184922:web:02e30da4704ceb71eac9a3"
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export default app