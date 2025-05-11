import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import css from '../LoginForm/LoginForm.module.css';

export default function LoginForm (){
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <div  className={css.boxInput}>
          <label className={css.label}>Email</label>
          <Field className={css.input} type="email" name="email" />
        </div>

        <div  className={css.boxInput}>
          <label className={css.label}>Password</label>
          <Field className={css.input} type="password" name="password" />
        </div>

        <button className={css.button} type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
