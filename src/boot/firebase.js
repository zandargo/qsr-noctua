import { initializeApp } from 'firebase/app'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
// import { enableIndexedDbPersistence } from 'firebase/firestore'
// import { initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'
// import {} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkhQw-CxpPc3Hlk37QbQ0EfuO8p4_SNHA',
  authDomain: 'sixem-noctua.firebaseapp.com',
  projectId: 'sixem-noctua',
  storageBucket: 'sixem-noctua.appspot.com',
  messagingSenderId: '319095974101',
  appId: '1:319095974101:web:a37d9c10c94311ca949a5c',
  measurementId: 'G-MV474ZKNVW'
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
  // Multiple tabs open, persistence can only be enabled in one tab at a a time.
  } else if (err.code === 'unimplemented') {
  // The current browser does not support all of the features required to enable persistence
  }
}) // Subsequent queries will use persistence, if it was enabled successfully

export default db
