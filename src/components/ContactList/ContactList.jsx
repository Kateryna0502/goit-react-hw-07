import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { selectContacts } from "../../redux/contactsSlice.js";




const ContactList = () => {
  
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const onContactFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
    return (
      <div>
        <ul className={css.list}>
          {onContactFilter.map((contact) => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  number={contact.number}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };


      

export default ContactList;

