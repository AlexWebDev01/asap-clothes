import styled from 'styled-components';
import { devices } from '../../breackpoints';

export const ProductCartContainer = styled.div`
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

  @media ${devices.mobileS} {
    height: auto;

    img {
      height: 150px;
    }
}
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media ${devices.mobileS} {
    height: auto;
  }
`;

export const Name = styled.span`
  width: 90%;

  @media ${devices.mobileS} {
    height: auto;
    width: auto;
  }
`;

export const Price = styled.span`
  width: 10%;

  @media ${devices.mobileS} {
    width: auto;
  }
`;