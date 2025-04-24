import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import { selectLoading, selectError } from '../../redux/contactsSlice.js';

export default function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return(
    <div>
      <h1>Phonebook</h1>
        <SearchBox />
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
    </div>

  )
}