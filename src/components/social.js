import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaSpotify, FaYoutube, FaApple, FaSoundcloud } from 'react-icons/fa';

const Icons = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaTwitter,
  spotify: FaSpotify,
  youtube: FaYoutube,
  apple: FaApple,
  soundcloud: FaSoundcloud,
}

function getIcon(network) {
  const NetworkIcon = Icons[network];
  return <NetworkIcon />
}

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.sizes.social}px;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.base / 2}px ${props => props.theme.spacing.base}px;

  a {
    color: ${props => props.theme.colors.white};
    font-size: 20px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    margin: 0;
    padding: 0;
  }

  li {
    text-align: center;
  }
`

export default ({networks}) =>
  <Nav count={networks.length}>
    <ul>
      {networks.map(network => (
        <li key={network.id}>
          <a href={network.url} rel="noopener noreferrer" target="_blank">{getIcon(network.icon)}</a>
        </li>
      ))}
    </ul>
  </Nav>