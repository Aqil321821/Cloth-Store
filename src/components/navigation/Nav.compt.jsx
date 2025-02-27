import { Outlet, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Logo from '../../assets/crown.svg?react';
import { UserContext } from '../../context/UserContext';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-icon.compt';
import CartDropdown from '../cart-dropdown/Cart-dropdown.compt';
import './Nav.styles.scss';
const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const [cartState, setCartState] = useState(false);
  const dropdownHandler = () => setCartState((prev) => !prev);

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
            <Link className='nav-link' to='/auth' onClick={SignOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <div onClick={dropdownHandler}>
            <CartIcon />
          </div>
        </div>
        {cartState && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
