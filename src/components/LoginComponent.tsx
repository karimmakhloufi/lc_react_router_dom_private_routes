import { useContext, useEffect } from "react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate, useLocation, To } from "react-router-dom";
import jwt_decode from "jwt-decode";

const jwtFromBackend =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyb2xlIjoiYWRtaW4ifQ.CTylIOCR17-AvNn2pP4T1jqu6FGSX1wjLTyMNkVNxb4";

interface State {
  to: To;
}

const LoginComponent = () => {
  const { user, setUser } = useContext(AuthContext);
  const state = useLocation().state as State;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("jwt", jwtFromBackend);

      navigate(state.to);
    }
  }, [user]);

  return (
    <>
      <p>Here we will login</p>
      <button
        onClick={() => {
          setUser(jwt_decode(jwtFromBackend));
        }}
      >
        Log me in
      </button>
    </>
  );
};

export default LoginComponent;
