import React from 'react';
import styles from './ContactItem.module.css';

export const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <span className={styles.container}>
        <span className={styles.description}>
          {contact.name} : {contact.number}
        </span>
        <button className={styles.button} onClick={onDelete}>
          Delete
        </button>
      </span>
    </li>
  );
};
