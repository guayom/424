import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export default ({ data }) => {
  const { track } = data
  return (
    <div>
      <h1>{track.tema}</h1>
      <div dangerouslySetInnerHTML={{ __html: track.letra.childMarkdownRemark.html }} />
    </div>
  )
}

export const lyricQuery = graphql`
  query lyricQuery($id: String!) {
    track: contentfulLetras(id: {eq: $id}){
      id
      tema
      letra {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;