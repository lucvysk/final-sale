// import { useState } from 'react';

import { useCartItem } from '@vtex/checkout';

import './final-sale.css';

export const FinalSaleBox = () => {

  const { offerings } = useCartItem();

  const isFinalSale = offerings.filter( offer => {
    return ~offer.name.toLowerCase().indexOf(`final sale`) 
  }).length

  
  if(!isFinalSale) return

  return (
    <div className='finalSaleBox'>
      <p className='finalSaleBox__title'>Final Sale</p>
      <p className='finalSaleBox__text'>Returns not available</p>
    </div>
  );
};
