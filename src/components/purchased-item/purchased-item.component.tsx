import { PurchasedItem as PurchasedItemInterface } from '../../store/purchased-items/purchased-items.types';
import {
  BaseSpan,
  ImageContainer,
  PurchasedItemContainer,
  Quantity,
} from './purchased-item.styles';

interface PurchasedItemProps {
  purchasedItem: PurchasedItemInterface;
}

export const PurchasedItem = ({ purchasedItem }: PurchasedItemProps) => {
  const { name, imageUrl, price, quantity } = purchasedItem;

  return (
    <PurchasedItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>{quantity}</Quantity>
      <BaseSpan>{price}</BaseSpan>
    </PurchasedItemContainer>
  );
};

export default PurchasedItem;
