
import Reflux from "reflux";
import UserActions from "../actions/UserActions";
import { rest } from "../actions/Connect";

var _state = {
  users: []
};
var UserStore = Reflux.createStore({
  listenables: UserActions,
  onCreateUserFailed: function() {
    console.warn("Failed Update");
    this.trigger("CREATEUSER_FAILED");
  },
  onCreateUserCompleted: function(products) {
    // _state["products"] = products;
    console.warn("Completed");
    this.trigger("CREATEUSER_SUCCESS");
  },
  onLoginUserCompleted: function(data) {
    console.info("Login!", data.data.key);
    rest.setToken(data.data.key);
    this.trigger("ONLOGINUSER_SUCCESS");
  },
  onLogoutUserCompleted: function() {
    console.info("Logout!");
    rest.resetToken();
    this.trigger("ONLOGOUTUSER_SUCCESS");
  }
});

export default UserStore;
