import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtsn6IAzP6v_wGjE-lIOzYE7sGD-Ub42Q",
  authDomain: "veganise-44c11.firebaseapp.com",
  databaseURL:
    "https://veganise-44c11-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "veganise-44c11",
  storageBucket: "veganise-44c11.appspot.com",
  messagingSenderId: "199743646012",
  appId: "1:199743646012:web:50378010c98bcf0d1fd639",
  measurementId: "G-JMQ1BDFZ72",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, analytics, db, app };
