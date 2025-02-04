import SignUpForm from '../../components/sign-up-form/Sign-up-form.component';
import SignInForm from '../../components/sign-in-form/Sign-in-form.component';
import './auth.styles.scss';

const Auth = () => {
  return (
    <>
      <div className='auth-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Auth;
