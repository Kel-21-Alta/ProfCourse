import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUbR8SrZOgYcRynMtoIz9q2-ILnRqMhok",
  authDomain: "investa-image-upload.firebaseapp.com",
  projectId: "investa-image-upload",
  storageBucket: "investa-image-upload.appspot.com",
  messagingSenderId: "931773142321",
  appId: "1:931773142321:web:a58cbe6999975a2583cc10",
  measurementId: "G-EZGL5HTGXH",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
