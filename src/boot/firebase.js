import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
// import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import * as firebaseui from 'firebaseui'
// import { getAnalytics } from 'firebase/analytics'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
// import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAkhQw-CxpPc3Hlk37QbQ0EfuO8p4_SNHA',
  authDomain: 'sixem-noctua.firebaseapp.com',
  projectId: 'sixem-noctua',
  storageBucket: 'sixem-noctua.appspot.com',
  messagingSenderId: '319095974101',
  appId: '1:319095974101:web:a37d9c10c94311ca949a5c',
  measurementId: 'G-MV474ZKNVW'
}
firebase.initializeApp(firebaseConfig)

export const ui = new firebaseui.auth.AuthUI(firebase.auth())

export const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

//! Persistência fica recarregando a página...
// setPersistence(auth, inMemoryPersistence)
//   .then(() => {
//     const provider = new GoogleAuthProvider()
//     // In memory persistence will be applied to the signed in Google user
//     // even though the persistence was set to 'none' and a page redirect
//     // occurred.
//     return signInWithRedirect(auth, provider)
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code
//     console.log(errorCode)
//     const errorMessage = error.message
//     console.log(errorMessage)
//   })

export const db = getFirestore(firebaseApp)

// const analytics = getAnalytics(app)

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
  // Multiple tabs open, persistence can only be enabled in one tab at a a time.
  } else if (err.code === 'unimplemented') {
  // The current browser does not support all of the features required to enable persistence
  }
}) // Subsequent queries will use persistence, if it was enabled successfully
