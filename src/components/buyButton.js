import React from 'react';
import { PrimaryButton } from '../components/buttons';

export default ({ id, price, image, name, description, slug}) => (
  <PrimaryButton
    to='#'
    className='snipcart-add-item'
    data-item-id={id}
    data-item-price={price}
    data-item-image={image}
    data-item-name={name}
    data-item-description={description}
    data-item-url={"https://develop--424.netlify.com/tienda/" + slug}>
    Comprar
  </PrimaryButton>
)