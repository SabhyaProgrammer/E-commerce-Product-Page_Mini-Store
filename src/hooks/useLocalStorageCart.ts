import { useEffect } from 'react';
import { CartState } from '../reducers/cartReducer';

export const useLocalStorageCart = (state: CartState) => {
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      // Need to rehydrate here or set initial state.
      // For now, simple implementation assuming rehydration handled via state init.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
};
