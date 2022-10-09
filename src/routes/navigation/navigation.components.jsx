import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import AsapLogo from '../../assets/asap.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, Logo, LogoContainer, NavLinks, NavLink } from './navigation.styles';

import './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src={AsapLogo} alt='AsapLogo'/>
        </LogoContainer>        
        <NavLinks>
          <NavLink to='/shop'>
              SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;