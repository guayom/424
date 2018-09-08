import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const MainWrapper = styled.div`
  padding: ${props => props.theme.spacing.base}px;
`

export default { MainWrapper }