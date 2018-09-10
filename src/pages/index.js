import React from 'react';
import Spotify from '../components/spotify';
import {SecondaryButton} from '../components/buttons';

const Index = ({data}) => {
  return (
    <div>
      <SecondaryButton to="/tienda">Ver más productos</SecondaryButton>
      <Spotify />
    </div>
  )
}

export default Index