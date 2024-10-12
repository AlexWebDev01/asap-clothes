import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/item/checkout-item/checkout-item.component';

import { CheckoutContainer, ShoppingLink } from './checkout.styles';
import { useNavigate } from 'react-router-dom';
import { ItemListHeader } from '../../components/item/item-list-header/item-list-header.component';
import { ItemListFooter } from '../../components/item/item-list-footer/item-list-footer.componen';

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const disabled = cartItems.length === 0;

  return (
    <>
      <CheckoutContainer>
        {cartItems.length > 0 && (
          <>
            <ItemListHeader
              displayBlocks={[
                'Product',
                'Description',
                'Quantity',
                'Price',
                'Remove',
              ]}
            />
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </>
        )}
        {cartItems.length === 0 && (
          <>
            <h1>Your cart is empty</h1>
            <h2>
              Let's go <ShoppingLink to={'/shop'}>shopping!</ShoppingLink>
            </h2>
          </>
        )}
      </CheckoutContainer>
      <ItemListFooter
        total={cartTotal}
        disabled={disabled}
        onNavigate={() => navigate('/payment')}
      />
    </>
  );
};

export default Checkout;
