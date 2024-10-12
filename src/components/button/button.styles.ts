import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';
import { devices } from '../../breackpoints';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: -0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media ${devices.laptop} {
    &:active {
      transform: scale(0.95);
    }

    &:disabled {
      &:active {
        transform: none;
      }
    }
  }
`;

export const GoogleSigniInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  &:disabled {
    background-color: #999;
    cursor: auto;
    border: none;

    &:hover {
      background-color: #999;
      color: black;
      cursor: auto;
    }
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
