import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ Filter }) => {
  return (
    <ul className={css.list}>
      {Filter.map((contact) => (
        <li key={contact.id}>
          <Contact name={contact.name} phone={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
