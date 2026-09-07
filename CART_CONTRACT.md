# Cart Contract

Defines the interface for the shared cart state.

## Cart Item Shape
```typescript
interface CartItem {
  productId: string;
  variant: { type: string; value: string } | null;
  quantity: number;
  priceAtAdd: number;
}
```

## Actions
- `ADD_ITEM` (payload: `CartItem`)
- `REMOVE_ITEM` (payload: `{ productId: string, variant: ... | null }`)
- `UPDATE_QUANTITY` (payload: `{ productId: string, variant: ... | null, quantity: number }`)
- `CLEAR_CART`

## API (`useCart` hook)
Returns `{ state: { items: CartItem[] }, dispatch: React.Dispatch<Action> }`
