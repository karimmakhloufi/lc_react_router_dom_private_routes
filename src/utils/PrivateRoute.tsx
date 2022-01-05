import { useLocation } from "react-router-dom";

const PrivateRoute = (props: any) => {
  console.log(useLocation()); // we have access to the location before we return something
  console.log(props);

  return props.children;
};

export default PrivateRoute;
