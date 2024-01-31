import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

import logo from "../assets/logo/logo_Playgames.png";

// create fonction Navbar

export default function Navbar() {
  return (
    <div className="text-3xl font-semibold flex flex-row justify-center align-center">
      <img className="w-96 h-96" src={logo} alt={logo} />
      <div className="flex flex-col p-7 justify-end">
        <NavLink className="hover:text-green" to="/">
          A propos
        </NavLink>
        <NavLink className="hover:text-green" to="/">
          Mon compte
        </NavLink>
        <NavLink className="hover:text-green" to="/">
          panier
        </NavLink>
      </div>
    </div>
  );
}
