import { NavLink } from "react-router-dom";

import pictureYoutube from "../assets/reseau_Footer/img-youtube.png";
import pictureTwitch from "../assets/reseau_Footer/img-twitch.png";
import pictureinsta from "../assets/reseau_Footer/img-insta.png";

function Footer() {
  return (
    <div>
      <div className="bg-black grid grid-cols-2 gap-7">
        <div className="text-beige text-xl font-medium ml-2 grid grid-rows-3 p-2">
          <NavLink
            className="hover:text-green text-l h-fit my-auto"
            to="/Conditions"
          >
            Conditions générales
          </NavLink>
          <NavLink
            className="hover:text-green text-l h-fit my-auto"
            to="/mention"
          >
            Mention légales
          </NavLink>
          <NavLink className="hover:text-green text-l h-fit my-auto" to="/">
            Données personnelles et sécurité
          </NavLink>
        </div>
        <div className="text-beige grid grid-rows-4 m-4 text-xl font-medium">
          <p className="text-l h-fit my-auto p-1">Playmogames</p>
          <p className="text-l h-fit my-auto">Adresse</p>
          <NavLink
            className="hover:text-green text-l h-fit my-auto"
            to="/contact"
          >
            Contact
          </NavLink>
          <div className="flex flex-row justify-end gap-3">
            <NavLink to="/">
              <img className="h-12" src={pictureYoutube} alt="youtube" />
            </NavLink>
            <NavLink to="/">
              <img className="h-12" src={pictureinsta} alt="instagram" />
            </NavLink>
            <NavLink to="/">
              <img className="h-12" src={pictureTwitch} alt="twitch" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
