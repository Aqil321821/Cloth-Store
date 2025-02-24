import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';

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
    </>
  );
};

export default Signin;
