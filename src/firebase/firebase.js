import 'dotenv/config';
import firebase from 'firebase';

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DB_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_MSG_SENDER_ID
} = process.env;

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: REACT_APP_MSG_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
}
