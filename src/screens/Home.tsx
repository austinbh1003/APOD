import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Picture from '../components/Picture';
import FullScreenView from '../components/FullScreenView';
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
  font-size: 30px;
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
  justify-content: center;
  margin: 0 10px 20px 10px;
  flex: 6;
  min-width: 50%;
`;

interface Props {
  loadApod: () => void;
  loading: boolean;
  pictureData: null | PictureData;
  fullScreenViewVisible: boolean;
  closeFullScreenView: () => void;
  openFullScreenView: () => void;
}

class Home extends Component<Props> {

  componentDidMount() {
    this.props.loadApod();
  }

  render() {
    const { loading, pictureData, fullScreenViewVisible, openFullScreenView, closeFullScreenView } = this.props;
    const imgUrl = pictureData ? pictureData.url : "";
    const title = pictureData ? pictureData.title : "";
    const description = pictureData ? pictureData.explanation : "";
    return (
      <Wrapper>
        {fullScreenViewVisible && <FullScreenView imgSrc={imgUrl} closeFullScreenView={closeFullScreenView} />}
        <Header />
        {loading ? <Loader /> : (
          <ContentWrapper>
            <Picture src={imgUrl} onClick={() => openFullScreenView()} />
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