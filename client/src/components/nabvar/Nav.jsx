import s from "../../sass/navbar/Navbar.module.sass";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

function Nav() {
  const [menu, setMenu] = useState(null);
  const [subMenu, setSubMenu] = useState(null);

  const toggle = (action, setAction) => {
    if (action === true) {
      setAction(false);
    } else {
      setAction(true);
    }
  };

  return (
    <nav className={`wrapper ${s.nav}`}>
      <div className={s.logo}>
        <p className={s.logo__text}>By aleoliva2409</p>
      </div>
      <ul className={`${s.menu} ${menu ? "block" : "none"}`}>
        <li className={s.list__item}>
          <NavLink className={s.item__link} to="/home">
            Home
          </NavLink>
        </li>
        <li className={`${s.list__item} ${s.dropdown}`}>
          <button
            onClick={() => toggle(subMenu, setSubMenu)}
            className={`${s.item__link} ${s.item__link__btn}`}
          >
            Activities
            <FontAwesomeIcon
              icon={faCaretDown}
              className={s.item__link__icon}
            />
          </button>
          <ul className={`${s.subMenu} ${subMenu ? "block" : "none"}`}>
            <li className={s.subMenu__list__item}>
              <NavLink className={s.item__link} to="/activities/create">
                Create
              </NavLink>
            </li>
            <li className={s.subMenu__list__item}>
              <NavLink className={s.item__link} to="/activities/lists">
                Lists
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div className={s.menu__btn}>
        <button onClick={() => toggle(menu, setMenu)} className={s.btn}>
          <FontAwesomeIcon icon={faBars} className={s.btn__icon} />
        </button>
      </div>
      <div className={s.search}>
        <Search />
      </div>
    </nav>
  );
}

export default Nav;
