import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  border-radius: 12px;
  box-shadow: 0 0 15px 5px rgba(0,0,0,.15);
  margin: 20px;
  width: 50%;
  height: 50%;
`;

interface Props {
  src: string;
}

const Picture:StatelessComponent<Props> = ({src}) => (
  <Image src={src} alt="apod" />
)

export default Picture;