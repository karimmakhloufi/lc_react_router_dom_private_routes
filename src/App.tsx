import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AuthProvider from "./utils/AuthContext";

import PrivateRoute from "./utils/PrivateRoute";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/ProfileComponent";
import LoginComponent from "./components/LoginComponent";
import LogoutComponent from "./components/LogoutComponent";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Link to="/home">Home</Link> <Link to="/profile">Profile</Link>{" "}
        <LogoutComponent />
        <Routes>
          <Route path={"/home"} element={<HomeComponent />} />
          <Route path={"/login"} element={<LoginComponent />} />
          <Route
            path={"/profile"}
            element={
              <PrivateRoute>
                <ProfileComponent />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
