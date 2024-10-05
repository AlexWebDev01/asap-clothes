import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutFooter,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import { InvertedButton } from '../../components/button/button.styles';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const disabled = cartItems.length === 0;

  const onNavigateHandler = () => navigate('/payment');

  return (
    <>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CheckoutContainer>
      <CheckoutFooter>
        <InvertedButton disabled={disabled} onClick={onNavigateHandler}>
          Continue
        </InvertedButton>
        <Total>Total: ${cartTotal}</Total>
      </CheckoutFooter>
    </>
  );
};

export default Checkout;
