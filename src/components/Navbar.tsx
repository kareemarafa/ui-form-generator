import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex flex-row w-100 justify-content-between align-items-center">
          <span className="text-black">UI Form Generator <small
            className="text-muted">(CerQlar Assignment)</small></span>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Bob's</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listing">Listing</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
