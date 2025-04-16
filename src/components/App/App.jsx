import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const addUser = (newUser) => {
    setContacts((contacts) => [...contacts, newUser]);
  };
  const delUser = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem("contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const Filter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox inputValue={inputValue} changeInput={handleChange} />
      <ContactList Filter={Filter} delUser={delUser} />
    </div>
  );
}

export default App;
