export var states = {
  PRODUCT_UPDATE_SUCCESS: 1,
  PRODUCT_UPDATE_FAILED: 2,
  CREATE_USER_SUCCESS: 3,
  CREATE_USER_FAILED: 4,
  LOGIN_USER_SUCCESS: 5,
  LOGIN_USER_FAILED: 6,
  LOGOUT_USER_SUCCESS: 7,
  LOGOUT_USER_FAILED: 8,
};

export var revStates = {};

for (let key of Object.keys(states)) {
  revStates[states[key]] = key;
};
