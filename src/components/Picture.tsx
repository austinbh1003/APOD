import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  flex: 2;
  border-radius: 12px;
  box-shadow: 0 0 15px 5px rgba(0,0,0,.15);
  min-width: 200px;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0,0,0,.25);
    transform: scale(1.01);
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
  onClick: () => void;
}

const Picture:StatelessComponent<Props> = ({src, onClick}) => (
  <Wrapper onClick={onClick}>
    <Image src={src} alt="apod" />
  </Wrapper>
)

export default Picture;