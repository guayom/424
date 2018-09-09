import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Buy from '../components/buyButton';
import Img from 'gatsby-image';

const Promo = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.base}px;
  height: calc(100vh - 50px);
  background: url(https://images.ctfassets.net/ivvukpavj6tb/1PSdZBBQFmUuE26uEiSWiw/f7b7139e3166808a054c1ab8bcdcd374/adventure-calm-clouds-414171.jpg?w=414&h=736&fit=fill)  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;  
  padding: ${props => props.theme.spacing.base}px;
  padding-top: calc(110px + 8vh);
  color: #fff;

  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "a t" "a p";
    min-height: 800px;
    background: orange;
    padding: 0;
    padding-top: 122px;
    background: url(https://images.ctfassets.net/ivvukpavj6tb/1PSdZBBQFmUuE26uEiSWiw/f7b7139e3166808a054c1ab8bcdcd374/adventure-calm-clouds-414171.jpg)  no-repeat center center fixed;
  `}

  h2 {
    margin: 0;
  }

  p {
    margin: 5px;
  }
`

const ImageContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  z-index: 1;

  ${breakpoint('tablet')`
    width: 50%;
  `}
`

const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  z-index: 2;

  ${breakpoint('tablet')`
    font-size: 50px;
  `}
`

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-area: t;

  ${breakpoint('tablet')`
    justify-content: flex-end;
  `}
`

const Title = styled.div`
  ${breakpoint('tablet')`
    font-size: 5em;
  `}
`

const Album = styled.div`
  grid-area: a;
  ${breakpoint('tablet')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

const PriceContainer = styled.div`
  grid-area: p;
  ${breakpoint('tablet')`
    font-size: 1.5em;
  `}
`

export default ({product}) => 
  <Promo>
    <Text>
      <div>
        <Title>2 noches</Title>
        <p>Disponible ya en línea</p>
      </div>
    </Text>
    <Album>
      <div>
        <ImageContainer>
          <Img sizes={product.cover.sizes} alt={product.title} />
        </ImageContainer>
      </div>
    </Album>
    <PriceContainer>
      <div>
        <Price>${product.price}</Price>
        <Buy
          id={product.id}
          price={product.price}
          image={product.cover.file.url}
          name={product.title}
          description={product.description.description}
          slug={product.slug}
        />
      </div>
    </PriceContainer>
  </Promo>