import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css'

export default function AuthNav (){
  return (
    <div className={css.authNav}>
      <NavLink className={css.elementAuthNav} to="/register">
        Register
      </NavLink>
      <NavLink className={css.elementAuthNav} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
