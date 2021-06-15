import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCIst25tcyLE4e6GV_kSVS65c-yV_sRDDY',
    authDomain: 'myportfolio-26c1c.firebaseapp.com',
    databaseURL: 'https://myportfolio-26c1c-default-rtdb.firebaseio.com',
    projectId: 'myportfolio-26c1c',
    storageBucket: 'myportfolio-26c1c.appspot.com',
    messagingSenderId: '106582689194',
    appId: '1:106582689194:web:c3ccac5a0051c8b96817d3',
  })
}

export default firebase
