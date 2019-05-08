import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Picture from '../components/Picture';
import FullScreenView from '../components/FullScreenView';
import { PictureData } from '../interfaces/state';
import Header from '../components/Header';

const PageWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  justify-content: space-between;
  min-height: 100vh;
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

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundCircle = styled.div`
  height: 100vw;
  width: 100vw;
  border-radius: 50vw;
  background: rgba(255, 255, 255, 0.03);
  position: absolute;
  left: -20vw;
  bottom: -40vw;
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
      <PageWrapper>
        <BackgroundWrapper>
          <BackgroundCircle />
        </BackgroundWrapper>
        {fullScreenViewVisible && <FullScreenView imgSrc={imgUrl} closeFullScreenView={closeFullScreenView} />}
        <Wrapper>
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
      </PageWrapper>
    )
  }
}

export default Home;