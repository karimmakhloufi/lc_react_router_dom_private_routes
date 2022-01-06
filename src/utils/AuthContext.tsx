import React, { useState } from "react";

interface AuthContextI {
  isLoggedIn: boolean;
  setIsLoggedIn: (newValue: boolean) => void;
}

export const AuthContext = React.createContext<AuthContextI>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
