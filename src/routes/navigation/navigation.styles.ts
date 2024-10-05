import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../breackpoints';
import AsapLogo from '../../assets/asap.svg?react';

export const NavigationContainer = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media ${devices.tablet} {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
`;

export const Logo = styled(AsapLogo)`
  width: 50px;
  height: 39px;
`;

export const LogoContainer = styled(Link)`
  @media ${devices.mobileS} {
    padding: 10px;
  }

  @media ${devices.tablet} {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
`;

export const NavLinks = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    align-items: center;
    width: auto;
  }

  @media ${devices.tablet} {
    width: 50%;
    height: 100%;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  @media ${devices.mobileS} {
    padding: 5px 10px;
  }

  @media ${devices.tablet} {
    padding: 10px 15px;
    cursor: pointer;
  }
`;
