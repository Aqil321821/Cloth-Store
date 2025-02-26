import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../assets/crown.svg?react';
import { UserContext } from '../../context/UserContext';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import './Nav.styles.scss';
const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const SignOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link className='nav-link' to='/auth' onClick={SignOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
