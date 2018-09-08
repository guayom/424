import React from 'react';

export default ({networks}) =>
  <nav>
    <ul>
      {networks.map(network => (
        <li key={network.id}>
          <a href={network.url} rel="noopener noreferrer" target="_blank">{network.titulo}</a>
        </li>
      ))}
    </ul>
  </nav>