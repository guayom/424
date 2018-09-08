import React from 'react'
import { ProductsGrid } from '../components/grids'
import Img from 'gatsby-image';
import styled from 'styled-components';

const Product = styled.div`
  margin-bottom: ${props => props.theme.spacing.base}px;
`

const ImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`

const Price = styled.div`
  font-size: 16px;
  color: #333;
`

const Tienda = ({data}) => {
  const Products = data.products.edges.map(p => p.node);

  return (
    <div>
      <ProductsGrid>
        {Products.map(product => (
          <Product key={product.id}>
            <ImageContainer>
              <Img sizes={product.cover.sizes} alt={product.title} />
            </ImageContainer>
            <div>
              <Title>{product.title}</Title>
              <Price>${product.price}</Price>
            </div>
          </Product>
        ))}
      </ProductsGrid>
    </div>
  )}

export default Tienda

export const query = graphql`
  query ProductsQuery {
    products: allContentfulProducto {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          cover {
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
        }
      }
    }
  }
`