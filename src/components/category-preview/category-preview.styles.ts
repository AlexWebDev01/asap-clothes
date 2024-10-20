import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../breackpoints';

export const CategoryPreviewContainer = styled.div`
  @media ${devices.mobileS} {
    h2 {
      margin-top: 0;
    }
  }

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    margin-bottom: 50px;
  }
`;

export const Title = styled(Link)`
  @media ${devices.mobileS} {
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
  }

  @media ${devices.tablet} {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Preview = styled.div`
  @media ${devices.mobileS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
