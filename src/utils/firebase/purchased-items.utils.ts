export const getPurchasedItemsFromLocalStorage = () => {
  const purchasedItems = localStorage.getItem('purchasedItems');
  return purchasedItems ? JSON.parse(purchasedItems) : [];
};
