import styled from 'styled-components';
import { devices } from '../../../breackpoints';

export const PurchasedItemContainer = styled.div`
  @media ${devices.mobileS} {
    width: 95%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const BaseSpan = styled.span`
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
`;
