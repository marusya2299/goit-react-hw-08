import LoginForm from "../../components/LoginForm/LoginForm";
import css from '../LoginPage/LoginPage.module.css';

export default function LoginPage() {
    return (
      <div className={css.box}>
        <h2 className={css.header}>Login</h2>
        <LoginForm />
      </div>
    );
  }
  