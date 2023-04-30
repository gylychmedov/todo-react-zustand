import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZDkXf9mui1vN1cHywELRkRWzdQZwNf_A",
  authDomain: "todo-react-zustand.firebaseapp.com",
  projectId: "todo-react-zustand",
  storageBucket: "todo-react-zustand.appspot.com",
  messagingSenderId: "793862135240",
  appId: "1:793862135240:web:723f319d0199457b3234fd",
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);
