import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
