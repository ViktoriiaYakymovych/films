import { NavUl, Link } from "./HeaderNav.styled";

const HeaderNav = () => {
  return (
    <nav>
      <NavUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </NavUl>
    </nav>
  );
};

export default HeaderNav;
