import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

const LogoutComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return isLoggedIn ? (
    <button
      onClick={() => {
        navigate("/home");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
      }}
    >
      Logout
    </button>
  ) : null;
};

export default LogoutComponent;
