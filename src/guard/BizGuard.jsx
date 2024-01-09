import { useContext } from "react";
import LoginContext from "../store/loginContext";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const BizGuard = ({ children }) => {
  const { login } = useContext(LoginContext);
  if (login && (login.isBusiness || login.isAdmin)) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} />;
  }
};

export default BizGuard;
