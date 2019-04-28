import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border-radius: 12px;
`;

const Card: StatelessComponent = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper> 
)

export default Card;