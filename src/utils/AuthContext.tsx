import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

interface UserI {
  name: string;
  role: string;
}

interface AuthContextI {
  user: UserI | null;
  setUser: (newValue: UserI | null) => void;
}

export const AuthContext = React.createContext<AuthContextI>({
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserI | null>(null);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("jwt");
    if (localStorageToken) {
      setUser(jwt_decode(localStorageToken));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
