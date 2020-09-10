import React from 'react';

const Picture = ({image, alt, sizes}) => {

  const derivatives = [];
  let src = "";

  image.forEach(derivative => {
    if (derivative.small) {
      src = derivative.small
      derivatives.push(`${derivative.small} 300w`)
    }
    if (derivative.medium) {
      derivatives.push(`${derivative.medium} 600w`)
    }
    if (derivative.large) {
      derivatives.push(`${derivative.large} 1200w`)
    }
    if (derivative.xl) {
      derivatives.push(`${derivative.xl} 1800w`)
    }
    if (derivative.xxl) {
      derivatives.push(`${derivative.xxl} 2400w`)
    }
  })

  const srcSet = derivatives.join();
  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes}/>
      <img src={src}
        alt={alt}
        />
    </picture>
  );
};

export default Picture;
