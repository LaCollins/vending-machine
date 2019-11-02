import 'bootstrap';
import firebase from 'firebase';
import auth from './components/Auth/auth';
import '../styles/main.scss';

import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';
import machine from './components/machine/machine';
// import machineData from './helpers/data/machineData';
// import positionData from './helpers/data/positionData';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  myNavbar.logoutEvent();
  machine.buildTheMachine();
  // positionData.getAllPositionsByMachineID();
  // machineData.getMachine();
  console.log('Welcome to Vendo-Land!');
};

init();
