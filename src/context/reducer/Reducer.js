export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("user_token", JSON.stringify(action.user));
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

