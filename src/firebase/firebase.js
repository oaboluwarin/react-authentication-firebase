import 'dotenv/config';
import firebase from 'firebase';

const {
  API_KEY,
  AUTH_DOMAIN,
  DB_URL,
  PROJECT_ID,
  MSG_SENDER_ID
} = process.env;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: PROJECT_ID,
  storageBucket: '',
  messagingSenderId: MSG_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
