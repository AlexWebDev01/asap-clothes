import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const SignUpContainer = styled.div`
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
