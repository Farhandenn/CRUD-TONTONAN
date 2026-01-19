// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js"
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"

 // Firebase
 const firebaseConfig = {
  apiKey: "AIzaSyDf84tuPbEIrQ4b2jcU0MeXjg4OY3kE-yU",
  authDomain: "insancemerlang-7c3fb.firebaseapp.com",
  projectId: "insancemerlang-7c3fb",
  storageBucket: "insancemerlang-7c3fb.firebasestorage.app",
  messagingSenderId: "775357332019",
  appId: "1:775357332019:web:25b794ac39eceb84f00146",
  measurementId: "G-2T6Q5VM932"
}

