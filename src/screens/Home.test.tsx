import React from 'react';
import Home from './Home';
import renderer from 'react-test-renderer';

jest.mock('../components/Header', () => 'Header');
jest.mock('../components/Footer', () => 'Footer');
jest.mock('../components/Loader', () => 'Loader');
jest.mock('../components/Picture', () => 'Picture');
jest.mock('../components/Video', () => 'Video');
jest.mock('../components/FullScreenView', () => 'FullScreenView');

describe('Home screen', () => {

  const defaultProps = {
    loadApod: jest.fn(),
    loading: true,
    pictureData: null,
    fullScreenViewVisible: false,
    closeFullScreenView: jest.fn(),
    openFullScreenView: jest.fn()
  }

  it('renders correctly while loading', () => {
    const tree = renderer
      .create(<Home {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a video loaded', () => {
    const props = {
      ...defaultProps,
      loading: false,
      pictureData: {
        date: "2019-05-20",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        media_type: "video",
        service_version: "v1",
        title: "Planets of the Solar System: Tilts and Spins",
        url: "https://www.youtube.com/embed/my1euFQHH-o?rel=0"
      }
    }
    const tree = renderer
      .create(<Home {...props } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with an image loaded", () => {
    const props = {
      ...defaultProps,
      loading: false,
      pictureData: {
        copyright: "Po Tato",
        date: "2019-05-21",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        hdurl: "https://example.com/hdImage.jpg",
        media_type: "image",
        service_version: "v1",
        title: "Sample title",
        url: "https://example.com/image.jpg"
      }
    };
    const tree = renderer
      .create(<Home {...props } />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
