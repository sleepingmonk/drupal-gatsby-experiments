import React, { useState } from 'react';

const Wave = () => {
  const [ waves, setWaves ] = useState(0);
  const label = `🤘 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button onClick={() => setWaves(waves + 1)}>
      {label}
    </button>
  );
};

export default Wave;

export { Wave };
