import { useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContext";

import { useNavigate, useLocation, To } from "react-router-dom";

interface State {
  to: To;
}

const LoginComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const state = useLocation().state as State;
  console.log("state", state);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user", "token12345azerty");
      navigate(state.to);
    }
  }, [isLoggedIn]);

  return (
    <>
      <p>Here we will login</p>
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Log me in
      </button>
    </>
  );
};

export default LoginComponent;
