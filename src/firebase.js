import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAiE0GLsiNzdRimwJX6MmlbxxvyFqGw7kQ',
  authDomain: 'snapchat-clone-f0652.firebaseapp.com',
  projectId: 'snapchat-clone-f0652',
  storageBucket: 'snapchat-clone-f0652.appspot.com',
  messagingSenderId: '833624074273',
  appId: '1:833624074273:web:47f02c2db02d9674d45b60',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
