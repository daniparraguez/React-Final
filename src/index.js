import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDARc-e3dftTkPvyZ1xkyYHO8Pf7PDFWao",
  authDomain: "react-final-e87ba.firebaseapp.com",
  databaseURL: "https://react-final-e87ba.firebaseio.com",
  projectId: "react-final-e87ba",
  storageBucket: "react-final-e87ba.appspot.com",
  messagingSenderId: "73953776547"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
