import { Link } from 'react-router-dom';
import styles from '../sass/components/navbar.module.scss';

const Navbar = () => {
  const {
    header, headerTitle, navbar, link, paddingX, active,
  } = styles;
  return (
    <header className={`${header} ${paddingX}`}>
      <h1 className={headerTitle}>Bookstore CMS</h1>
      <nav>
        <ul className={navbar}>
          <li>
            <Link className={`${link} ${active}`} to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link className={link} to="/categories">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
