import React, { Fragment } from 'react'
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

const [user] = useAuthState(auth);


function App() {
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign In With Google </button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>SignOut</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })



  return (
    <Fragment>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div>

      </div>
    </Fragment>
  )
}

function ChatMessage() {
  const { text, uid } = props.message;

  return <p>{text}</p>
}


export default App;
