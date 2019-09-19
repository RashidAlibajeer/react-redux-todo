import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAm9OX9IzgkHu-MhduRPya5ROoK4VvtG50",
  authDomain: "todo-with-react-redux-41493.firebaseapp.com",
  databaseURL: "https://todo-with-react-redux-41493.firebaseio.com",
  projectId: "todo-with-react-redux-41493",
  storageBucket: "",
  messagingSenderId: "999199539165",
  appId: "1:999199539165:web:c77f6561416081c0ad8034"
};

export default firebase.initializeApp(firebaseConfig);