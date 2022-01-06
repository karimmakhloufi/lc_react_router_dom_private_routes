import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

const PrivateRoute = ({ children }: any) => {
  const { pathname } = useLocation(); // we have access to the location before we return something
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ to: pathname }} />;
  }
};

export default PrivateRoute;
