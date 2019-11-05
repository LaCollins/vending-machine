import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import stocker from '../../components/stocker/stocker';

const authDiv = $('#googleButton');
const stockDiv = $('#stock');
const logoutNavbar = $('#logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - we should not see auth component
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
      stocker.buildTheStocker(user.uid);
    } else {
      // nobody logged in SHOW auth
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
