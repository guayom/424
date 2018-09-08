import React from 'react';
import styled from 'styled-components';
import Buy from '../components/buyButton';
import Img from 'gatsby-image';

export default ({product}) => 
  <div>
    <h2>Comprá tu copia de 2 noches</h2>
    <p>Recibí en tu casa tu copia de 2 noches</p>
    <Img sizes={product.cover.sizes} alt={product.title}/>
    <p>${product.price}</p>
    <Buy
      id={product.id}
      price={product.price}
      image={product.cover.file.url}
      name={product.title}
      description={product.description.description}
      slug={product.slug}
    />
  </div>