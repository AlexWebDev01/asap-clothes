import { UUID } from 'crypto';
import { PurchasedItem } from '../../store/purchased-items/purchased-items.types';

export interface Order {
  userUuid: UUID;
  purchase: PurchasedItem[];
  purchaseTotal: number;
  createdAt: Date;
}
