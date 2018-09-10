import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Album from '../components/trackList'

const Grid = styled.div`
  margin-bottom: ${props => props.theme.spacing.base}px;
  grid-gap: ${props => props.theme.spacing.base}px;

  & > div {
    margin-bottom: ${props => props.theme.spacing.base}px;
  }
  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 1fr 200px;
  `}
`

export default ({ data }) => {
  const { track } = data
  const album = track.release;
  const letras = track.release.letras.sort((a, b) => (a.trackNumber - b.trackNumber));
  return (
    <Grid>
      <div>
        <h1>{track.tema}</h1>
        <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: track.letra.childMarkdownRemark.rawMarkdownBody }} />
      </div>
      <div>
        <Album key={album.id} album={album} letras={letras} display="block" />
      </div>
    </Grid>
  )
}

export const lyricQuery = graphql`
  query lyricQuery($id: String!) {
    track: contentfulLetras(id: {eq: $id}){
      id
      tema
      letra {
        letra
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      release {
        id
        titulo
        letras {
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
`;