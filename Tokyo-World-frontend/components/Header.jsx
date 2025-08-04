import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="header text-white bg-alex py-3"
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo mb-0">
          <NavLink to="/" className="text-decoration-none">
            <img src="/MANGAWORLD.png" alt="Manga World Logo" height="50" />
          </NavLink>
        </h1>
        <nav className="nav">
          <ul className="nav-links list-unstyled d-flex mb-0 gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold' : ''}`
                }
                style={{ color: '#c73528', fontSize: '1.2rem' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold' : ''}`
                }
                style={{ color: '#c73528', fontSize: '1.2rem' }}
              >
                Novità
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold' : ''}`
                }
                style={{ color: '#c73528', fontSize: '1.2rem' }}
              >
                Eventi
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
