import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const SuccessLayout = styled.div`
  media ${devices.mobileS} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }

  @media ${devices.tablet} {
    width: 50%;
    margin: 0 auto;
  }
`;

export const Total = styled.span`
  @media ${devices.mobileS} {
    font-size: 26px;
  }

  @media ${devices.tablet} {
    margin-left: auto;
    font-size: 36px;
  }
`;
