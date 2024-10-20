import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const ProductCartContainer = styled.div`

@media ${devices.mobileS} {
  width: 140px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
  width: 140px;
    height: 150px;
  }

  button {
    min-width: 80px;
    width: 100px;
    height: 40px;
    opacity: 0.85;
    top: 100px;
    opacity: 0.75;
    display: flex;
    padding: 0;
    font-size: 12px;
    align-self: flex-start;
  }

 &:hover {
  none;
 }
}

@media ${devices.tablet} {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    align-self: center;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
}
`;

export const Footer = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  @media ${devices.tablet} {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
`;

export const Name = styled.span`
  @media ${devices.mobileS} {
    height: auto;
    width: auto;
  }

  @media ${devices.tablet} {
    width: 90%;
  }
`;

export const Price = styled.span`
  @media ${devices.mobileS} {
    width: auto;
  }

  @media ${devices.tablet} {
    width: 10%;
  }
`;
