import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  const { pathname } = useLocation()
  const isContact = pathname === '/contact'

  return (
    <header>
      {isContact ? (
        <h1 id="contactHeader">Contact Form</h1>
      ) : (
        <h2>We Are in Testing Phase</h2>
      )}

      <nav id={isContact ? 'contactNav' : undefined}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
