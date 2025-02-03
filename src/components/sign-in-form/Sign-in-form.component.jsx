import { useState, useContext } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/Form-input.component';
import { UserContext } from '../../contexts/user.context';
import Button from '../button/Button.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};
function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      alert(`you are logged as ${user.email}`);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('Incorrect credentials');
          break;
        case 'auth/user-not-found	':
          alert('There is no existing user record corresponding to the provided email.');
          break;
        default:
          alert(error.message);
      }
      console.log('error ==>', error.message);
    }
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    alert(`you logged in as ${user.displayName}`);
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' name='email' required onChange={handleChange} value={email} />

        <FormInput label='Password' type='password' name='password' onChange={handleChange} required value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
