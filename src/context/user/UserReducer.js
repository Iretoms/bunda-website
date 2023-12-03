export const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return { ...state, isLoggedIn: false, loading: false, userInfo: null };
    default:
      return state;
  }
};
