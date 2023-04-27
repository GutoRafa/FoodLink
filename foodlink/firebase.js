import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8JUTQQslyjud89ZhPq0rmMPT_ZDeINqc",
    authDomain: "foodlink-dev.firebaseapp.com",
    projectId: "foodlink-dev",
    storageBucket: "foodlink-dev.appspot.com",
    messagingSenderId: "718159437094",
    appId: "1:718159437094:web:11729f676e44947cc9f5e7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)