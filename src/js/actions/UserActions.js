import axios from "axios";
import Reflux from "reflux";
import { rest } from "./Connect";

var UserActions = Reflux.createActions({
  createCompany: {
    children: ["completed","failed"],
    asyncResult: false
  },
  companyUpdate: {
    children: ["completed","failed"],
    asyncResult: false
  },
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

export function companyUpdate() {
  rest.axios.get("/companies/").then((data) => {
    UserActions.companyUpdate.completed(data.data);
  }).catch(function (response) {
    UserActions.companyUpdate.failed({
      status: response.status,
      statusText: response.statusText
    });
  });
}

export function createCompany() {
  rest.axios.post("/companies/").then((data) => {
    UserActions.createCompany.completed(data);
  }).catch(function (response) {
    UserActions.createCompany.failed({
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
