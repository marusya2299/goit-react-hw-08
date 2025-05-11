import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';
import { selectAllContacts } from '../../redux/contacts/selectors.js';
import { selectFilter } from "../../redux/filters/selectors.js";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);  

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

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
