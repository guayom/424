import React from 'react'
import Album from '../components/trackList'

const Tienda = ({ data }) => {
  const albums = data.albums.edges.map(p => p.node).filter(a => a.letras != null);
  const letras = data.letras.edges.map(p => p.node).sort((a, b) => (a.trackNumber - b.trackNumber));

  return (
    <div>
      {albums.map(album => 
        <Album key={album.id} album={album} letras={letras.filter(l => l.release.id === album.id)} display="grid" />
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