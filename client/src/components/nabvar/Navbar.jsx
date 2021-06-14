import s from "../../sass/navbar/Navbar.module.sass";
import Nav from "./Nav";

function Navbar({ display }) {
  return (
    <header className={`${s.header}`} style={{ display: display }}>
      <Nav />
    </header>
  );
}

export default Navbar;
