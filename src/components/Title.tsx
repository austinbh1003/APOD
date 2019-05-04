import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 30px 0;
`;

const TitleText = styled.h1`
  font-weight: 700;
  font-size: 40px;
  
`;

const SubtitleText = styled.h2`

`;

interface Props {
  title: string;
  subtitle?: string;
}

const Title: StatelessComponent<Props> = ({title, subtitle}) => {

  return (
    <Wrapper>
      <TitleText>{title}</TitleText>
      {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
    </Wrapper>
  )

}

export default Title;