import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

const LogoutComponent = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return user ? (
    <button
      onClick={() => {
        navigate("/");
        localStorage.removeItem("jwt");
        setUser(null);
      }}
    >
      Logout
    </button>
  ) : null;
};

export default LogoutComponent;
