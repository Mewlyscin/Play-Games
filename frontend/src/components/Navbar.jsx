import { NavLink } from "react-router-dom";

import logo from "../assets/logo/logo_Playgames.png";

// credits img
// "source background nav : Image de <a href="https://fr.freepik.com/vecteurs-libre/photocall-jeu-au-neon-dessine-main_33634612.htm#query=gaming&position=5&from_view=search&track=sph&uuid=7ec2aef9-fee0-4c96-b967-ffdcac0873ee">Freepik</a>"

// create fonction Navbar

export default function Navbar() {
  return (
    <div className="bg-imgnav bg-no-repeat bg-contain text-3xl font-semibold flex flex-row justify-center align-center">
      <div className="flex flex-col p-7 justify-between">
        <img className="h-48 w-48 mt-24" src={logo} alt={logo} />
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
