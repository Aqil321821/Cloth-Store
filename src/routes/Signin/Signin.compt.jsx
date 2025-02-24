import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import Signup from '../../components/signup-form/Signup-form.compt';
const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user.uid);
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <>
      <h1>Signin.compt</h1>
      <button onClick={logGoogleUser}>Sign In google</button>
      <Signup />
    </>
  );
};

export default Signin;
