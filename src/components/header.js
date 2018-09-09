import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Logo from '../images/logo.svg'
import Nav from './nav'
//import ReactSVG from 'react-svg';

const Container = styled.div`
  padding: ${props => props.theme.spacing.base}px ${props => props.theme.spacing.base}px ${props => props.theme.spacing.base/2}px;
  height: auto;
  text-align: center;
  position: relative;

  a {
    color: ${props => props.theme.colors.white};
  }

  h1, a, img {
    display: block;
    text-align: center;
    margin: 0 auto;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 10%;
    width: 80%;
    border-top: solid 1px;
    color: #fff;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {/* <ReactSVG
          src={Logo}
          className="logo"
          svgStyle={{ width: 200, height: 100 }}
          evalScripts="always"
          renumerateIRIElements={false}
        /> */}
        <img src={Logo} alt="424" />
      </Link>
    </h1>
    <Nav/>
  </Container>
)

export default Header
