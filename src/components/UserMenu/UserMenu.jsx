import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from '../UserMenu/UserMenu.module.css';

export default function UserMenu (){

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userText}>Welcome, {user.name}</p>
      <button className={css.userButton} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
