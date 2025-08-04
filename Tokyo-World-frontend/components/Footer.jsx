import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Tokyo World.</p>
        <p className="mb-3">Follow us on social media!</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item mx-2">
            <a
              href="https://twitter.com/tokyoworld"
              className="text-white text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a
              href="https://instagram.com/tokyoworld"
              className="text-white text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a
              href="https://facebook.com/tokyoworld"
              className="text-white text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
