import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/Sign-up-form.component';



const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef= await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign In With Google</h1>
      <button onClick={logGoogleUser}>Sign In</button>
      <SignUpForm />
    </div>
  );
};

export default Auth;
