import React from 'react'
import { ProductsGrid } from '../components/grids'
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
import letra from '../templates/letra';
var slugify = require('slugify')

const ImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
`

const Tienda = ({ data }) => {
  const albums = data.albums.edges.map(p => p.node).filter(a => a.letras != null);
  const letras = data.letras.edges.map(p => p.node);

  return (
    <div>
      {albums.map(album => 
        <div key={album.id}>
          <ImageContainer>
            <Img sizes={album.cover.sizes} alt={album.titulo} />
          </ImageContainer>
          <h3>{album.titulo}</h3>
          <ol>
            {letras.filter(l => l.release.id === album.id).sort((a,b) => (a.trackNumber - b.trackNumber)).map( track => 
              <li key={track.id}>
                <Link to={`/letras/${slugify(album.titulo, {lower: true})}/${slugify(track.tema, {lower: true})}`}>
                  {track.trackNumber} - {track.tema}
                </Link>
              </li>
            )}
          </ol>
        </div>
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