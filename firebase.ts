import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
    apiKey: "AIzaSyDOxVYS9wbvd5u_ewK9HDUNQtNqcRiS6vI",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  //this prevents us from having duplicates
  const auth = getAuth(app)
  const db = getFirestore(app)
  const functions = getFunctions(app)
//   const analytics = getAnalytics(app);

export {db, auth, functions}