import axios from "axios";
// import cookie from "react-cookie";

class Rest {
  constructor() {
    // this.setToken(cookie.load("token"));
    this.setToken("");
  }

  setToken(token) {
    // cookie.save("token", token, { path: "/" });
    let ref = {
      baseURL: "/rest/",
      timeout: 1000,
      headers: {Authorization: "Token " + token}
    };
    this.axios = axios.create(ref);
  }
  resetToken(token) {
    // cookie.remove("token");
  }
}

export let rest = new Rest();
