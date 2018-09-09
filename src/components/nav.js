import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const NavList = styled.ul`
  padding: 0;
  margin: ${props => props.theme.spacing.base / 2}px 0 0;

  ${breakpoint('tablet')`
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
  `};
`

const NavItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  font-size: 22px;

  ${breakpoint('tablet')`
    margin-right: ${props => props.theme.spacing.base}px;
  `};

  .active {
    border-bottom: 1px solid;
  }
`

const Items = [
  {title: "Tienda", url: "tienda"},
  {title: "Letras", url: "letras"},
]

const Item = ({title, url}) => (
  <NavItem>
    <Link activeClassName="active" to={`/${url}`}>{title}</Link>
  </NavItem>
)

export default () => 
  <nav>
    <NavList>
      {Items.map(item => 
        <Item 
          key={item.url}
          title={item.title} 
          url={item.url} />
      )}
    </NavList>
  </nav>