import React, { FC, useEffect, useRef, useState } from 'react';

const Miro: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const miroRef = useRef(null);
  useEffect(() => {
    miroRef.current.src = 'https://miro.com/app/live-embed/' + src + '=/';

    miroRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, miroRef]);

  return (
    <iframe
      ref={miroRef}
      allowFullScreen
      height="668"
      scrolling="no"
      width="768"
    />
  );
};

export default Miro;
