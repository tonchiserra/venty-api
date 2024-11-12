import { config } from "../config/config.js"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: config.FIREBASE.API_KEY,
  authDomain: config.FIREBASE.AUTH_DOMAIN,
  projectId: config.FIREBASE.PROJECT_ID,
  storageBucket: config.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE.MESSAGING_SENDER_ID,
  appId: config.FIREBASE.APP_ID
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const gs = getStorage(app, `gs://${config.FIREBASE.STORAGE_BUCKET}`)

export { db, gs }