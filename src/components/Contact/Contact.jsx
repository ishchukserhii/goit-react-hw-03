import React from 'react'
import css from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({name, phone, delUser, id}) => {
  return (
    <div className={css.box}>
        <ul className={css.list}>
            <li className={css.item}><FaUser /> {name}</li>
            <li className={css.item}><FaPhone /> {phone}</li>
            
        </ul>
        <button className={css.button} onClick={() => delUser(id)}>Delete</button>
    </div>
  )
}

export default Contact