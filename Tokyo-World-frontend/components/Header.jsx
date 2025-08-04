import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo">
          <NavLink to="/" className="text-white">Tokyo World</NavLink>
        </h1>
        <nav className="nav">
          <ul className="nav-links list-unstyled d-flex mb-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}