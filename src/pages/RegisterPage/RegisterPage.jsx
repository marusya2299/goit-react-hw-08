import RegisterForm from '../../components/RegisterForm/RegisterForm';
import css from '../RegisterPage/RegisterPage.module.css';

export default function RegisterPage() {
    return (
      <div className={css.box}>
        <h2 className={css.header}>Registration</h2>
        <RegisterForm />
      </div>
    );
  }
  