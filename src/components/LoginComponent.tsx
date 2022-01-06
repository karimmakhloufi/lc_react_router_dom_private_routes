import { useEffect } from "react";
import { useNavigate, useLocation, To } from "react-router-dom";

interface State {
  to: To;
}

interface LoginProps {
  handleLogin: (newLoginStatus: boolean) => void;
  isLoggedIn: boolean;
}

const LoginComponent = ({ handleLogin, isLoggedIn }: LoginProps) => {
  const state = useLocation().state as State;
  console.log("state", state);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      console.log("isLogguedIn is now true");
      navigate(state.to);
    }
  }, [isLoggedIn]);
  return (
    <>
      <p>Here we will login</p>
      <button
        onClick={() => {
          handleLogin(true);
        }}
      >
        Log me in
      </button>
    </>
  );
};

export default LoginComponent;
