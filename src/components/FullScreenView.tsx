import React, { Component } from 'react';
import styled from 'styled-components';

const FullScreenWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(3, 3, 3, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3%;
  z-index: 1;
`;

const Picture = styled.img`
  max-height: 100%;
  max-width: 100%;
  transition: 0.2s;
  opacity: 0;
  object-fit: contain;
`;

interface Props {
  imgSrc: string;
  closeFullScreenView: () => void;
}

class FullScreenView extends Component<Props> {

  state = {
    visible: false
  }

  public componentDidMount(){
    setTimeout(() => this.setState({visible: true}), 10);
    document.addEventListener("keydown", this.keyEvent, false);
  }

  public componentWillUnmount(){
    document.removeEventListener("keydown", this.keyEvent, false);
  }

  private closeView() {
    const {closeFullScreenView} = this.props;
    this.setState({visible: false});
    setTimeout(() => closeFullScreenView(), 200);
  }

  private keyEvent = (event: KeyboardEvent) => {
    if(event.keyCode === 27) {
      this.closeView();
    }
  }

  public render() {
    const { imgSrc } = this.props;
    const { visible } = this.state;
    return (
      <FullScreenWrapper onClick={() => this.closeView()}>
        <Picture src={imgSrc} style={{opacity: visible ? 1 : 0}}/>
      </FullScreenWrapper>
    )
  }
}

export default FullScreenView;