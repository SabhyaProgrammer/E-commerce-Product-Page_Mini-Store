# Foundry Goods Mini Store Demo

A minimalist e-commerce portfolio demonstration for Foundry Goods.

## Getting Started

1. `npm install`
2. `npm run dev`

## Features

- **Responsive Design**: Mobile-first, dark theme (`#18181A` bg, `#F8F7F4` ink, `#E03E3E` accent).
- **Cart System**: Global state management with Context + `useReducer`, `localStorage` persistence.
- **Shop**: Category filtering, price sorting, product grid.
- **Product Detail**: Variant selection, quantity stepper, related products.
- **Checkout**: Multi-field form validation, order summary, simulated payment processing, and order confirmation.
- **Accessibility**: Semantic HTML, ARIA labels.

## Adding Products

Edit `src/data/productsData.ts` to add, update, or remove products.

## Payment Gateway

Placeholder `processPayment()` is located in `src/pages/Checkout.tsx`. Replace with real Stripe integration as needed.
