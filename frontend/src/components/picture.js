import React from 'react';

const Picture = ({image, sizes, className}) => {
  const derivatives = [];

  for (const derivative in image) {
    derivatives.push(`${image[derivative].url} ${image[derivative].width}w`);
  }

  const srcSet = derivatives.join();

  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes}/>
      <img src={image.medium.url}
        alt={image.alt}
        loading="lazy"
        className={className}
        />
    </picture>
  );
};

export default Picture;
