import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import ProfileComponent from "./components/ProfileComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<HomeComponent />} />
        <Route path={"/profile"} element={<ProfileComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;