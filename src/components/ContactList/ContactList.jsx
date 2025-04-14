import React from 'react'
import Contact from '../Contact/Contact';

const ContactList = ({Filter}) => {

  return (
    <ul>
      {Filter.map(contact => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number}/>
        </li>
      ))}
    </ul>
  );
};

export default ContactList