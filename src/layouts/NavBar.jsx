import { NavLink } from 'react-router-dom'

import { navLinks } from '../constant';

const NavBar = () => {
  return (
    <header>
      <nav>
      <NavLink to="/">
        <div className="logo">
          <span>SODUM</span>
        </div>
      </NavLink>
        <div className="sing-in-btn-container overflow-visible bottom-[13px]">
          <NavLink to="/sing-in" className="sing-in-btn flex m-10 font-black
          bg-gradient-to-tl to-[#0fff9e] from-[#09fcff] rounded-xl h-8 w-16
          text-gray-200 relative justify-center items-center text-sm">
            Sing In
          </NavLink>
        </div>
        <ul>
          {/*           <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li> */
          }
          {
            navLinks.map(({ name, href, id }) => (
            <li key={id}><NavLink to={href} className="NavLink" >{name}</NavLink></li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar