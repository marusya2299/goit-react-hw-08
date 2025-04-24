import Contact from "../Contact/Contact.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';

export default function ContactList(){

    const dispatch = useDispatch();
    const filtered = useSelector(selectFilteredContacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return(
        <ul>
            {filtered.map((value) => (
                <li key={value.id}>
                    <Contact data={value} handleDelete={handleDelete}/>
                </li>
            ))}
        </ul>
    )
}