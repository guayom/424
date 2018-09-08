import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: '400px',
};
const view = 'coverart'; // or 'coverart'
const theme = 'black'; // or 'white'

export default () => 
  <div>
    <SpotifyPlayer
      uri="spotify:album:5fbgtt8EgFk7Lthbc5UWAh"
      size={size}
      view={view}
      theme={theme}
    />
  </div>