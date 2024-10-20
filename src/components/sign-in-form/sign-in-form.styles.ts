import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const SignInContainer = styled.div`
  @media ${devices.mobileS} {
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h2 {
      margin: 10px 0;
    }
  }

  @media ${devices.tablet} {
    width: 380px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorContainer = styled.div`
  color: rgb(229, 62, 62);
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
`;
