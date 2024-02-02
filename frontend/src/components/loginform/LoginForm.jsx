import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

// create form login/register

function LoginForm() {
  return (
    <div className="wrapper bg-imglogin bg-cover text-beige text-base font-medium w-96 ml-96 rounded-xl mt-7 p-2 text-center bg-purple">
      <form action="">
        <br />
        <h1 className="text-2xl font-medium">Connexion</h1>
        <br />
        <div className="imput-box flex flex-row justify-center p-2">
          <input
            className="rounded-md bg-transparent text-beige text-xl font-medium border-beige border-2"
            type="text"
            placeholder="Identifiant"
            required
          />
          &nbsp;&nbsp;
          <FaUserAlt className="icon absolute ml-48 mt-2" />
        </div>
        <div className="imput-box flex flex-row justify-center p-2">
          <input
            className="rounded-md bg-transparent flex text-beige text-xl font-medium border-beige border-2"
            type="password"
            placeholder="Mot de passe"
            required
          />
          &nbsp;&nbsp;
          <FaLock className="icon absolute ml-48 mt-2" />
        </div>
        <br />
        <div className="remember-forgot flex flex-row justify-between p-2">
          <label htmlFor="text">
            <imput type="checkbox rounded border-2 border-beige" /> Se souvenir
            de moi
          </label>
          <NavLink className="hover:text-blue-300" to="/">
            Mot de passe oublié ?
          </NavLink>
        </div>
        <br />
        <button
          className="text-xl font-medium border-2 border-beige p-2 rounded-md cursor-pointer"
          type="submit"
        >
          Connexion
        </button>
        <br />
        <br />
        <div className="register-link flex flex-row justify-center gap-3 p-2">
          <p>je n'ai pas encore de compte ?</p>
          <NavLink className="hover:text-blue-300" to="/">
            S'enregistrer
          </NavLink>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
