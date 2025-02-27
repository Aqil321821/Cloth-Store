import { useState,  } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.compt';
import Button from '../button/button.compt';

import './signup-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('password do not matched');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      alert('Success');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Already Member ! Plz Sign in');
        return;
      }
      console.log('error ---> ', error.message);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with Your Credentials</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit' className='btn'>Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
