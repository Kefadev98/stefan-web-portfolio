import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByt1BJeuWufY47Qjh38O97gXVqwg841UQ",
  authDomain: "my-project-230d8.firebaseapp.com",
  projectId: "my-project-230d8",
  storageBucket: "my-project-230d8.appspot.com",
  messagingSenderId: "639772726384",
  appId: "1:639772726384:web:89da3880a24c199eb990b5",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
