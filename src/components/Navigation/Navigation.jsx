import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from '../Navigation/Navigation.module.css';

export default function Navigation(){
    const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={css.elementNavigation} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.elementNavigation} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}