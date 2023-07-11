import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9I8hjW7oktMCYYEpLYvmD8yuGU9wN5-I",
  authDomain: "clothesecomers.firebaseapp.com",
  projectId: "clothesecomers",
  storageBucket: "clothesecomers.appspot.com",
  messagingSenderId: "705363103760",
  appId: "1:705363103760:web:7e3a37ff5aef2a8b61ba95",
}

const firebaseApp = initializeApp(firebaseConfig)

//Auth
const provider = new GoogleAuthProvider()

provider.getCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

//DataBase User
export const db = getFirestore()

export const createUserDocumentForAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}
