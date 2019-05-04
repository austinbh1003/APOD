import React, { StatelessComponent } from 'react';
import styled from 'styled-components';
import Title from './Title';

const Wrapper = styled.div`
  border-bottom: 1px solid rgb(83, 87, 93);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

const CurrentDate = styled.p`
  font-size: 20px;
  color: #bebebe;
`;

const Header: StatelessComponent = () => {
  const currentDate = new Date().toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <Wrapper>
      <Title title="NASA" subtitle="Astronomy Picture of the Day" />
      <CurrentDate>{currentDate}</CurrentDate>
    </Wrapper>
  )
}


export default Header;