import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const DirectoryContainer = styled.div`
  @media ${devices.mobileS} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
