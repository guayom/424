import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import DefaultTheme from '../layouts/theme';
import { MainGrid } from '../components/grids';
import { MainWrapper } from '../components/wrappers';
import Header from '../components/header'
import Social from '../components/social'
import PromoVinilo from '../components/promoVinilo';

const Layout = ({ children, data, location }) => (
  
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
        {location.pathname == "/" ? <PromoVinilo product={data.product} /> : null}
        <MainWrapper>
          {children()}
        </MainWrapper>
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
    product: contentfulProducto(id: {eq: "c5BtAigd53qcU2OKyQwcsaW"}){
      id
      title
      price
      slug
      cover {
        file {
          url
        }
        sizes {
          src
          base64
          tracedSVG
          srcSet
          srcSetWebp
          sizes
          aspectRatio
        }
      }
      description{
        description
      }
    }
  }
`
