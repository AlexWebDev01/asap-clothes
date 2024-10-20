import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const CheckoutContainer = styled.div`
  @media ${devices.mobileS} {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  }

  @media ${devices.tablet} {
    width: 55%;
  }
`;

export const ShoppingLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
  }
`;
