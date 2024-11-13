import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwonO1sTOq6bXTo-edMJI8IHVcR1O-nxM",
  authDomain: "gbm-landing-page.firebaseapp.com",
  projectId: "gbm-landing-page",
  storageBucket: "gbm-landing-page.firebasestorage.app",
  messagingSenderId: "505585069171",
  appId: "1:505585069171:web:f3e5ce60638d18c11c4e06"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);