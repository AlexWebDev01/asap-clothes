import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import Spinner from '../../components/spinner/spinner.component';

const Payment = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/shop');
    }
  }, []);

  if (cartItems.length > 0) {
    return <PaymentForm />;
  }

  return <Spinner />;
};

export default Payment;
