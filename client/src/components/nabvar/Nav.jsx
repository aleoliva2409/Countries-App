import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown , faBars } from "@fortawesome/free-solid-svg-icons";
import s from "./Navbar.module.css";
import Search from "./Search";

function Nav() {
  return (
    <nav className={`${s.nav} wrapper`}>
      <button className={s.nav__btn}>
        <FontAwesomeIcon icon={faBars} className={s.btn__icon} />
      </button>
      <ul className={s.nav__menu}>
        <li className={s.menu__item}>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className={`${s.menu__item} ${s.dropdown}`}>
          <p className={s.item__a}>
            Activities
            <FontAwesomeIcon icon={faCaretDown} className={s.item__icon} />
          </p>
          <ul className={s.nav__subMenu}>
            <li className={`${s.menu__item} ${s.subMenu__item}`}>
              <NavLink to="/activities/create">Create</NavLink>
            </li>
            <li className={`${s.menu__item} ${s.subMenu__item}`}>
              <NavLink to="/activities/lists">Lists</NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <Search />
    </nav>
  );
}

export default Nav;
