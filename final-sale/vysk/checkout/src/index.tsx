import { defineExtensions } from '@vtex/checkout';
import { FinalSaleBox } from './final-sale/FinalSale';

export default defineExtensions({
  'cart.cart-item.after': FinalSaleBox,
  'delivery.cart-item.after': FinalSaleBox,
  'review.cart-item.after': FinalSaleBox,
  'order-placed.cart-item.after': FinalSaleBox,
});
