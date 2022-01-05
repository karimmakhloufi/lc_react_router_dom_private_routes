import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = (props: any) => {
  console.log(useLocation()); // we have access to the location before we return something
  console.log(props);
  if (props.isLoggedIn) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
