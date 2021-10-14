import axios from 'axios';
import Config from './Config';

class Auth {
  static login(email, password) {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(
        'http://localhost:5000/login',
        {
          Email: email,
          Password: password,
        },
        { headers }
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
      })
      .catch((error) => {
        console.log('Error ========>', error.response.data);
      });
    if (Auth.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  static loggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  static getLoginToken() {
    return localStorage.get('token');
  }

  static getRefreshToken() {
    return localStorage.get('refresh');
  }

  static logoutUser() {
    localStorage.removeItem('token');
    // localstorage.remove("refresh");
  }

  //   static checkTokenExpiry() {
  //     var expire = false;
  //     var token = this.getLoginToken();
  //     var tokenArray = token.split(".");
  //     var jwt = JSON.parse(atob(tokenArray[1]));
  //     if (jwt && jwt.exp && Number.isFinite(jwt.exp)) {
  //       expire = jwt.exp * 1000;
  //     } else {
  //       expire = false;
  //     }

  //     if (!expire) {
  //       return false;
  //     }

  //     return Date.now() > expire;
  //   }
}

export default Auth;
