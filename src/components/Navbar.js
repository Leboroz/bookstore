import { Link } from 'react-router-dom';
import styles from '../sass/components/navbar.module.scss';

const Navbar = () => {
  const {
    header, navbar, link, paddingX,
  } = styles;
  return (
    <header className={`${header} ${paddingX}`}>
      <span>Bookstore CMS</span>
      <nav>
        <ul className={navbar}>
          <li>
            <Link className={link} to="/">
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
