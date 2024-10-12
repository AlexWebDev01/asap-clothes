import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const ShoppingLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    opacity: 0.7;
  }
`;
