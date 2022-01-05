import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/ProfileComponent";
import LoginComponent from "./components/LoginComponent";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
  );
}

export default App;
