# XRWorld 🥽

A WebXR Virtual Reality library built on Three.js, providing a complete framework for creating immersive VR experiences with hand tracking, controllers, and interactive 3D environments.

## ✨ Features

- 🥽 **WebXR Support** - Full VR session management with hand tracking and controllers
- 🎮 **XR Controllers** - Built-in support for VR controllers (XRRemote)
- 👋 **Hand Tracking** - Native hand tracking with XRHand
- 🎨 **3D Utilities** - Helper functions for creating spheres, boxes, rooms, and more
- 🎯 **Event System** - Comprehensive XR event management
- 📦 **TypeScript** - Full TypeScript support with type definitions
- ⚡ **Performance** - Optimized for smooth VR experiences
- 🔧 **Extensible** - Easy to extend and customize

---

## 📦 Installation

Install directly from GitHub:

```bash
npm install github:drivej/xrworld
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@drivej/xrworld": "github:drivej/xrworld"
  }
}
```

**Peer Dependencies:**

```bash
npm install three@^0.148.0 gsap@^3.11.4
```

---

## 🚀 Quick Start

### Basic VR Scene

```typescript
import { XRWorld, createSphere, createGridRoom } from '@drivej/xrworld';

// Create XR world
const xrWorld = new XRWorld();

// Add a room
const room = createGridRoom();
xrWorld.scene.add(room);

// Add some objects
const sphere = createSphere({
  radius: 0.2,
  color: 0xff0000,
  position: [0, 1.6, -2]
});
xrWorld.scene.add(sphere);

// Start VR session
document.getElementById('vr-button')?.addEventListener('click', () => {
  xrWorld.startVRSession();
});
```

### With React

```tsx
import { useEffect, useRef } from 'react';
import { XRWorld, createGridRoom } from '@drivej/xrworld';

function VRApp() {
  const xrWorldRef = useRef<XRWorld>();

  useEffect(() => {
    const xrWorld = new XRWorld();
    xrWorldRef.current = xrWorld;

    // Setup scene
    const room = createGridRoom();
    xrWorld.scene.add(room);

    return () => {
      // Cleanup
    };
  }, []);

  const handleEnterVR = () => {
    xrWorldRef.current?.startVRSession();
  };

  return (
    <div>
      <button onClick={handleEnterVR}>Enter VR</button>
    </div>
  );
}
```

---

## 📋 API Reference

### Core Classes

#### `XRWorld`
Main class for managing VR sessions and the 3D scene.

```typescript
const xrWorld = new XRWorld();

// Properties
xrWorld.scene          // THREE.Scene
xrWorld.camera         // THREE.PerspectiveCamera
xrWorld.renderer       // THREE.WebGLRenderer
xrWorld.VRSessionActive // boolean

// Methods
xrWorld.startVRSession()
xrWorld.endVRSession()
xrWorld.getCameraObject()
```

#### `XRHand`
Hand tracking support for VR.

```typescript
import { XRHand, XRHandParts } from '@drivej/xrworld';
```

#### `XRRemote`
VR controller support.

```typescript
import { XRRemote } from '@drivej/xrworld';
```

#### `XREventManager`
Event system for XR interactions.

```typescript
import { XREventManager } from '@drivej/xrworld';
```

### Utility Functions

#### 3D Object Creation

```typescript
import {
  createSphere,
  createBox,
  createGridRoom,
  createInfinitePlane,
  createInfiniteColorPlane
} from '@drivej/xrworld';

// Create a sphere
const sphere = createSphere({
  radius: 0.2,
  color: 0xff0000,
  position: [0, 1.6, -2],
  opacity: 1
});

// Create a box
const box = createBox({
  radius: 0.3,
  color: 0x00ff00,
  position: [1, 1.6, -2]
});

// Create a VR room
const room = createGridRoom();
```

#### Helper Functions

```typescript
import {
  clamp,
  interpolate,
  rad,
  rand,
  lookAtObject,
  drawLine
} from '@drivej/xrworld';

// Math utilities
const value = clamp(x, min, max);
const interpolated = interpolate(start, end, t);
const radians = rad(degrees);
const random = rand(min, max);
```

### TypeScript Support

Full TypeScript support with type definitions:

```typescript
import {
  XRWorld,
  XRHand,
  XRRemote,
  UserData,
  VelocityObject,
  XREvent,
  XRRemoteEvent
} from '@drivej/xrworld';
```

---

## 🏗️ Development

### Project Structure

```
@drivej/xrworld/
├── src/                         # Source files
│   ├── index.ts                # Main entry point
│   ├── js/                     # Core XR functionality
│   │   ├── XRWorld.ts          # Main VR world class
│   │   ├── XRHand.ts           # Hand tracking
│   │   ├── XRRemote.ts         # Controller support
│   │   ├── XREventManager.ts   # Event system
│   │   ├── XRUtils.ts          # 3D utilities
│   │   ├── XRBackground.ts     # Background/skybox
│   │   ├── XRMouse.ts          # Mouse input
│   │   └── Utils.js            # General utilities
│   └── utils/                  # Additional utilities
├── dist/                        # Built files (committed!)
│   ├── index.js                # Bundled code
│   ├── index.d.ts              # TypeScript definitions
│   └── *.js.map                # Source maps
├── test-app/                    # React test application
├── package.json                # Package config
├── tsconfig.json               # TypeScript config
└── vite.config.build.ts        # Build config
```

### Building from Source

```bash
# Install dependencies
npm install

# Build the package
npm run build
```

This will:
1. Bundle all source files with Vite
2. Generate TypeScript declarations
3. Output to `dist/` folder

### Making Updates

When you make changes:

```bash
# 1. Make your code changes in src/
# 2. Rebuild
npm run build

# 3. Commit including dist/
git add .
git commit -m "Update build"
git push origin main
```

Users can then update:
```bash
npm install github:drivej/xrworld
```

---

## 🧪 Local Testing

### Quick Test (Easiest)

From the root directory:

```bash
# Install test-app dependencies (first time only)
npm run test:install

# Run the test app
npm test
```

Open http://localhost:5173

The test-app is a React application that demonstrates the XRWorld library.

### Manual Test

```bash
cd test-app
npm install
npm run dev
```

### Using npm link

```bash
# In xrworld directory
npm link

# In your test project
npm link @drivej/xrworld
```

---

## ⚡ Performance

- **WebGL Rendering** - Hardware-accelerated 3D graphics via Three.js
- **VR Optimized** - Designed for smooth 90fps VR experiences
- **Efficient Scene Management** - Optimized object creation and updates
- **Memory Management** - Proper cleanup and resource management

---

## 🌐 Browser Support

Requires browsers with WebXR support:
- **Meta Quest Browser** (Quest 2, Quest 3, Quest Pro)
- **Chrome/Edge** with WebXR Device API
- **Firefox Reality**

Desktop testing:
- Chrome/Edge with WebXR Emulator extension

---

## 📝 License

MIT

---

## 🙏 Credits

Built with [Three.js](https://threejs.org/) - JavaScript 3D Library

---

## 🔗 Links

- **Repository**: https://github.com/drivej/xrworld
- **Issues**: https://github.com/drivej/xrworld/issues
- **Three.js**: https://threejs.org/
- **WebXR**: https://immersiveweb.dev/

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the examples in this README
2. Review the TypeScript definitions
3. Check the test-app for usage examples
4. Open an issue on GitHub

---

**Happy VR Development!** 🥽✨

