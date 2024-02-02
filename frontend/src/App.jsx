import { Outlet } from "react-router-dom";

// Import components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./components/loginform/LoginForm";

import "./App.css";

function App() {
  return (
    <div className="App bg-pecheClair">
      <Navbar />
      <LoginForm />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
