import React, { FC, useEffect, useRef, useState } from 'react';

const Visuals: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.src = '/di/visuals/' + src + '_Booklet_Visual.jpg';

    imgRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, imgRef]);

  return <img ref={imgRef} alt="CMD EXPO Jaar 2" className="w-full" />;
};

export default Visuals;
