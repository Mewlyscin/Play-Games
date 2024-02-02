import { Outlet } from "react-router-dom";

// Import components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App bg-pecheClair">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
