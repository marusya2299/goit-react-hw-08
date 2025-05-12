import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
      .catch(error => {
        console.log('register error', error);
      });
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <Form  className={css.form} autoComplete="off">
        <div  className={css.boxInput}>
          <label className={css.label}>Username</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div  className={css.boxInput}>
          <label className={css.label}>Email</label>
          <Field  className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div  className={css.boxInput}>
          <label className={css.label}>Password</label>
          <Field  className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>

        <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
