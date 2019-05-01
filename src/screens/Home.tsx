import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Picture from '../components/Picture';
import { PictureData } from '../interfaces/state';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`;

const PictureTitle = styled.h3`
  margin: 20px 0;
  font-weight: 700;
  font-size: 25px;
`;

const Description = styled.p`
  text-align: justify;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 20px 20px 5px;
  flex: 1;
  min-width: 33%;
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
    console.log(this.props)
    return (
      <Wrapper>
        <Title title="NASA" subtitle="Astronomy Picture of the Day" />
        {loading ? <Loader /> : (
          <Card>
            <Picture src={imgUrl} />
            <TextWrapper>
              <PictureTitle>{title}</PictureTitle>
              <Description>{description}</Description>
            </TextWrapper>
          </Card>
        )}
        <Footer />
      </Wrapper>
    )
  }
}

export default Home;