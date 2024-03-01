import { ContactItem } from 'components/ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
