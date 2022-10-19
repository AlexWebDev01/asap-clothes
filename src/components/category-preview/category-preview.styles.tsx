import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../breackpoints';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media ${devices.mobileS} {
    
    h2{
      margin-top: 0;
    }
  }
`

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: underline;

  @media ${devices.mobileS} {
    margin-right: auto;
  }
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media ${devices.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }
`