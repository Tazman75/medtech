import axios from "axios";
import Reflux from "reflux";
import { rest } from "./Connect";

var UserActions = Reflux.createActions({
  createUser: {
    children: ["completed","failed"],
    asyncResult: false
  },
  loginUser: {
    children: ["completed","failed"],
    asyncResult: false
  },
  logoutUser: {
    children: ["completed","failed"],
    asyncResult: false
  }
});

export function createUser(userData) {
  axios.post("/rest/users/",
    userData
  ).then((data) => {
    UserActions.createUser.completed(data);
  }).catch(function (response) {
    UserActions.createUser.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}

export function loginUser(userData) {
  axios.post("/login/",
    userData
  ).then((data) => {
    UserActions.loginUser.completed(data);
  }).catch(function (response) {
    UserActions.loginUser.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}


export function logoutUser() {
  rest.axios.post("/logout/").then((data) => {
    UserActions.logoutUser.completed(data);
  }).catch(function (response) {
    UserActions.logoutUser.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}

export default UserActions;
