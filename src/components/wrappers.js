import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.base}px;

  ${breakpoint('tablet')`
    padding: 0;
  `}
`

const WhiteWrapper = styled.div`
  background: #fff;
`

export default { MainWrapper }