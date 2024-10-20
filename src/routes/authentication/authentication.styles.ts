import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const AuthenticationContainer = styled.div`
  @media ${devices.mobileS} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    margin: 30px auto;
  }

  @media ${devices.tablet} {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media ${devices.laptopL} {
    display: flex;
    flex-direction: row;
    width: 900px;
    justify-content: space-between;
    gap: 0;
  }
`;
