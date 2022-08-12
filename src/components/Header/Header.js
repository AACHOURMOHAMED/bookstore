import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.header}>
    <nav>
      <div className={classes.logo}>
        <span>Bookstore CMS</span>
      </div>

      <ul className={classes.menu}>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/catg">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
    <div className={classes.user}>
      <span>User</span>
    </div>
  </header>
);

export default Header;
