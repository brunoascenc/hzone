import React, { useState, useEffect } from 'react';

const Loading = () => (
  <div className="spinner">
    <div className="spinner-container">
      <div className="spinner-overlay"></div>
    </div>
  </div>
);

const Spinner = (delay) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), delay);
  }, [delay]);
  return ready && <Loading />;
};

export default Spinner;
