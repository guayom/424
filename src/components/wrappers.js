import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.base}px;
  padding-top: calc(110px + 8vh);

  ${breakpoint('tablet')`
    padding: 0;
    padding-top: 152px;
    width: 80%;
    margin: 0 auto;
  `}
`

const Wrapper = styled.div`
`

const WhiteWrapper = styled.div`
  background: #fff;
`

export default { MainWrapper, Wrapper }