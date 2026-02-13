// import { useEffect, useRef, useState } from 'react';
// import { MyComponent } from 'my-component';
// import audioSrc from '../assets/48K_1713045663.m4a';

// import { } from 'XRWorld';

function ComponentPage() {
  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log('WavePage unmounting, calling destroy');
  //     destroy?.();
  //   };
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '2rem', color: '#fff' }}>Component Page</h1>
      {/* <MyComponent /> */}
      <pre>{JSON.stringify({}, null, 2)}</pre>
    </div>
  );
}

export default ComponentPage;
