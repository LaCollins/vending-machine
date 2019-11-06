import 'bootstrap';
import firebase from 'firebase';
import auth from './components/Auth/auth';
import '../styles/main.scss';

import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';
import machine from './components/machine/machine';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  myNavbar.logoutEvent();
  machine.buildTheMachine();
};

init();
