import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Logo from '../images/logo.svg'

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.base}px;
  height: auto;

  a {
    color: ${props => props.theme.colors.white};
  }

  h1, a, img {
    display: block;
  }

  img {
    height: 50px;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        <img src={Logo} alt={siteTitle} />
      </Link>
    </h1>
  </Container>
)

export default Header
