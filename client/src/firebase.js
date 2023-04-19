import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCjnuu1JVa6u1-N1vX9plplAIvG5C6_mH4",
	authDomain: "fullstack-fdb75.firebaseapp.com",
	projectId: "fullstack-fdb75",
	storageBucket: "fullstack-fdb75.appspot.com",
	messagingSenderId: "91421338380",
	appId: "1:91421338380:web:1807605a5fe7858cf6f729",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
