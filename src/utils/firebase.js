import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9I8hjW7oktMCYYEpLYvmD8yuGU9wN5-I",
  authDomain: "clothesecomers.firebaseapp.com",
  projectId: "clothesecomers",
  storageBucket: "clothesecomers.appspot.com",
  messagingSenderId: "705363103760",
  appId: "1:705363103760:web:7e3a37ff5aef2a8b61ba95",
}

//Initialize App
const firebase = initializeApp(firebaseConfig)
console.log(firebase)

//Initialize Auth
const googleProvider = new GoogleAuthProvider()
googleProvider.getCustomParameters({
  params: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

//Initialize DB
export const db = getFirestore()

export const createUserDocumentForAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const onSnapshot = await getDoc(userDocRef)
  console.log(onSnapshot)
  console.log(onSnapshot.exists())

  if (!onSnapshot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
