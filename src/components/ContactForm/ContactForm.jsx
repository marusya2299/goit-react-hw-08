import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from "../ContactForm/ContactForm.module.css";

import * as Yup from "yup";

import { useDispatch } from 'react-redux';
import {addContact} from '../../redux/contacts/operations';

export default function ContactForm(){
    const validationSchema = Yup.object({
        name: Yup.string()
          .min(3, "Too short!")
          .max(50, "Too long!")
          .required("Required!"),
        number: Yup.string()
          .min(3, "Too short!")
          .max(50, "Too long!")
          .required("Required!"),
      });

      const dispatch = useDispatch();
      
      const handleAddContact  = (nameValue, numberValue) => {
        const newContact = { name: nameValue, number: numberValue };
        dispatch(addContact(newContact)); 
      }
      

    return (
        <Formik validationSchema={validationSchema} initialValues={{ name: '', number: '' }} 
        onSubmit={(values, { resetForm }) => {
            handleAddContact (values.name, values.number);
            resetForm();
        }}>
             <Form className={css.form}>
                <div className={css.boxInput}>
                    <label className={css.label} htmlFor="name">Name</label>
                    <Field className={css.input} type="text" name="name" id="name" />
                    <ErrorMessage className={css.error} name="name" component="span" />
                </div>

                <div className={css.boxInput}>
                    <label className={css.label} htmlFor="number">Number</label>
                    <Field className={css.input} type="text" name="number" id="number" />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>

                <button className={css.button} type="submit">Add Contact</button>
            </Form>
        </Formik>
    )

}