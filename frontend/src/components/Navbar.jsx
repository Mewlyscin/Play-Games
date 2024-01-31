import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

// create fonction Navbar

export default function Navbar() {
  return (
    <div className="text-3xl font-semibold bg-blue-200 flex flex-row justify-between">
      <NavLink to="/">home</NavLink>
    </div>
  );
}
