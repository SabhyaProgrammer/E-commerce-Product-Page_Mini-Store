export interface CartItem {
  productId: string;
  variant: { type: string; value: string } | null;
  quantity: number;
  priceAtAdd: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; variant: any | null } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; variant: any | null; quantity: number } }
  | { type: 'CLEAR_CART' };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          JSON.stringify(item.variant) === JSON.stringify(action.payload.variant)
      );
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(item.productId === action.payload.productId && JSON.stringify(item.variant) === JSON.stringify(action.payload.variant))
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId && JSON.stringify(item.variant) === JSON.stringify(action.payload.variant)
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};
