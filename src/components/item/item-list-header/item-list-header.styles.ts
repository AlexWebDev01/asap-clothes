import styled from 'styled-components';
import { devices } from '../../../breackpoints';

export const HeaderContainer = styled.div`
  @media ${devices.mobileS} {
    display: none;
  }

  @media ${devices.tablet} {
    display: flex;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
