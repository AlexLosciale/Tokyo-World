export default function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Tokyo World.</p>
                <p>Follow us on social media!</p>
                <ul className="social-links list-inline mb-0">
                    <li><a href="https://twitter.com/tokyoworld">Twitter</a></li>
                    <li><a href="https://instagram.com/tokyoworld">Instagram</a></li>
                    <li><a href="https://facebook.com/tokyoworld">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}