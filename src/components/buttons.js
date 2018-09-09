import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const PrimaryButton = styled(Link)`
  padding: ${props => props.theme.spacing.base / 2}px ${props => props.theme.spacing.base}px;
  display: block;
  color: ${props => props.theme.colors.main};
  transition: background .5s ease, color .5s ease;
  background: ${props => props.theme.colors.main};
  color: #fff;
  text-align: center;
  margin: ${props => props.theme.spacing.base / 2}px 0;

  ${breakpoint('tablet')`
    display: inline-block;
  `}

  &:hover {
  }

  &:active {
    transform:  translateY(2px);
  }
`

const SecondaryButton = styled(Link)`
  border: solid 1px;
  padding: ${props => props.theme.spacing.base / 2}px ${props => props.theme.spacing.base}px;
  display: inline-block;
  color: ${props => props.theme.colors.main};
  transition: background .5s ease, color .5s ease;

  &:hover {
    background: ${props => props.theme.colors.main};
    color: #fff;
    border-color: ${props => props.theme.colors.main};
  }

  &:active {
    transform:  translateY(2px);
  }
`

export default { SecondaryButton, PrimaryButton }