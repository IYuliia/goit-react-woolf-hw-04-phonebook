import React from 'react';
import styles from './Filter.module.css';

export const Filter = ({ filterContacts }) => {
  const handleChange = e => {
    const value = e.target.value;
    filterContacts(value);
  };

  return (
    <div>
      <h3 className={styles.heading}>Find contacts by name</h3>
      <input className={styles.input} type="text" onChange={handleChange} />
    </div>
  );
};
