import { useSelector } from 'react-redux';
import { selectPurchasedItems } from '../../store/purchased-items/purchased-items.selector';
import PurchasedItem from '../../components/purchased-item/purchased-item.component';

export const Success = () => {
  const purchasedItems = useSelector(selectPurchasedItems);

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      {purchasedItems.map((item) => (
        <PurchasedItem key={item.id} purchasedItem={item} />
      ))}
    </div>
  );
};
