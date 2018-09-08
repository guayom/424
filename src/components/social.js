import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Icon } from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { youtube } from 'react-icons-kit/fa/youtube';
import { spotify } from 'react-icons-kit/fa/spotify';
import { apple } from 'react-icons-kit/fa/apple';
import { soundcloud } from 'react-icons-kit/fa/soundcloud';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Icons = {
  instagram: instagram,
  facebook: facebook,
  twitter: twitter,
  spotify: spotify,
  youtube: youtube,
  apple: apple,
  soundcloud: soundcloud,
}

function getIcon(network) {
  const NetworkIcon = Icons[network];
  return <Icon icon={NetworkIcon} />
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

  ${breakpoint('tablet')`
    top: 0;
    bottom: 0;
    left: 0;
    right: initial;
    height: 100vh;
    padding: ${props => props.theme.spacing.base}px ${props => props.theme.spacing.base / 1.5}px;
  `}

  a {
    color: ${props => props.theme.colors.white};
    font-size: 20px;

    ${breakpoint('tablet')`
      display: block;
      font-size: 30px;
      margin-bottom: ${props => props.theme.spacing.base}px;
    `}
  }

  ul {
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    margin: 0;
    padding: 0;

    ${breakpoint('tablet')`
      display: block;
    `}
  }

  li {
    text-align: center;

    ${breakpoint('tablet')`
      display: block;
    `}
  }
`

export default ({networks}) =>
  <Nav count={networks.length}>
    <ul>
      {networks.map(network => (
        <li key={network.id}>
          <OutboundLink href={network.url} rel="noopener noreferrer" target="_blank">
            {getIcon(network.icon)}
          </OutboundLink>
        </li>
      ))}
    </ul>
  </Nav>