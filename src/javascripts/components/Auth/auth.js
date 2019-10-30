import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import utilities from '../../helpers/utilities';
import googleButton from './assets/images/google-login-button.png';
import './auth.scss';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth" class="btn btn-light">
    <img src=${googleButton} />
    </button>`;
  utilities.printToDom('googleButton', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
