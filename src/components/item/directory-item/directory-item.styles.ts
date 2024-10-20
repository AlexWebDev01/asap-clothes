import styled from 'styled-components';
import { devices } from '../../../breackpoints';

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  @media ${devices.mobileS} {
    width: 100px;
    position: relative;
    top: -100px;
    text-align: center;
    padding: 10px 10px;
    background-color: white;
    opacity: 0.7;
    margin: 0 auto;

    h2 {
      font-weight: bold;
      font-size: 18px;
      color: #4a4a4a;
      text-transform: uppercase;
      margin: 0;
    }

    p {
      font-weight: lighter;
      font-size: 14px;
      margin: 0;
    }
  }

  @media ${devices.tablet} {
    width: auto;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    top: 70px;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  @media ${devices.mobileS} {
    height: 133px;
    padding: 0 1em;
    margin-bottom: 20px;
    width: 100%;
  }

  @media ${devices.tablet} {
    width: 47.5%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    padding: 0;
    position: relative;

    &:last-of-type {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      ${Body} {
        opacity: 0.9;
      }
    }
  }

  @media ${devices.laptop} {
    width: 48%;
  }
`;
