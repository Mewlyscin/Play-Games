import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

import logo from "../assets/logo/logo_Playgames.png";
import loginicon from "../assets/login/login_icon.png";
import shopicon from "../assets/shop/shop.png";

// create fonction Navbar

export default function Navbar() {
  return (
    <div className="bg-imgnav bg-no-repeat bg-cover text-3xl font-semibold flex flex-row justify-center align-center">
      <NavLink to="/">
        <img className="h-48 w-48 ml-72 mt-24" src={logo} alt={logo} />
      </NavLink>
      <div className="flex flex-row mt-48 gap-3 p-7 text-beige justify-end">
        <NavLink className="hover:text-purple" to="/">
          A propos
        </NavLink>
        <NavLink className="hover:text-purple" to="/">
          <img className="h-12 w-12" src={loginicon} alt={loginicon} />
        </NavLink>
        <NavLink className="hover:text-purple" to="/">
          <img className="h-8 w-8 mt-2" src={shopicon} alt={shopicon} />
        </NavLink>
      </div>
    </div>
  );
}
