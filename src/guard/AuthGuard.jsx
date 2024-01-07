import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "../store/loginContext";
import ROUTES from "../routes/ROUTES";

const AuthGuard = ({ children }) => {
  const { login } = useContext(LoginContext);
  if (login) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} />;
  }
};

export default AuthGuard;
