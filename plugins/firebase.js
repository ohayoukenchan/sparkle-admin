import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyB-XtITThG9EqW-WGquP_ib94xePapW4bk',
    authDomain: 'sparkle-1c277.firebaseapp.com',
    databaseURL: 'https://sparkle-1c277.firebaseio.com',
    projectId: 'sparkle-1c277',
    storageBucket: 'sparkle-1c277.appspot.com',
    messagingSenderId: '560948868237',
    appId: '1:560948868237:web:f363d2e7a70863db9b9ec4',
    measurementId: 'G-HZMMEGBH65'
  })
}

export default firebase
