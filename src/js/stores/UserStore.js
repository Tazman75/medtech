
import Reflux from "reflux";
import UserActions from "../actions/UserActions";

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
  }
});

export default UserStore;
