import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Video = styled.iframe`
  width: 100%;
  flex: 2;
  box-shadow: 0 0 15px 5px rgba(0,0,0,.15);
  min-width: 200px;
  transition: 0.3s ease-out;
  height: 100%;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0,0,0,.25);
    transform: scale(1.005);
    z-index: 0;
  }
`;

const Wrapper = styled.div`
  flex: 6;
  display: block;
  margin: 20px;
`;

interface Props {
  src: string;
}

const Picture:StatelessComponent<Props> = ({src}) => (
  <Wrapper>
    <Video 
      src={src}
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='Apod Video'
    />
  </Wrapper>
)

export default Picture;