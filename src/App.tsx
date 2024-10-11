import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { RootState } from './store/store';
import { Success } from './routes/success/success.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(
  () => import('./routes/authentication/authentication.component'),
);
const Navigation = lazy(
  () => import('./routes/navigation/navigation.components'),
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Payment = lazy(() => import('./routes/payment/payment.component'));

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate('/auth');
    }
  }, [currentUser]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
