import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore, setDoc , serverTimestamp , doc , addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL, uploadString } from "firebase/storage";
import { v4 } from "uuid";

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

// Storage

export async function uploadStorage(file, local) {
  const arquivoRef = ref(storage,`${local + "/" + v4()}` + '.png');
  
  const snapshot = await uploadString(arquivoRef, file, "data_url");
  const postURL = await getDownloadURL(arquivoRef);
  return postURL;
}

// Firestore

export async function criarDocPost(descricaoTexto, precoTexto, imgUrl, nomeDisplayTexto, uidTexto) {
  const docData = {
    descricao: descricaoTexto,
    preco: precoTexto,
    imagem: imgUrl,
    horario: serverTimestamp(),
    nomeDisplay: nomeDisplayTexto,
    uid: uidTexto,
  }
  const docRef = await setDoc(doc(db, "posts/" + `${v4()}`), docData);
}
