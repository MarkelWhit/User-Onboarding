import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import schema from './formSchema';

const initialFormValues = {
  ///text inputs///
  username: '',
  email: '',
  password: '',
  ///checkboxes///
  terms: false ,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []

const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) =>{
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])

  const onChange = (name, value) => {
    validate(name, value) 
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    console.log(newUser)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form 
      values={formValues}
      change={onChange}
      submit={onSubmit}
      disabled={disabled}
      errors={formErrors}/>
    </div>
  );
}

export default App;
