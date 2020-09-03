import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCrCCv97UIpUWt2zxIjn-468Z9WYAyx1lQ",
  authDomain: "blog-42e10.firebaseapp.com",
  databaseURL: "https://blog-42e10.firebaseio.com",
  projectId: "blog-42e10",
  storageBucket: "blog-42e10.appspot.com",
  messagingSenderId: "12614062318",
  appId: "1:12614062318:web:9f65c043559e9c459823ff",
  measurementId: "G-0G41YDQSBB",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
