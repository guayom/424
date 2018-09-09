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
  z-index: 99;
  
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: ${props => props.theme.spacing.base}px;
    text-align: left;
    margin: 0 auto;
    padding: ${props => props.theme.spacing.base}px 10%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  `}

  a {
    color: ${props => props.theme.colors.white};
  }

  h1, a, img {
    display: block;
    text-align: center;
    margin: 0 auto;

    ${breakpoint('tablet')`
      text-align: left;
    `}
  }

  img {
    height: 8vh;
    ${breakpoint('tablet')`
      height: auto;
    `}
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
