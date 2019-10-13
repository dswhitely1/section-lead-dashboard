import { useState } from 'react';

export const useForm = (initialValues, cbFunc) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    cbFunc();
    setValues(initialValues);
  };

  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const resetForm = () => setValues(initialValues);

  return [values, handleChange, handleSubmit, resetForm];
};
