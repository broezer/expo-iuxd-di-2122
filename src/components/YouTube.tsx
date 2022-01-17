import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const YouTube: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const ytRef = useRef(null);
  useEffect(() => {
    ytRef.current.src = 'https://www.youtube.com/embed/' + src;

    ytRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, ytRef]);
  return (
    <VideoWrapper>
      <iframe
        ref={ytRef}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="560"
        title="YouTube video player"
        width="314"
      />
    </VideoWrapper>
  );
};

export default YouTube;
