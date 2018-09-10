import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default ({ data }) => {
  const { track } = data
  return (
    <div>
      <h1>{track.tema}</h1>
      <div style={{ whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{ __html: track.letra.childMarkdownRemark.rawMarkdownBody }} />
    </div>
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
    }
  }
`;