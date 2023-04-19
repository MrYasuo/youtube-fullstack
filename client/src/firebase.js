import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDj8p88ADAjfDwQctwvbcYF0MpY7Xtc3d8",
	authDomain: "fullstack-384218.firebaseapp.com",
	projectId: "youtube-fullstack-384218",
	storageBucket: "youtube-fullstack-384218.appspot.com",
	messagingSenderId: "630429392288",
	appId: "1:630429392288:web:e3d76d869de51b4f00d8c5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
