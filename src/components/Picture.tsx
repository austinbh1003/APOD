import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Picture:StatelessComponent<Props> = ({src}) => (
  <img src={src}/>
)

export default Picture;