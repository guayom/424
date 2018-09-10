import React from 'react'
import { ProductsGrid } from '../components/grids'
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Link from 'gatsby-link';
import letra from '../templates/letra';
var slugify = require('slugify')

const ImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
`

const Album = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: ${props => props.theme.spacing.base }px;
  margin-bottom: ${props => props.theme.spacing.base }px;

  ${breakpoint('tablet')`
    grid-template-columns: 300px 1fr;
  `}
`

const Title = styled.h3`
  margin: 0;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
`

const TrackList = styled.ol`
  list-style-type: decimal;
  margin: 0;
  padding: 0;
  padding-left: 20px;

  li {
    padding-left: 5px;
  }
  a {
    color: #000;
  }
`

const Tienda = ({ data }) => {
  const albums = data.albums.edges.map(p => p.node).filter(a => a.letras != null);
  const letras = data.letras.edges.map(p => p.node);

  return (
    <div>
      {albums.map(album => 
        <Album key={album.id}>
          <ImageContainer>
            <Img sizes={album.cover.sizes} alt={album.titulo} />
          </ImageContainer>
          <div>
            <Title>{album.titulo}</Title>
            <TrackList>
              {letras.filter(l => l.release.id === album.id).sort((a, b) => (a.trackNumber - b.trackNumber)).map(track =>
                <li key={track.id}>
                  <Link to={`/letras/${slugify(album.titulo, { lower: true })}/${slugify(track.tema, { lower: true })}`}>
                    {track.tema}
                  </Link>
                </li>
              )}
            </TrackList>
          </div>
        </Album>
      )}
    </div>
  )
}

export default Tienda

export const query = graphql`
  query LetrasQuery {
    letras: allContentfulLetras {
    edges {
      node {
        id
        tema
        trackNumber
        letra {
          childMarkdownRemark {
            html
          }
        }
        release {
          id
        }
      }
    }
  }
    albums: allContentfulReleases {
      edges {
        node {
          id
          letras{
            id
          }
          titulo
          release
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