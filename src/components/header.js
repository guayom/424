import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Logo from '../images/logo.svg'
import Nav from './nav'
import { timingSafeEqual } from 'crypto';
//import ReactSVG from 'react-svg';

const Container = styled.div`
  padding: ${props => props.theme.spacing.base}px ${props => props.theme.spacing.base}px ${props => props.theme.spacing.base/2}px;
  height: auto;
  text-align: center;
  position: relative;
  z-index: 99;
  transition: background 1s;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${props => props.scrolled ? "rgba(0,0,0,0.8)" : "transparent"};
  
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: ${props => props.theme.spacing.base}px;
    text-align: left;
    margin: 0 auto;
    padding: ${props => props.theme.spacing.base}px 10%;
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
    left: ${props => props.theme.spacing.base}px;
    width: calc(100% - ${props => props.theme.spacing.base * 2}px);
    border-top: solid 1px;
    color: #fff;
    transition: opacity .5s;
    opacity: ${props => props.scrolled ? "0" : "1"};

    ${breakpoint('tablet')`
      width: 80%;
      left: 10%;
    `}
  }

  .scrolled {
    background: purple;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    const offset = e.target.body.childNodes[0].getBoundingClientRect().top;

    if (offset == 0) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
    
  }

  render() {
    return (
      <Container 
        scrolled={this.state.scrolled}
        innerRef={e => this.container = e}
        >
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
        <Nav />
      </Container>
    )
  }
}

export default Header
