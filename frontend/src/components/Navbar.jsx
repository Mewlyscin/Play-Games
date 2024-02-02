import { NavLink } from "react-router-dom";

import logo from "../assets/logo/logo_Playgames.png";
import loginicon from "../assets/login/login_icon.png";
import shopicon from "../assets/shop/shop.png";

// credits img
// "source background nav : Image de <a href="https://fr.freepik.com/vecteurs-libre/photocall-jeu-au-neon-dessine-main_33634612.htm#query=gaming&position=5&from_view=search&track=sph&uuid=7ec2aef9-fee0-4c96-b967-ffdcac0873ee">Freepik</a>"

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
        <NavLink className="hover:text-purple" to="/login">
          <img className="h-12 w-12" src={loginicon} alt={loginicon} />
        </NavLink>
        <NavLink className="hover:text-purple" to="/">
          <img className="h-8 w-8 mt-2" src={shopicon} alt={shopicon} />
        </NavLink>
      </div>
    </div>
  );
}
