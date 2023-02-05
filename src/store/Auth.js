import { v4 as uuidv4 } from "uuid";
import axios from "axios";
//axios.defaults.baseURL = "http://localhost:8000";

//action types
const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
//action creators
export const register =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    axios
      .post("http://localhost:8000/users", {
        id: uuidv4(),
        firstName,
        lastName,
        email,
        password,
        isLoggedIn:0
      })
      .then((response) => {
        dispatch({
          type: REGISTER,
          user: response,
        });
        localStorage.setItem("isLoggedIn", "1");
      })
      .catch(console.log);
  };
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const { data: users } = await axios.get("/users");
    if (users) {
      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        dispatch({
          type: LOGIN,
          user: {
            email,
            password,
            firstName:existingUser.firstName,
            isLoggedIn:1
          },
        });
        localStorage.setItem("isLoggedIn", "1");
      } else {

      }
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("isLoggedIn");
};
//reducer
export const authReducer = (
  state = { user: null,isLoggedIn:null },
  action
) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, user: action.user};
    case LOGIN:
        return { ...state, user: action.user };
     
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
