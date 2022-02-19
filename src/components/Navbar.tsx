import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex flex-row w-100 justify-content-between align-items-center">
          <span className="text-black">UI Form Generator <small
            className="text-muted">(CerQlar Assignment)</small></span>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className={({isActive}) => isActive ? 'nav-link text-primary' : 'nav-link text-secondary'}
                aria-current="page" to="/">Bob's</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({isActive}) => isActive ? 'nav-link text-primary' : 'nav-link text-secondary'}
                to="/product">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({isActive}) => isActive ? 'nav-link text-primary' : 'nav-link text-secondary'}
                to="/listing">Listing</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
