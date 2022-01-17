import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

const AsideWrapper = styled.aside`
  min-width: 90vw;
  max-width: 90vw;
  min-height: 57vw;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 2vw rgb(0, 0, 0);
  padding: 0 2vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 2vh;
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Twitchi: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const miroRef = useRef(null);
  useEffect(() => {
    miroRef.current.src = src;

    miroRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, miroRef]);

  return (
    <AsideWrapper>
      <div className="twitch absolute inline-block w-11/12 h-5/6">
        <h2 className="text-center text-white">Livestream is het beste te bekijken via Firefox/Chrome/Safari</h2>
        <div className="twitch-video w-full h-full">
          <iframe
            ref={miroRef}
            allowFullScreen
            className="w-full h-full"
            height="100%"
            scrolling="no"
            width="100%"
          />
        </div>
        
      </div>
    </AsideWrapper>
  );
};

export default Twitchi;
