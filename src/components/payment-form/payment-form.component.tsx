import { useState, FormEvent } from 'react';
import {
  AddressElement,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  Note,
  PaymentTotal,
  PaymentFormFooter,
  ValidationError,
  CardContainer,
} from './payment-form.styles';
import { useNavigate } from 'react-router-dom';
import { setCartItems } from '../../store/cart/cart.action';
import { setPurchasedItems } from '../../store/purchased-items/purchased-items.action';
import { PurchasedItem } from '../../store/purchased-items/purchased-items.types';
import { createUserPurchaseDocument } from '../../utils/firebase/firebase.utils';

const ifValidCardElement = (
  card: StripeCardElement | null,
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [validationError, setValidationError] = useState('');

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const userDetails = elements.getElement(AddressElement);
    const cardDetails = elements.getElement(CardElement);

    if (!userDetails) {
      return;
    }

    // @ts-expect-error Hidden property
    if (cardDetails._empty || !cardDetails._complete) {
      setValidationError('Please provide valid card details');
      return;
    }

    const user = (await userDetails.getValue()).value;

    setIsProcessingPayment(true);

    try {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'post',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        },
      ).then((res) => res.json());

      const clientSecret = response.paymentIntent.client_secret;

      if (!ifValidCardElement(cardDetails)) return;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser?.displayName ?? user.name,
          },
          metadata: {
            name: user.name,
            city: user.address.city,
            country: user.address.country,
            line1: user.address.line1,
            line2: user.address.line2,
            postal_code: user.address.postal_code,
            state: user.address.state,
          },
        },
      });

      if (paymentResult.error) {
        setValidationError(paymentResult.error.message as string);

        return;
      }

      if (paymentResult.paymentIntent.status !== 'succeeded') {
        throw new Error('Payment failed');
      }

      const purchasedItems: PurchasedItem[] = cartItems.map((item) => ({
        ...item,
        purchaseDate: new Date(),
      }));

      await createUserPurchaseDocument(currentUser, purchasedItems, cartTotal);

      setIsProcessingPayment(false);

      dispatch(setPurchasedItems(purchasedItems));
      dispatch(setCartItems([]));
      navigate('/success');
    } catch (error) {
      console.log((error as Error).message);
      setIsProcessingPayment(false);
      setValidationError('Payment failed');
    }
  };

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment</h2>
      <FormContainer onSubmit={paymentHandler}>
        <AddressElement
          options={{
            mode: 'shipping',
            defaultValues: { name: currentUser?.displayName },
          }}
        />
        <CardContainer>
          <CardElement onChange={() => setValidationError('')} />
          {validationError && (
            <ValidationError>{validationError}</ValidationError>
          )}
        </CardContainer>
        <PaymentFormFooter>
          <PaymentTotal>Total: ${cartTotal}</PaymentTotal>
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
          >
            Pay now
          </PaymentButton>
        </PaymentFormFooter>
        <Note>
          *It's a test payment method. Do not provide your card credentials.
          <br />
          Test card credentials: 4242 4242 4242 4242{' '}
        </Note>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
