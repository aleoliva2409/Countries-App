import Nav from './Nav'
import s from './Navbar.module.css'

function Navbar({display}) {

  return (
    <header className={s.header} style={{display: display}}>
      <Nav />
    </header>
  )
}

export default Navbar
