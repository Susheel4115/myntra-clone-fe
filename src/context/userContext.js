import { createContext, useContext, useReducer } from "react";

const userContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        name: "",
        email: "",
        token: "",
      };

    default:
      return;
  }
};

const initalState = {
  name: "",
  email: "",
  token: "",
  addresses: [],
  selectedAddress: {},
};

export const UserProvider = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("hint"));

  if (token) {
    initalState.token = token.token;
    initalState.name = token?.name;
    initalState.email = token?.email;
  }

  const [userState, userDispatch] = useReducer(userReducer, initalState);

  return (
    <userContext.Provider value={{ userState, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(userContext);
};
