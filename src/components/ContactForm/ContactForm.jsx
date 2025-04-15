import React from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      // onSubmit={handleSubmit}
    >
      <Form className={css.box}>
        <label htmlFor="Name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor="Number">Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />
        <button className={css.buttom}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
