/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Formik, Field } from 'formik';

const BasicExample = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ firstName: '', lasstName: '', phoneNumber: ''}}
      onSubmit={(values)}
      validate={(validate)}
    >

        <form onSubmit={values}>
          <Field name="firstName" placeholder="John" type="text" />
          <Field name="lastName" placeholder="Doe" type="text" />
          <Field name="phoneNumber" placeholder="Doe" type="Number" />
          <button type="submit">Submit</button>
        </form>
  
    </Formik>
  </div>
);