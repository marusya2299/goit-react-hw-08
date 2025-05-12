import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from '../RegistrationPage/RegistrationPage.module.css';

export default function RegistrationPage() {
    return (
      <div className={css.box}>
        <h2 className={css.header}>Registration</h2>
        <RegistrationForm />
      </div>
    );
  }
  