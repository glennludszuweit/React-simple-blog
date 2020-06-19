import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDhUVFCr513mifZOI4PuOX8MUXTySm6MAc',
  authDomain: 'simple-blog-7e7eb.firebaseapp.com',
  databaseURL: 'https://simple-blog-7e7eb.firebaseio.com',
  projectId: 'simple-blog-7e7eb',
  storageBucket: 'simple-blog-7e7eb.appspot.com',
  messagingSenderId: '4039995141',
  appId: '1:4039995141:web:599410eec5b4e91b06516c',
  measurementId: 'G-2CK038JEQ9',
};
firebase.initializeApp(config);

export default firebase;
