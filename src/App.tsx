import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/ProfileComponent";
import LoginComponent from "./components/LoginComponent";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> <Link to="/profile">Profile</Link>
      <Routes>
        <Route path={"/home"} element={<HomeComponent />} />
        <Route
          path={"/login"}
          element={<LoginComponent handleLogin={setIsLoggedIn} />}
        />
        <Route
          path={"/profile"}
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ProfileComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
