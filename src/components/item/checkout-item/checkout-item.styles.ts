import styled from 'styled-components';
import { devices } from '../../../breackpoints';

export const CheckoutItemContainer = styled.div`
  @media ${devices.mobileS} {
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 16px;
    align-items: center;
    justify-content: center;
  }

  @media ${devices.tablet} {
    font-size: 20px;
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
  @media ${devices.mobileS} {
    width: 23%;
    text-align: center;
  }

  @media ${devices.tablet} {
    text-align: left;
  }
`;
export const Quantity = styled(BaseSpan)`
  @media ${devices.mobileS} {
    display: flex;
    justify-content: center;
  }

  @media ${devices.tablet} {
    justfiy-content: auto;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  @media ${devices.tablet} {
    padding-left: 12px;
    cursor: pointer;
  }
`;
