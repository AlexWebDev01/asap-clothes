import { useSelector } from 'react-redux';
import { Purchase } from '../../components/purchase/purchase.component';
import { Order } from '../../components/purchase/purchase.interface';
import { selectPurchaseHistory } from '../../store/user/user.selector';
import { BaseSpan, HistoryContainer, HistoryFooter } from './history.styles';

export const History = () => {
  const purchaseHistory: Order[] = useSelector(selectPurchaseHistory);

  const formatDate = (date: Date) => new Date(date).toLocaleDateString('en-US');

  return (
    <>
      {purchaseHistory.map((order) => (
        <HistoryContainer key={order.createdAt.toString()}>
          <Purchase order={order} />
          <HistoryFooter>
            <BaseSpan>{formatDate(order.createdAt)}</BaseSpan>
            <BaseSpan>Total: ${order.purchaseTotal}</BaseSpan>
          </HistoryFooter>
        </HistoryContainer>
      ))}
    </>
  );
};
