import React from 'react';

const Image = ({image, sizes, className}) => {

  const derivatives = [];

  for (const derivative in image) {
    if (image[derivative].url) {
      derivatives.push(`${image[derivative].url} ${image[derivative].width}w`);
    }
  }

  const srcSet = derivatives.join();

  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={image.small.url}
      alt={image.alt}
      className={className}
      />
  );
};

export default Image;
