import { createContext, useReducer, useContext } from "react";
import { userReducer } from "./UserReducer";

export const UserContext = createContext();

const storedUser = localStorage.getItem("user");

const initialState = {
  isLoggedIn: !!storedUser,
  userInfo: storedUser ? JSON.parse(storedUser) : null,
  error: "",
  loading: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
