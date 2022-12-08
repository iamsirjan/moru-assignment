const actions = {
  GET_USERS_REQ: "GET_USERS_REQ",
  GET_USERS_SUC: "GET_USERS_SUC",
  GET_USERS_FAIL: "GET_USERS_FAIL",

  DLT_USERS_REQ: "DLT_USERS_REQ",
  DLT_USERS_SUC: "DLT_USERS_SUC",
  DLT_USERS_FAIL: "DLT_USERS_FAIL",

  getUsers: () => ({
    type: actions.GET_USERS_REQ,
  }),
  deleteUsers: (userId) => ({
    type: actions.DLT_USERS_REQ,
    userId,
  }),
};

export default actions;
