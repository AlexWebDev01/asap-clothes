import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const CheckoutFooter = styled.div`
  width: 55%;
  display: flex;
  align-item: space-between;
  justify-content: center;
  margin: 0 auto;
`;

export const Total = styled.span`
  margin-left: auto;
  font-size: 36px;
`;
