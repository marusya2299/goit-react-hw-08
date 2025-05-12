import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map((value) => (
        <li key={value.id}>
          <Contact data={value} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
