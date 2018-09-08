import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.sizes.social};
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.base / 2}px ${props => props.theme.spacing.base}px;

  a {
    color: ${props => props.theme.colors.white};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    margin: 0;
    padding: 0;
  }
`

export default ({networks}) =>
  <Nav count={networks.length}>
    <ul>
      {networks.map(network => (
        <li key={network.id}>
          <a href={network.url} rel="noopener noreferrer" target="_blank">{network.titulo}</a>
        </li>
      ))}
    </ul>
  </Nav>