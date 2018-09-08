import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainGrid = styled.div`

`

const ProductsGrid = styled.div`
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${props => props.theme.spacing.base}px;
  `}
`

export default { MainGrid, ProductsGrid }