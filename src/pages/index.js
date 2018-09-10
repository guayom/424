import React from 'react';
import Spotify from '../components/spotify';
import {SecondaryButton} from '../components/buttons';

const Index = ({data}) => {
  return (
    <div style={{maxWidth: "500px", margin: "0 auto", marginTop: "-150px" }}>
      <Spotify />
    </div>
  )
}

export default Index