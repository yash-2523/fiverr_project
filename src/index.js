import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/AuthContext';
import LoaderContextProvider from './Context/LoaderContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from './firebase'

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
});

ReactDOM.render(
  <React.StrictMode>
      <AuthContextProvider>
        <LoaderContextProvider> 
          <App />
        </LoaderContextProvider>
      </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
