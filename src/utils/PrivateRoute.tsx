import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const { pathname } = useLocation(); // we have access to the location before we return something
  if (props.isLoggedIn) {
    return props.children;
  } else {
    return <Navigate to={"/login"} state={{ to: pathname }} />;
  }
};

export default PrivateRoute;
