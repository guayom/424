import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import DefaultTheme from '../layouts/theme';
import { MainGrid } from '../components/grids';

import Header from '../components/header'
import Social from '../components/social'

const Layout = ({ children, data }) => (
  
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <DefaultTheme>
      <MainGrid>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children()}
        <Social networks={data.allContentfulRedes.edges.map(r => r.node)} />
      </MainGrid>
    </DefaultTheme>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRedes {
      edges {
        node {
          id
          titulo
          url
          icon
        }
      }
    }
  }
`
