/* eslint-disable prettier/prettier */
import FuseUtils from "@fuse/utils/FuseUtils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.handleAuthentication();
  }

  generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  handleAuthentication = () => {
    const access_token = this.getAccessToken();
    const id = this.getId();
    const name = this.getName();
    const email = this.getEmail();

    if (!access_token) {
      this.emit("onNoAccessToken");

      return;
    }
    if (!id) {
      this.emit("onNoId");

      return;
    }
    if (!name) {
      this.emit("onNoName");

      return;
    }
    if (!email) {
      this.emit("onNoEmail");

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token, id, email, name);
      this.emit("onAutoLogin", true);
    } else {
      this.setSession(null, null,null,null);
      this.emit("onAutoLogout", "access_token expired");
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post("https://www.api.mavenevents.ae/api/auth/register", { ...data })
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.access_token.token,response.data.user.id,response.data.user.email,response.data.user.name);
            resolve(response.data.user);
            this.emit("onLogin", response.data.user);
          } else if (Array.isArray(response.data.error)) {
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < response.data.error.length; i++) {
              this.generateError(response.data.error[i].msg.message);
            }
          } else {
            reject(this.generateError("error en conexion"));
          }
        })
        .catch((e) => {
          this.generateError("error en conexion");
        });
    });
  };

  signInWithEmailAndPassword = async (login, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          "https://www.api.mavenevents.ae/api/auth/login",
          {
            login,
            password,
          },

        )
        .then((response) => {
          if (response.data.user) {
            this.setSession(
              response.data.access_token.token,
              response.data.user.id,
              response.data.user.email,
              response.data.user.name
            );
            resolve(response.data.user);
            this.emit("onLogin", response.data.user);
          } else if (Array.isArray(response.data.error)) {
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < response.data.error.length; i++) {
              this.generateError(response.data.error[i].msg.message);
            }
          } else {
            this.generateError(response.data.error);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          "https://www.api.mavenevents.ae/api/auth/access",
          {
            access_token: this.getAccessToken(),
          },
        )
        .then((response) => {
          if (response.data.user) {
            this.setSession(
              response.data.access_token.token,
              response.data.user.id,
              response.data.user.email,
              response.data.user.name
            );
            resolve(response.data.user);
          } else {
            this.logout();
            reject(new Error("Failed to login with token."));
          }
        })
        .catch((error) => {
          console.log(error);
          this.logout();
          reject(new Error("Failed to login with token."));
        });
    });
  };

  updateUserDataSettings = (user) => {
    return axios.put(`https://www.api.mavenevents.ae/api/user/setting/${user.data._id}`, {
      settings: user.data.settings
    }, {headers:{
      access_token: this.getAccessToken(),
      company: this.getCompany(),
      _id : user.data._id,
     }});
  };


  setSession = (access_token, id, email, name) => {
    if (access_token) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("id", id);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("id", id);
      localStorage.removeItem("email", email);
      localStorage.removeItem("name", name);
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null, null, null, null);
    this.emit("onLogout", "Logged out");
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem("access_token");
  };

  getId = () => {
    return window.localStorage.getItem("id");
  };
  getEmail = () => {
    return window.localStorage.getItem("email");
  };
  getName = () => {
    return window.localStorage.getItem("name");
  };
}

const instance = new JwtService();

export default instance;
