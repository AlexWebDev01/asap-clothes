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
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  @media ${devices.mobileS} {
    margin-right: auto;
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
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
