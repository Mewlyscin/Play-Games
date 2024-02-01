import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

import logo from "../assets/logo/logo_Playgames.png";

// create fonction Navbar

export default function Navbar() {
  return (
    <div className="bg-imgnav bg-no-repeat bg-cover text-3xl font-semibold flex flex-row justify-center align-center">
      <NavLink to="/">
        <img className="h-48 w-48 mt-24" src={logo} alt={logo} />
      </NavLink>
      <div className="flex flex-col p-7 text-beige justify-end">
        <NavLink className="hover:text-purple" to="/">
          A propos
        </NavLink>
        <NavLink className="hover:text-purple" to="/">
          Mon compte
        </NavLink>
        <NavLink className="hover:text-purple" to="/">
          panier
        </NavLink>
      </div>
    </div>
  );
}
