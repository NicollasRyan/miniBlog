import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSRP6gAu5f2HUN0o5pILyNPTwA5nzgcjg",
  authDomain: "min-blog-f8de0.firebaseapp.com",
  projectId: "min-blog-f8de0",
  storageBucket: "min-blog-f8de0.appspot.com",
  messagingSenderId: "507140181227",
  appId: "1:507140181227:web:21ba18c255be1f359902ae",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
