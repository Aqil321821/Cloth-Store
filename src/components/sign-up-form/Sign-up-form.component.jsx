import { useState ,useContext} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/Form-input.component';
import Button from '../button/Button.component';
import { UserContext } from '../../contexts/user.context';
import './sign-up-form.styles.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const {setCurrentUser}=useContext(UserContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password dont match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user)
      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log('error ==>', error.message);
    }

    setFormFields(defaultFormFields);
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up with Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type='text' name='displayName' onChange={handleChange} required value={displayName} />

        <FormInput label='Email' type='email' name='email' required onChange={handleChange} value={email} />

        <FormInput label='Password' type='password' name='password' onChange={handleChange} required value={password} />

        <FormInput label='Confirm Password' type='password' name='confirmPassword' onChange={handleChange} required value={confirmPassword} />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
