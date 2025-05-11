import ContactList from "../../components/ContactList/ContactList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations.js';
/*import { selectLoading, selectError} from '../../redux/tasks/selectors.js'*/
import css from '../PhoneBookPage/PhoneBookPage.module.css';

export default function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return(
    <div className={css.phoneBook}>
      <h1 className={css.headerPhoneBook}>Phonebook</h1>
        <SearchBox />
        <ContactForm />
        <ContactList />
    </div>

  )
}