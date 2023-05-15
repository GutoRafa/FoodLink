import { initializeApp } from "firebase/app";
import { getAuth , updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL } from "firebase/storage";

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

export async function upload(file, nomeUsuario) {
  const arquivoRef = ref(storage, 'fotoPerfil/' + `${nomeUsuario}` + '.png');
  
  const snapshot = await uploadBytes(arquivoRef, file);
  const photoURL = await getDownloadURL(arquivoRef);

  updateProfile(currentUser, {photoURL});
}