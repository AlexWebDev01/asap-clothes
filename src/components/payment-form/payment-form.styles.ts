import styled from 'styled-components';
import Button from '../button/button.component';
import { Total } from '../item/item-list-footer/item-list-footer.styles';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 500px;
`;

export const PaymentFormFooter = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
`;

export const Note = styled.span`
  font-size: 14px;
  color: #767676;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ValidationError = styled.span`
  font-size: 14px;
  color: #e53e3e;
  margin-top: 10px;
`;

export const PaymentTotal = styled(Total)`
  margin: 0;
`;
