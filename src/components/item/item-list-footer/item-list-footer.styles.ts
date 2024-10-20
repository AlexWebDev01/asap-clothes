import styled from 'styled-components';
import { devices } from '../../../breackpoints';

export const Footer = styled.div`
  @media ${devices.mobileS} {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-item: space-between;
    justify-content: center;
    margin: 30px auto;

    button {
      order: 2;
    }
  }

  @media ${devices.tablet} {
    width: 55%;
    margin: 50px auto;
    flex-direction: row;

    button {
      order: 1;
    }

    span {
      order: 2;
    }
  }
`;

export const Total = styled.span`
  @media ${devices.mobileS} {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media ${devices.tablet} {
    margin-left: auto;
    font-size: 36px;
    margin-bottom: 0;
  }
`;
