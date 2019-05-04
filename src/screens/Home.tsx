import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Picture from '../components/Picture';
import { PictureData } from '../interfaces/state';
import Header from '../components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  min-height: 100vh;
  justify-content: space-between;
`;

const PictureTitle = styled.h3`
  margin: 20px 0;
  font-weight: 700;
  font-size: 25px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

const Description = styled.p`
  text-align: justify;
  line-height: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 20px 20px 5px;
  flex: 6;
`;

interface Props {
  loadApod: () => void;
  loading: boolean;
  pictureData: null | PictureData;
}

class Home extends Component<Props> {

  componentDidMount() {
    this.props.loadApod();
  }

  render() {
    const { loading, pictureData } = this.props;
    const imgUrl = pictureData ? pictureData.url : "";
    const title = pictureData ? pictureData.title : "";
    const description = pictureData ? pictureData.explanation : "";
    return (
      <Wrapper>
        <Header />
        {loading ? <Loader /> : (
          <ContentWrapper>
            <Picture src={imgUrl} />
            <TextWrapper>
              <PictureTitle>{title}</PictureTitle>
              <Description>{description}</Description>
            </TextWrapper>
          </ContentWrapper>
        )}
        <Footer />
      </Wrapper>
    )
  }
}

export default Home;