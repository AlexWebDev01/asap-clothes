import { HeaderBlock, HeaderContainer } from './item-list-header.styles';

type ItemListHeaderDisplayBlock =
  | 'Product'
  | 'Description'
  | 'Quantity'
  | 'Price'
  | 'Remove';

interface ItemListHeaderProps {
  displayBlocks?: ItemListHeaderDisplayBlock[];
}

export const ItemListHeader = ({
  displayBlocks = ['Product', 'Description', 'Quantity', 'Price'],
}: ItemListHeaderProps) => {
  return (
    <HeaderContainer>
      {displayBlocks.map((block) => (
        <HeaderBlock key={block}>
          <span>{block}</span>
        </HeaderBlock>
      ))}
    </HeaderContainer>
  );
};
