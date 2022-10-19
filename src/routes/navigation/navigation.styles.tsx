import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../breackpoints';

export const NavigationContainer = styled.div `

@media ${devices.mobileS} {
  margin-bottom: 10px;
}

@media ${devices.tablet} {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

`

export const Logo = styled.img `
    width: 50px;
    height: 39px;
`

export const LogoContainer = styled(Link) `

@media ${devices.mobileS} {
  padding: 10px;
}

@media ${devices.tablet} {
  height: 100%;
  width: 70px;
  padding: 25px;
}

`

export const NavLinks = styled.div`

@media ${devices.mobileS} {
  width: auto;
}

@media ${devices.tablet} {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

`

export const NavLink = styled(Link)`

@media ${devices.mobileS} {
  padding: 5px 10px;
}

@media ${devices.tablet} {
  padding: 10px 15px;
  cursor: pointer;
}

`
  