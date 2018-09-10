import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Img from 'gatsby-image';

var slugify = require('slugify');

const Album = styled.div`
  display: ${props => props.display};
  grid-template-columns: 100px 1fr;
  grid-gap: ${props => props.theme.spacing.base}px;
  margin-bottom: ${props => props.theme.spacing.base}px;

  ${breakpoint('tablet')`
    grid-template-columns: 300px 1fr;
  `}
`

const ImageContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.base / 2}px;
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

    &.active {
      font-weight: bold;
    }
  }
`

export default ({album, letras, display}) => 
  <Album display={display}>
    <ImageContainer>
      <Img sizes={album.cover.sizes} alt={album.titulo} />
    </ImageContainer>
    <div>
      <Title>{album.titulo}</Title>
      <TrackList>
        {letras.map(track =>
          <li key={track.id}>
            <Link 
              activeClassName="active"
              to={`/letras/${slugify(album.titulo, { lower: true })}/${slugify(track.tema, { lower: true })}`}>
              {track.tema}
            </Link>
          </li>
        )}
      </TrackList>
    </div>
  </Album>
  