import React from 'react'
import { ProductsGrid } from '../components/grids'
import Img from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';
var slugify = require('slugify')

const ImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
`

const Tienda = ({ data }) => {
  const albums = data.albums.edges.map(p => p.node).filter(album => album.letras != null);

  return (
    <div>
      {albums.map(album => 
        <div key={album.id}>
          <ImageContainer>
            <Img sizes={album.cover.sizes} alt={album.titulo} />
          </ImageContainer>
          <h3>{album.titulo}</h3>
          <ol>
            {album.letras.sort((a,b) => (a.trackNumber - b.trackNumber)).map( track => 
              <li>
                <Link to={`${slugify(album.titulo, {lower: true})}/${slugify(track.tema, {lower: true})}`}>
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
    albums: allContentfulReleases {
      edges {
        node {
          titulo
          release
          letras{
            id
            tema
            trackNumber
          }
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