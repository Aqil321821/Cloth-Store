import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import './navigation.styles.scss';

function Navigation() {
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <Crown className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
