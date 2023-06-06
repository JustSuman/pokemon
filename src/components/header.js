import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
        />
        <div className="links">
          <Link to="/all">
            <h2 className="header-link">All Pokemons</h2>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
