import { useSelector } from 'react-redux';
import {
  selectPurchasedItems,
  selectPurchasedItemsTotal,
} from '../../store/purchased-items/purchased-items.selector';
import PurchasedItem from '../../components/item/purchased-item/purchased-item.component';
import { Heading, SuccessLayout, Total } from './success.styles';
import { ItemListHeader } from '../../components/item/item-list-header/item-list-header.component';

export const Success = () => {
  const purchasedItems = useSelector(selectPurchasedItems);
  const purchasedItemsTotal = useSelector(selectPurchasedItemsTotal);

  return (
    <SuccessLayout>
      <Heading>Thank you for your purchase!</Heading>
      <ItemListHeader />
      {purchasedItems.map((item) => (
        <PurchasedItem key={item.id} purchasedItem={item} />
      ))}
      <Total>Total: ${purchasedItemsTotal}</Total>
    </SuccessLayout>
  );
};
