import React from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Max 50 chars")
    .matches(
      /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’`\- ]+$/,
      "Name must contain only letters and spaces"
    )
    .required("This field is required"),
  number: Yup.string()
    .required("This field is required")
    .matches(/^\d+$/, "Must be a valid number")
    .min(3, "Must be at least 3 digits")
    .max(50, "Must be at most 50 digits"),
});

const ContactForm = ({onAdd}) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values
    }
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.box}>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <label>Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />
        <button className={css.buttom} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
