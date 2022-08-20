import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classes from './Header.module.scss';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.container}>
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
      <div className={classes.oval}>
        <FontAwesomeIcon icon={faUser} className={classes.fa} />
      </div>
    </div>
  </header>
);

export default Header;
