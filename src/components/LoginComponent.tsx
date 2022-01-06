import { useEffect } from "react";

interface LoginProps {
  handleLogin: (newLoginStatus: boolean) => void;
}

const LoginComponent = ({ handleLogin }: LoginProps) => {
  return (
    <>
      <p>Here we will login</p>
      <button onClick={() => handleLogin(true)}>Log me in</button>
    </>
  );
};

export default LoginComponent;
