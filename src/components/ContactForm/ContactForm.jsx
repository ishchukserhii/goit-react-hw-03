import React from 'react'
import css from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form className={css.box}>
        <label htmlFor="Name">Name</label>
        <input type="text" />
        <label htmlFor="Number">Number</label>
        <input type="text" />
        <button>Add contact</button>
    </form>
  )
}

export default ContactForm