import React, { FC, useEffect, useRef, useState } from 'react';

const ProfilePictureDI: FC<{ src: string }> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imgRef = useRef(null);
  let imageSrc = src.toLowerCase();
  useEffect(() => {
    imgRef.current.src = '/di/profiles/' + imageSrc + '.jpg';

    imgRef.current.addEventListener('loadeddata', () => {
      setIsLoaded(true);
    });
  }, [src, imgRef]);

  return (
    <img
      ref={imgRef}
      className="object-cover object-center min-h-full"
    />
  );
};

export default ProfilePictureDI;
