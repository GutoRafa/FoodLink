import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8JUTQQslyjud89ZhPq0rmMPT_ZDeINqc",
  authDomain: "foodlink-dev.firebaseapp.com",
  projectId: "foodlink-dev",
  storageBucket: "foodlink-dev.appspot.com",
  messagingSenderId: "718159437094",
  appId: "1:718159437094:web:11729f676e44947cc9f5e7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Storage functions

export async function uploadFotoPerfil(file,currentUser) {
  const fileRef = ref(storage/fotosPerfil, )
}