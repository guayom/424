import React from 'react';
import Spotify from '../components/spotify';
import PromoVinilo from '../components/promoVinilo';
import {SecondaryButton} from '../components/buttons';

const Index = ({data}) => {
  return (
    <div>
      <PromoVinilo product={data.product}/>
      <SecondaryButton to="/tienda">Ver más productos</SecondaryButton>
      <Spotify />
    </div>
  )
}

export default Index

export const indexQuery = graphql`
  query indexQuery {
    product: contentfulProducto(id: {eq: "c5BtAigd53qcU2OKyQwcsaW"}){
      id
      title
      price
      slug
      cover {
        file {
          url
        }
        sizes {
          src
          base64
          tracedSVG
          srcSet
          srcSetWebp
          sizes
          aspectRatio
        }
      }
      description{
        description
      }
    }
  }
`;