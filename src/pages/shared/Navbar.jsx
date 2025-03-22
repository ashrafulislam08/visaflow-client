import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-visas">All Visas</Link>
      </li>
      <li>
        <Link to="/add-visa">Add Visa</Link>
      </li>
      <li>
        <Link to="/my-added-visa">My Added Visas</Link>
      </li>
      <li>
        <Link to="/my-visa-application">My Visa Application</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          VisaFlow
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
          {user ? (
            <button
              className="btn btn-accent text-white"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-neutral">Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box -ml-32 z-1 mt-3 w-52 p-2 shadow"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
