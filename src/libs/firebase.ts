import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

//conectando ao firebase
const firebaseApp = initializeApp(firebaseConfig);

//conectando ao storage do firebase
export const storage = getStorage(firebaseApp);
