import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Buy from '../components/buyButton';

const ProductDetailGrid = styled.div`
  ${breakpoint ('tablet')`
    display: grid;
    grid-gap: ${props => props.theme.spacing.base}px;
    grid-template-areas: "l r" "b b";
  `}
`

const ImageContainer = styled.div`
  grid-area: l;
`

const Details = styled.div`
  grid-area: r;
`

const Description = styled.div`
  grid-area: b;
`

export default ({data}) => {
  const { product } = data
  return (
    <ProductDetailGrid>
      <ImageContainer>
        <Img sizes={product.cover.sizes} alt={product.title} />
      </ImageContainer>
      <Details>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <Buy
          id={product.id}
          price={product.price}
          image={product.cover.file.url}
          name={product.title}
          description={product.description.description}
          slug={product.slug}
          />
      </Details>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: product.description.childMarkdownRemark.html }} />
      </Description>
    </ProductDetailGrid>
)}

export const productQuery = graphql`
  query productQuery($id: String!) {
    product: contentfulProducto(id: {eq: $id}){
      id
      title
      price
      slug
      cover {
        file {
          url
        }
        sizes(quality: 80){
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description{
        description
        childMarkdownRemark{
          html
          excerpt
        }
      }
    }
  }
`;