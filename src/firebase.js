import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBElOWZE-TsM8yvbuj3nsTG_CUWVuPsZKc",
  authDomain: "whatsapp-clone-c9d3a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c9d3a.firebaseio.com",
  projectId: "whatsapp-clone-c9d3a",
  storageBucket: "whatsapp-clone-c9d3a.appspot.com",
  messagingSenderId: "434625400194",
  appId: "1:434625400194:web:8c281d2eaf425be81e539b",
  measurementId: "G-GTS22J6R3X"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;