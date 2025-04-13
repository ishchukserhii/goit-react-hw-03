import React from 'react'
import Contact from '../Contact/Contact';

const ContactList = ({contacts}) => {

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList