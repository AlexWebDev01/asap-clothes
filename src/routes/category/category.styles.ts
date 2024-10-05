import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const CategoryContainer = styled.div`
  @media ${devices.mobileS} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 15px;
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
  }
`;
export const Title = styled.h2`
  @media ${devices.mobileS} {
    font-size: 25px;
    margin: 0 0 15px 0;
  }

  @media ${devices.tablet} {
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
  }
`;
