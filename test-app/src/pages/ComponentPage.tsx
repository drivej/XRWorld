// import { useEffect, useRef, useState } from 'react';
// import { MyComponent } from 'my-component';
// import audioSrc from '../assets/48K_1713045663.m4a';

import { useEffect, useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import { XRWorld } from '../../../dist';
import { initSpiderverse } from './vectors/spiderverse';

function ComponentPage() {
  const container = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver({ ref: container });
  const world = useRef<XRWorld>(null!);

  useEffect(() => {
    if (container.current) {
      world.current = initSpiderverse();
      container.current.appendChild(world.current.renderer.domElement);
      container.current.appendChild(world.current.vrButton);

      if (world.current && width && height) {
        const w = Math.min(width, height) * 0.8;
        world.current.setSize(w, w);
      }
      return () => {
        world.current.renderer.domElement.remove();
        world.current.vrButton.remove();
      };
    }
  }, []);

  useEffect(() => {
    return () => {
      if (world.current && width && height) {
        const w = Math.min(width, height) * 0.8;
        world.current.setSize(w, w);
      }
    };
  }, [width, height]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div ref={container} style={{ border:'1px solid', flexGrow: 1, width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
      <div style={{ flexShrink: 1 }}>
        <h1 style={{ marginBottom: '2rem', color: '#fff' }}>Component Page</h1>
        <pre>{JSON.stringify({ width, height }, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ComponentPage;
