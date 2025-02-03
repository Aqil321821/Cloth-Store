import SignUpForm from '../../components/sign-up-form/Sign-up-form.component';
import SignInForm from '../../components/sign-in-form/Sign-in-form.component';
import './auth.styles.scss';

const Auth = () => {
  return (
    <>
      <h1 className='heading'>Sign In Page</h1>
      <div className='auth-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Auth;
