import { InvertedButton } from '../../button/button.styles';
import { Footer, Total } from './item-list-footer.styles';

interface ItemListFooterProps {
  total: number;
  disabled: boolean;
  onNavigate: () => void;
}

export const ItemListFooter = ({
  total,
  disabled,
  onNavigate,
}: ItemListFooterProps) => {
  return (
    <Footer>
      <InvertedButton disabled={disabled} onClick={onNavigate}>
        Continue
      </InvertedButton>
      <Total>Total: ${total}</Total>
    </Footer>
  );
};
