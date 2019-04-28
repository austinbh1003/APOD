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
  margin: 5% 10%;
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
    const imgUrl = pictureData ? pictureData.hdurl : "";

    return (
      <Wrapper>
        <Title title="NASA" subtitle="Astronomy Picture of the Day" />
        {loading ? <Loader /> : (
          <Card>
            pic: 
            <Picture src={imgUrl} />
          </Card>
        )}
        <Footer />
      </Wrapper>
    )
  }
}

export default Home;