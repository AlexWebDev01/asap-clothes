import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorContainer = styled.div`
  color: rgb(229, 62, 62);
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
`;
