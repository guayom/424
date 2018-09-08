import React from 'react';

export default ({ id, price, image, name, description, slug}) => (
  <a
    href='#'
    className='snipcart-add-item'
    data-item-id={id}
    data-item-price={price}
    data-item-image={image}
    data-item-name={name}
    data-item-description={description}
    data-item-url={"https://develop--424.netlify.com/tienda/" + slug}>
    Buy
  </a>
)