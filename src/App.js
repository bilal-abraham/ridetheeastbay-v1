import React from 'react'
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCgoVgK86WaxAOdxsz2-bTFelaPm8BQUGc",
  authDomain: "superchat-abe1c.firebaseapp.com",
  projectId: "superchat-abe1c",
  storageBucket: "superchat-abe1c.appspot.com",
  messagingSenderId: "158005517033",
  appId: "1:158005517033:web:bd76294a3f38c105f86e78",
  measurementId: "G-WH1CQHQVRS"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
