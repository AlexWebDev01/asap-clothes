import PurchasedItem from '../item/purchased-item/purchased-item.component';
import { Order } from './purchase.interface';

interface PurchaseProps {
  order: Order;
}
export const Purchase = ({ order }: PurchaseProps) => {
  return (
    <>
      {order.purchase.map((purchasedItem) => (
        <PurchasedItem key={purchasedItem.id} purchasedItem={purchasedItem} />
      ))}
    </>
  );
};
