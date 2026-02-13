import * as p from "three";
import { Vector2 as S, SphereGeometry as pt, BoxGeometry as Kt, MeshStandardMaterial as Oe, InstancedMesh as mt, DynamicDrawUsage as zt, Vector3 as P, Matrix4 as re, Loader as Xt, LoaderUtils as X, FileLoader as gt, MeshPhysicalMaterial as Y, Color as W, sRGBEncoding as ae, SpotLight as Wt, PointLight as Yt, DirectionalLight as qt, Quaternion as de, Object3D as pe, TextureLoader as Jt, ImageBitmapLoader as Zt, BufferAttribute as ye, InterleavedBuffer as Qt, InterleavedBufferAttribute as $t, LinearMipmapLinearFilter as wt, NearestMipmapLinearFilter as en, LinearMipmapNearestFilter as tn, NearestMipmapNearestFilter as nn, LinearFilter as xt, NearestFilter as sn, RepeatWrapping as Se, MirroredRepeatWrapping as on, ClampToEdgeWrapping as rn, PointsMaterial as an, Material as Te, LineBasicMaterial as cn, DoubleSide as ln, MeshBasicMaterial as $, PropertyBinding as hn, BufferGeometry as yt, SkinnedMesh as un, Mesh as Tt, LineSegments as dn, Line as fn, LineLoop as pn, Points as mn, Group as be, PerspectiveCamera as gn, MathUtils as wn, OrthographicCamera as xn, Skeleton as yn, InterpolateDiscrete as Tn, InterpolateLinear as bt, AnimationClip as bn, Bone as En, Texture as Xe, VectorKeyframeTrack as Mn, QuaternionKeyframeTrack as We, NumberKeyframeTrack as An, FrontSide as Rn, TriangleFanDrawMode as Et, Interpolant as Ln, Box3 as Sn, Sphere as vn, TriangleStripDrawMode as Nn, EventDispatcher as On, MOUSE as Z, TOUCH as Q, Spherical as Ye, Float32BufferAttribute as In } from "three";
import Ie from "gsap";
class ce {
  static createButton(e) {
    const t = document.createElement("button");
    function n() {
      let r = null;
      async function l(u) {
        u.addEventListener("end", d), await e.xr.setSession(u), t.textContent = "EXIT VR", r = u;
      }
      function d() {
        r.removeEventListener("end", d), t.textContent = "ENTER VR", r = null;
      }
      t.style.display = "", t.style.cursor = "pointer", t.style.left = "calc(50% - 50px)", t.style.width = "100px", t.textContent = "ENTER VR", t.onmouseenter = function() {
        t.style.opacity = "1.0";
      }, t.onmouseleave = function() {
        t.style.opacity = "0.5";
      }, t.onclick = function() {
        if (r === null) {
          const u = { optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking", "layers"] };
          navigator.xr.requestSession("immersive-vr", u).then(l);
        } else
          r.end();
      };
    }
    function s() {
      t.style.display = "", t.style.cursor = "auto", t.style.left = "calc(50% - 75px)", t.style.width = "150px", t.onmouseenter = null, t.onmouseleave = null, t.onclick = null;
    }
    function i() {
      s(), t.textContent = "VR NOT SUPPORTED";
    }
    function o(r) {
      s(), console.warn("Exception when trying to call xr.isSessionSupported", r), t.textContent = "VR NOT ALLOWED";
    }
    function a(r) {
      r.style.position = "absolute", r.style.bottom = "20px", r.style.padding = "12px 6px", r.style.border = "1px solid #fff", r.style.borderRadius = "4px", r.style.background = "rgba(0,0,0,0.1)", r.style.color = "#fff", r.style.font = "normal 13px sans-serif", r.style.textAlign = "center", r.style.opacity = "0.5", r.style.outline = "none", r.style.zIndex = "999";
    }
    if ("xr" in navigator)
      return t.id = "VRButton", t.style.display = "none", a(t), navigator.xr.isSessionSupported("immersive-vr").then(function(r) {
        r ? n() : i(), r && ce.xrSessionIsGranted && t.click();
      }).catch(o), t;
    {
      const r = document.createElement("a");
      return window.isSecureContext === !1 ? (r.href = document.location.href.replace(/^http:/, "https:"), r.innerHTML = "WEBXR NEEDS HTTPS") : (r.href = "https://immersiveweb.dev/", r.innerHTML = "WEBXR NOT AVAILABLE"), r.style.left = "calc(50% - 90px)", r.style.width = "180px", r.style.textDecoration = "none", a(r), r;
    }
  }
  static xrSessionIsGranted = !1;
  static registerSessionGrantedListener() {
    if ("xr" in navigator) {
      if (/WebXRViewer\//i.test(navigator.userAgent)) return;
      navigator.xr.addEventListener("sessiongranted", () => {
        ce.xrSessionIsGranted = !0;
      });
    }
  }
}
ce.registerSessionGrantedListener();
class Cn {
  constructor(e = 10, t = 10, n = 1, s = 0) {
    this.cells = [], this.width = 0, this.height = 0, this.columns = 0, this.rows = 0, this.rowWidth = 10, this.colWidth = 10, this.rowWidth = n, this.colWidth = s > 0 ? s : n, this.columns = t, this.rows = e, this.width = this.colWidth * t, this.height = this.rowWidth * e, this.refreshCells();
  }
  refreshCells() {
    this.cells = Array.from({ length: this.rows * this.columns }).map((e, t) => {
      const n = ~~(t / this.columns), s = t % this.columns, i = this.colWidth * s, o = this.rowWidth * n;
      return {
        row: n,
        column: s,
        x: i,
        y: o,
        center: { x: i + this.colWidth * 0.5, y: o + this.rowWidth * 0.5 },
        width: this.colWidth,
        height: this.rowWidth,
        index: t,
        data: {}
      };
    });
  }
  setSize(e, t, n = "cover") {
    this.columns = ~~(e / this.colWidth), this.rows = ~~(t / this.rowWidth), n === "cover" && (this.colWidth = e / this.columns, this.rowWidth = t / this.rows), this.width = e, this.height = t, this.refreshCells();
  }
  getCellAtPoint(e) {
    const t = ~~(e.x / this.colWidth), n = ~~(e.y / this.rowWidth);
    return this.getCellAt(t, n);
  }
  getCellAt(e, t) {
    const n = t * this.columns + e;
    return n < this.cells.length ? this.cells[n] : null;
  }
  getRandomCell(e = () => !0, t = () => {
  }) {
    const n = this.cells.filter(e);
    if (n.length > 0) {
      const s = ~~(n.length * Math.random());
      return t && t(n[s]), n[s];
    } else
      return null;
  }
  getRow(e) {
    const t = this.columns * e, n = t + this.columns;
    return this.cells.slice(t, n);
  }
  getCorner(e) {
    switch (e) {
      case "NW":
        return this.cells[0];
      case "NE":
        return this.cells[this.columns - 1];
      case "SW":
        return this.getRow(this.rows - 1)[0];
      case "SE":
        return this.getRow(this.rows - 1).pop();
    }
  }
}
const Pn = Math.PI / 180;
function qe(c, e, t) {
  return (1 - t) * c + t * e;
}
function Ee(c) {
  return c * Pn;
}
class Mt {
  constructor() {
    this.lookup = {};
  }
  initEvent(e) {
    Object.hasOwnProperty.call(this.lookup, e) || (this.lookup[e] = this.lookup?.[e] ?? []);
  }
  on(e, t, n) {
    this.initEvent(e), this.lookup[e].push({ callback: t, options: n });
  }
  off(e, t) {
    if (this.initEvent(e), t) {
      const n = this.lookup[e].findIndex((s) => s.callback === t);
      n > -1 && this.lookup[e].splice(n, 1);
    } else
      this.lookup[e] = [];
  }
  trigger(e, t) {
    this.initEvent(e), this.lookup[e].forEach((n) => n.callback({ type: e, ...t ?? {} }));
  }
}
var _n = /* @__PURE__ */ ((c) => (c.ArrowUp = "ArrowUp", c.ArrowDown = "ArrowDown", c.ArrowLeft = "ArrowLeft", c.ArrowRight = "ArrowRight", c.Space = " ", c))(_n || {});
class Bs {
  constructor() {
    this.status = {
      ArrowUp: { isDown: !1, userData: { axis: new p.Vector3(0, 0, 0), angle: 0 } },
      ArrowDown: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: Ee(180) } },
      ArrowLeft: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: Ee(90) } },
      ArrowRight: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: Ee(-90) } }
    }, this.arrowIsDown = !1, this.eventManager = new Mt(), document.addEventListener("keydown", this._onKeyDown.bind(this)), document.addEventListener("keyup", this._onKeyUp.bind(this));
  }
  initStatus(e) {
    this.status.hasOwnProperty(e) || (this.status[e] = { isDown: !1, userData: { axis: new p.Vector3(0, 0, 0), angle: 0 } });
  }
  on(e, t, n = {}) {
    return this.eventManager.on(e, t, n), this;
  }
  off(e, t) {
    return this.eventManager.off(e, t), this;
  }
  onPress(e, t, n) {
    return this.on(
      "down",
      (s) => {
        s.key === e && t(s);
      },
      n
    ), this;
  }
  onRelease(e, t, n) {
    return this.on(
      "up",
      (s) => {
        s.key === e && t(s);
      },
      n
    ), this;
  }
  _onKeyDown(e) {
    this.initStatus(e.key), this.status[e.key].isDown = !0, this.eventManager.trigger("down", { keyboard: this, key: e.key });
  }
  _onKeyUp(e) {
    this.initStatus(e.key), this.status[e.key].isDown = !1, this.eventManager.trigger("up", { keyboard: this, key: e.key });
  }
  isDown(e) {
    return this.status[e].isDown;
  }
}
class Gs {
  constructor(e) {
    this.position = new S(-9999999999, -9999999999), this.relative = new S(-9999999999, -9999999999), this.down = { relative: new S(), position: new S() }, this.move = { relative: new S(), position: new S() }, this.drag = { relative: new S(), position: new S() }, this.up = { relative: new S(), position: new S() }, this.isDown = !1, this.isOver = !1, this.eventManager = new Mt(), this.initializedEvents = {}, this.clientX = 0, this.clientY = 0, this.element = e, this.rect = this.element.getBoundingClientRect(), window.addEventListener("resize", this.onResize.bind(this), !1), window.addEventListener("wheel", this.onResize.bind(this), !1);
  }
  initEvent(e) {
    if (!Object.hasOwnProperty.call(this.initializedEvents, e))
      switch (this.initializedEvents[e] = !0, e) {
        case "enter":
          this.element.addEventListener("pointerenter", this._onPointerEnter.bind(this), !1);
          break;
        case "down":
          this.element.addEventListener("pointerdown", this._onPointerDown.bind(this), !1);
          break;
        case "move":
          document.addEventListener("pointermove", this._onPointerMove.bind(this), !1);
          break;
        case "up":
          this.element.addEventListener("pointerup", this._onPointerUp.bind(this), !1);
          break;
        case "leave":
          this.element.addEventListener("pointerleave", this._onPointerLeave.bind(this), !1);
          break;
      }
  }
  on(e, t, n = {}) {
    this.initEvent(e), this.eventManager.on(e, t, n);
  }
  off(e, t) {
    this.eventManager.off(e, t);
  }
  onEnter(e, t) {
    return this.on("enter", e, t), this;
  }
  onLeave(e, t) {
    return this.on("leave", e, t), this;
  }
  onDown(e, t) {
    return this.on("down", e, t), this;
  }
  onMove(e, t) {
    return this.on("move", e, t), this;
  }
  onUp(e, t) {
    return this.on("up", e, t), this;
  }
  onClick(e, t = {}) {
    return this.eventManager.on(
      "up",
      (n) => {
        n.mouse.drag.position.length() < 10 && e(n);
      },
      t
    ), this;
  }
  onResize() {
    this.rect = this.element.getBoundingClientRect(), document.dispatchEvent(new MouseEvent("pointermove", { clientX: this.clientX, clientY: this.clientY }));
  }
  updatePointer(e, t = !0) {
    t && (this.clientX = e.clientX, this.clientY = e.clientY), this.position.x = e.clientX - this.rect.left, this.position.y = e.clientY - this.rect.top, this.relative.x = this.position.x / this.rect.width * 2 - 1, this.relative.y = -(this.position.y / this.rect.height) * 2 + 1, this.isOver = this.position.x >= 0 && this.position.y >= 0 && this.position.x <= this.rect.width && this.position.y <= this.rect.height;
  }
  _onPointerEnter(e) {
    e.preventDefault(), this.isOver = !0, this.eventManager.trigger("enter", { mouse: this });
  }
  _onPointerLeave(e) {
    e.preventDefault(), this.isOver = !1, this.eventManager.trigger("leave", { mouse: this });
  }
  _onPointerDown(e) {
    e.preventDefault(), this.updatePointer(e), this.down.relative.copy(this.relative), this.down.position.copy(this.position), this.isDown = !0, this.eventManager.trigger("down", { mouse: this }), this.drag.relative.set(0, 0), this.drag.position.set(0, 0);
  }
  _onPointerMove(e) {
    e.preventDefault(), this.updatePointer(e), this.move.relative.copy(this.relative), this.move.position.copy(this.position), this.drag.position.subVectors(this.move.position, this.down.position), this.drag.relative.subVectors(this.move.relative, this.down.relative), this.eventManager.trigger("move", { mouse: this });
  }
  _onPointerUp(e) {
    e.preventDefault(), this.updatePointer(e), this.up.relative.copy(this.relative), this.up.position.copy(this.position), this.drag.position.subVectors(this.up.position, this.down.position), this.drag.relative.subVectors(this.up.relative, this.down.relative), this.isDown = !1, this.eventManager.trigger("up", { mouse: this }), this.relative.x = -9999999999, this.relative.y = -9999999999;
  }
}
class Dn {
  constructor(e) {
    this.bgMesh = null, this.world = e;
  }
  // build(images: string | string[], type: 'scene' | 'skybox' | '360' = 'scene') {
  //   switch(type){
  //     case 'skybox' :
  //       this.buildSkyBox(images);
  //       break;
  //     case '360' :
  //       this.build360Background(images);
  //       break;
  //     case 'scene' :
  //       this.buildSceneBackground(images);
  //       break;
  //   }
  //   if (Array.isArray(images) && images.length === 6) {
  //     this.buildSkyBox(images);
  //   } else if (typeof images === 'string') {
  //     this.build360Background(images);
  //   }
  // }
  // remove previos background
  remove() {
    this.world.scene.background = null, this.bgMesh && (this.world.scene.remove(this.bgMesh), this.bgMesh = null);
  }
  // more efficient
  buildSkyBox(e) {
    this.remove();
    const t = ~~qe(this.world.camera.near, this.world.camera.far, 0.5), n = new p.BoxGeometry(t, t, t), s = new p.Mesh(
      n,
      e.map((i) => new p.MeshBasicMaterial({ map: new p.TextureLoader().load(i), side: p.BackSide }))
    );
    this.world.scene.add(s);
  }
  buildSceneBackground(e) {
    const n = new p.CubeTextureLoader().load(e);
    n.transformUv(new p.Vector2(100, 0.5)), this.world.scene.background = n;
  }
  // TODO: handle cross style skybox
  // buildSkyBox2(image:string){
  //   for ( var i = 0; i < 6; i ++ ) {
  //     t[i] = THREE.ImageUtils.loadTexture( imgData ); //2048x256
  //     t[i].repeat.x  = 1 / 8;
  //     t[i].offset.x = i / 8;
  //   }
  // }
  // less efficient
  build360Background(e) {
    this.remove();
    const n = new p.TextureLoader().load(e);
    n.magFilter = p.LinearFilter, n.minFilter = p.LinearFilter;
    const s = new p.ShaderMaterial({
      // fragmentShader: shader.fragmentShader,
      // vertexShader: shader.vertexShader,
      // uniforms: shader.uniforms,
      // depthWrite: false,
      side: p.BackSide
    }), i = ~~qe(this.world.camera.near, this.world.camera.far, 0.5), o = new p.BoxGeometry(i, i, i);
    this.bgMesh = new p.Mesh(o, s), this.world.scene.add(this.bgMesh);
  }
}
class kn {
  constructor(e) {
    this.lookup = {}, this.lookupChildren = {}, this.currentTargets = {}, this.maxClickDistance = 7, this.onMouseDown = () => {
    }, this.onMouseUp = () => {
    }, this.world = e;
  }
  initController(e) {
  }
  initMouse(e) {
    e.onMove = () => {
      const t = e.getSelectedObject(this.getObjects(
        "move"
        /* MOVE */
      ), !1);
      t && this.trigger(t?.object, "move", t);
    }, e.onDown = () => {
      const t = e.getSelectedObject(this.getObjects(
        "down"
        /* DOWN */
      ), !1);
      t && this.trigger(t?.object, "down", t), this.onMouseDown();
    }, e.onUp = () => {
      const t = e.getSelectedObject(this.getObjects(
        "up"
        /* UP */
      ), !1);
      t && this.trigger(t?.object, "up", t), this.onMouseUp();
    };
  }
  renderEvents(e) {
  }
  initEvent(e) {
    Object.prototype.hasOwnProperty.call(this.lookup, e) || (this.lookup[e] = this.lookup?.[e] ?? {}, this.lookupChildren[e] = this.lookupChildren[e] ?? []);
  }
  on(e, t, n, s = {}) {
    this.initEvent(t), this.lookup[t][e.id] = { object: e, callback: n, options: s }, this.lookupChildren[t].push(e), e.userData.selectable = !0, t === "click" && (this.on(e, "down", () => {
    }), this.on(
      e,
      "up",
      () => {
      },
      { isClick: !0 }
    )), t === "enter" && this.on(e, "move", () => {
    });
  }
  off(e, t, n) {
    this.initEvent(t), this.lookup[t] && delete this.lookup[t][e.id], this.lookupChildren[t].push(e);
  }
  getObjects(e) {
    return this.lookupChildren?.[e] ?? [];
  }
  // TODO: enter and leave not quite there
  trigger(e, t, n) {
    if (e) {
      const s = this.lookup?.[t]?.[e.id];
      s && (s.callback && s.callback({ type: t, target: e, intersection: n }), this.currentTargets[t] = e, s.options?.once === !0 && this.off(e, t), t === "up" && s.options?.isClick === !0 && this.world.mouse.mouseUp.distanceTo(this.world.mouse.mouseDown) < this.maxClickDistance && this.currentTargets.down === e && this.trigger(e, "click", n), t === "move" && this.currentTargets.enter !== e && (this.currentTargets.enter && (this.trigger(this.currentTargets.enter, "leave", n), this.currentTargets.enter = void 0), this.trigger(e, "enter", n)));
    } else
      t === "move" && this.currentTargets.enter && (this.trigger(
        this.currentTargets.enter,
        "leave"
        /* LEAVE */
      ), this.currentTargets.enter = void 0);
  }
}
const Je = new re(), Ze = new P();
class Qe {
  constructor(e, t, n, s, i) {
    this.controller = t, this.handModel = e, this.envMap = null;
    let o;
    !i || !i.primitive || i.primitive === "sphere" ? o = new pt(1, 10, 10) : i.primitive === "box" && (o = new Kt(1, 1, 1));
    const a = new Oe();
    this.handMesh = new mt(o, a, 30), this.handMesh.instanceMatrix.setUsage(zt), this.handMesh.castShadow = !0, this.handMesh.receiveShadow = !0, this.handModel.add(this.handMesh), this.joints = [
      "wrist",
      "thumb-metacarpal",
      "thumb-phalanx-proximal",
      "thumb-phalanx-distal",
      "thumb-tip",
      "index-finger-metacarpal",
      "index-finger-phalanx-proximal",
      "index-finger-phalanx-intermediate",
      "index-finger-phalanx-distal",
      "index-finger-tip",
      "middle-finger-metacarpal",
      "middle-finger-phalanx-proximal",
      "middle-finger-phalanx-intermediate",
      "middle-finger-phalanx-distal",
      "middle-finger-tip",
      "ring-finger-metacarpal",
      "ring-finger-phalanx-proximal",
      "ring-finger-phalanx-intermediate",
      "ring-finger-phalanx-distal",
      "ring-finger-tip",
      "pinky-finger-metacarpal",
      "pinky-finger-phalanx-proximal",
      "pinky-finger-phalanx-intermediate",
      "pinky-finger-phalanx-distal",
      "pinky-finger-tip"
    ];
  }
  updateMesh() {
    const t = this.controller.joints;
    let n = 0;
    for (let s = 0; s < this.joints.length; s++) {
      const i = t[this.joints[s]];
      i.visible && (Ze.setScalar(i.jointRadius || 8e-3), Je.compose(i.position, i.quaternion, Ze), this.handMesh.setMatrixAt(s, Je), n++);
    }
    this.handMesh.count = n, this.handMesh.instanceMatrix.needsUpdate = !0;
  }
}
class At extends Xt {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Bn(t);
    }), this.register(function(t) {
      return new Yn(t);
    }), this.register(function(t) {
      return new qn(t);
    }), this.register(function(t) {
      return new Vn(t);
    }), this.register(function(t) {
      return new Kn(t);
    }), this.register(function(t) {
      return new zn(t);
    }), this.register(function(t) {
      return new Xn(t);
    }), this.register(function(t) {
      return new Un(t);
    }), this.register(function(t) {
      return new Wn(t);
    }), this.register(function(t) {
      return new Gn(t);
    }), this.register(function(t) {
      return new jn(t);
    }), this.register(function(t) {
      return new Jn(t);
    }), this.register(function(t) {
      return new Zn(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = X.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(l) {
      s ? s(l) : console.error(l), i.manager.itemError(e), i.manager.itemEnd(e);
    }, r = new gt(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(l) {
      try {
        i.parse(l, o, function(d) {
          t(d), i.manager.itemEnd(e);
        }, a);
      } catch (d) {
        a(d);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const o = {}, a = {};
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (X.decodeText(new Uint8Array(e, 0, 4)) === Rt) {
        try {
          o[E.KHR_BINARY_GLTF] = new Qn(e);
        } catch (d) {
          s && s(d);
          return;
        }
        i = JSON.parse(o[E.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(X.decodeText(new Uint8Array(e)));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const r = new us(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    r.fileLoader.setRequestHeader(this.requestHeader);
    for (let l = 0; l < this.pluginCallbacks.length; l++) {
      const d = this.pluginCallbacks[l](r);
      a[d.name] = d, o[d.name] = !0;
    }
    if (i.extensionsUsed)
      for (let l = 0; l < i.extensionsUsed.length; ++l) {
        const d = i.extensionsUsed[l], u = i.extensionsRequired || [];
        switch (d) {
          case E.KHR_MATERIALS_UNLIT:
            o[d] = new Hn();
            break;
          case E.KHR_DRACO_MESH_COMPRESSION:
            o[d] = new $n(i, this.dracoLoader);
            break;
          case E.KHR_TEXTURE_TRANSFORM:
            o[d] = new es();
            break;
          case E.KHR_MESH_QUANTIZATION:
            o[d] = new ts();
            break;
          default:
            u.indexOf(d) >= 0 && a[d] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".');
        }
      }
    r.setExtensions(o), r.setPlugins(a), r.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function Fn() {
  let c = {};
  return {
    get: function(e) {
      return c[e];
    },
    add: function(e, t) {
      c[e] = t;
    },
    remove: function(e) {
      delete c[e];
    },
    removeAll: function() {
      c = {};
    }
  };
}
const E = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class jn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const i = t.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let l;
    const d = new W(16777215);
    r.color !== void 0 && d.fromArray(r.color);
    const u = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        l = new qt(d), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Yt(d), l.distance = u;
        break;
      case "spot":
        l = new Wt(d), l.distance = u, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, l.angle = r.spot.outerConeAngle, l.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, K(l, r), r.intensity !== void 0 && (l.intensity = r.intensity), l.name = t.createUniqueName(r.name || "light_" + e), s = Promise.resolve(l), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(r) {
      return n._getNodeRef(t.cache, a, r);
    });
  }
}
class Hn {
  constructor() {
    this.name = E.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return $;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new W(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        e.color.fromArray(o), e.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, ae));
    }
    return Promise.all(s);
  }
}
class Un {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class Bn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new S(a, a);
    }
    return Promise.all(i);
  }
}
class Gn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class Vn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new W(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, ae)), o.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Kn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class zn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new W(a[0], a[1], a[2]), Promise.all(i);
  }
}
class Xn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class Wn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Y;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new W(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, ae)), Promise.all(i);
  }
}
class Yn {
  constructor(e) {
    this.parser = e, this.name = E.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, o);
  }
}
class qn {
  constructor(e) {
    this.parser = e, this.name = E.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let r = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (r = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, o.source, r);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Jn {
  constructor(e) {
    this.name = E.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(a) {
        const r = s.byteOffset || 0, l = s.byteLength || 0, d = s.count, u = s.byteStride, f = new Uint8Array(a, r, l);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(d, u, f, s.mode, s.filter).then(function(m) {
          return m.buffer;
        }) : o.ready.then(function() {
          const m = new ArrayBuffer(d * u);
          return o.decodeGltfBuffer(new Uint8Array(m), d, u, f, s.mode, s.filter), m;
        });
      });
    } else
      return null;
  }
}
class Zn {
  constructor(e) {
    this.name = E.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const l of s.primitives)
      if (l.mode !== k.TRIANGLES && l.mode !== k.TRIANGLE_STRIP && l.mode !== k.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = n.extensions[this.name].attributes, a = [], r = {};
    for (const l in o)
      a.push(this.parser.getDependency("accessor", o[l]).then((d) => (r[l] = d, r[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const d = l.pop(), u = d.isGroup ? d.children : [d], f = l[0].count, m = [];
      for (const x of u) {
        const T = new re(), g = new P(), w = new de(), R = new P(1, 1, 1), A = new mt(x.geometry, x.material, f);
        for (let M = 0; M < f; M++)
          r.TRANSLATION && g.fromBufferAttribute(r.TRANSLATION, M), r.ROTATION && w.fromBufferAttribute(r.ROTATION, M), r.SCALE && R.fromBufferAttribute(r.SCALE, M), A.setMatrixAt(M, T.compose(g, w, R));
        for (const M in r)
          M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && x.geometry.setAttribute(M, r[M]);
        pe.prototype.copy.call(A, x), A.frustumCulled = !1, this.parser.assignFinalMaterial(A), m.push(A);
      }
      return d.isGroup ? (d.clear(), d.add(...m), d) : m[0];
    }));
  }
}
const Rt = "glTF", ne = 12, $e = { JSON: 1313821514, BIN: 5130562 };
class Qn {
  constructor(e) {
    this.name = E.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ne);
    if (this.header = {
      magic: X.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Rt)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - ne, s = new DataView(e, ne);
    let i = 0;
    for (; i < n; ) {
      const o = s.getUint32(i, !0);
      i += 4;
      const a = s.getUint32(i, !0);
      if (i += 4, a === $e.JSON) {
        const r = new Uint8Array(e, ne + i, o);
        this.content = X.decodeText(r);
      } else if (a === $e.BIN) {
        const r = ne + i;
        this.body = e.slice(r, r + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class $n {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = E.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, r = {}, l = {};
    for (const d in o) {
      const u = ve[d] || d.toLowerCase();
      a[u] = o[d];
    }
    for (const d in e.attributes) {
      const u = ve[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const f = n.accessors[e.attributes[d]], m = ee[f.componentType];
        l[u] = m.name, r[u] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(d) {
      return new Promise(function(u) {
        s.decodeDracoFile(d, function(f) {
          for (const m in f.attributes) {
            const x = f.attributes[m], T = r[m];
            T !== void 0 && (x.normalized = T);
          }
          u(f);
        }, a, l);
      });
    });
  }
}
class es {
  constructor() {
    this.name = E.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class ts {
  constructor() {
    this.name = E.KHR_MESH_QUANTIZATION;
  }
}
class Lt extends Ln {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = n[i + o];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, r = a * 2, l = a * 3, d = s - t, u = (n - t) / d, f = u * u, m = f * u, x = e * l, T = x - l, g = -2 * m + 3 * f, w = m - f, R = 1 - g, A = w - f + u;
    for (let M = 0; M !== a; M++) {
      const b = o[T + M + a], I = o[T + M + r] * d, C = o[x + M + a], _ = o[x + M] * d;
      i[M] = R * b + A * I + g * C + w * _;
    }
    return i;
  }
}
const ns = new de();
class ss extends Lt {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return ns.fromArray(i).normalize().toArray(i), i;
  }
}
const k = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ee = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, et = {
  9728: sn,
  9729: xt,
  9984: nn,
  9985: tn,
  9986: en,
  9987: wt
}, tt = {
  33071: rn,
  33648: on,
  10497: Se
}, Me = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ve = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, V = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, is = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: bt,
  STEP: Tn
}, Ae = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function os(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new Oe({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Rn
  })), c.DefaultMaterial;
}
function se(c, e, t) {
  for (const n in t.extensions)
    c[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function K(c, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(c.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function rs(c, e, t) {
  let n = !1, s = !1, i = !1;
  for (let l = 0, d = e.length; l < d; l++) {
    const u = e[l];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (s = !0), u.COLOR_0 !== void 0 && (i = !0), n && s && i) break;
  }
  if (!n && !s && !i) return Promise.resolve(c);
  const o = [], a = [], r = [];
  for (let l = 0, d = e.length; l < d; l++) {
    const u = e[l];
    if (n) {
      const f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : c.attributes.position;
      o.push(f);
    }
    if (s) {
      const f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : c.attributes.normal;
      a.push(f);
    }
    if (i) {
      const f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : c.attributes.color;
      r.push(f);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(r)
  ]).then(function(l) {
    const d = l[0], u = l[1], f = l[2];
    return n && (c.morphAttributes.position = d), s && (c.morphAttributes.normal = u), i && (c.morphAttributes.color = f), c.morphTargetsRelative = !0, c;
  });
}
function as(c, e) {
  if (c.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      c.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (c.morphTargetInfluences.length === t.length) {
      c.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        c.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function cs(c) {
  const e = c.extensions && c.extensions[E.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + nt(e.attributes) : t = c.indices + ":" + nt(c.attributes) + ":" + c.mode, t;
}
function nt(c) {
  let e = "";
  const t = Object.keys(c).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + c[t[n]] + ";";
  return e;
}
function Ne(c) {
  switch (c) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function ls(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const hs = new re();
class us {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Fn(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, s = !1, i = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || s && i < 98 ? this.textureLoader = new Jt(this.options.manager) : this.textureLoader = new Zt(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new gt(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      se(i, a, s), K(a, s), Promise.all(n._invokeAll(function(r) {
        return r.afterRoot && r.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const o = t[s].joints;
      for (let a = 0, r = o.length; a < r; a++)
        e[o[a]].isBone = !0;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const o = e[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const s = n.clone(), i = (o, a) => {
      const r = this.associations.get(o);
      r != null && this.associations.set(a, r);
      for (const [l, d] of o.children.entries())
        i(d, a.children[l]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(i, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[E.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, o) {
      n.load(X.resolveURL(t.uri, s.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = Me[s.type], a = ee[s.componentType], r = s.normalized === !0, l = new a(s.count * o);
      return Promise.resolve(new ye(l, o, r));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const a = o[0], r = Me[s.type], l = ee[s.componentType], d = l.BYTES_PER_ELEMENT, u = d * r, f = s.byteOffset || 0, m = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, x = s.normalized === !0;
      let T, g;
      if (m && m !== u) {
        const w = Math.floor(f / m), R = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + w + ":" + s.count;
        let A = t.cache.get(R);
        A || (T = new l(a, w * m, s.count * m / d), A = new Qt(T, m / d), t.cache.add(R, A)), g = new $t(A, r, f % m / d, x);
      } else
        a === null ? T = new l(s.count * r) : T = new l(a, f, s.count * r), g = new ye(T, r, x);
      if (s.sparse !== void 0) {
        const w = Me.SCALAR, R = ee[s.sparse.indices.componentType], A = s.sparse.indices.byteOffset || 0, M = s.sparse.values.byteOffset || 0, b = new R(o[1], A, s.sparse.count * w), I = new l(o[2], M, s.sparse.count * r);
        a !== null && (g = new ye(g.array.slice(), g.itemSize, g.normalized));
        for (let C = 0, _ = b.length; C < _; C++) {
          const D = b[C];
          if (g.setX(D, I[C * r]), r >= 2 && g.setY(D, I[C * r + 1]), r >= 3 && g.setZ(D, I[C * r + 2]), r >= 4 && g.setW(D, I[C * r + 3]), r >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, o = t.images[i];
    let a = this.textureLoader;
    if (o.uri) {
      const r = n.manager.getHandler(o.uri);
      r !== null && (a = r);
    }
    return this.loadTextureImage(e, i, a);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, o = i.textures[e], a = i.images[t], r = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[r])
      return this.textureCache[r];
    const l = this.loadImageSource(t, n).then(function(d) {
      d.flipY = !1, d.name = o.name || a.name || "";
      const f = (i.samplers || {})[o.sampler] || {};
      return d.magFilter = et[f.magFilter] || xt, d.minFilter = et[f.minFilter] || wt, d.wrapS = tt[f.wrapS] || Se, d.wrapT = tt[f.wrapT] || Se, s.associations.set(d, { textures: e }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[r] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const o = s.images[e], a = self.URL || self.webkitURL;
    let r = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      r = n.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const f = new Blob([u], { type: o.mimeType });
        return r = a.createObjectURL(f), r;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const d = Promise.resolve(r).then(function(u) {
      return new Promise(function(f, m) {
        let x = f;
        t.isImageBitmapLoader === !0 && (x = function(T) {
          const g = new Xe(T);
          g.needsUpdate = !0, f(g);
        }), t.load(X.resolveURL(u, i.path), x, void 0, m);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(r), u.userData.mimeType = o.mimeType || ls(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", r), u;
    });
    return this.sourceCache[e] = d, d;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), i.extensions[E.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[E.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const r = i.associations.get(o);
          o = i.extensions[E.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, r);
        }
      }
      return s !== void 0 && (o.encoding = s), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let r = this.cache.get(a);
      r || (r = new an(), Te.prototype.copy.call(r, n), r.color.copy(n.color), r.map = n.map, r.sizeAttenuation = !1, this.cache.add(a, r)), n = r;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let r = this.cache.get(a);
      r || (r = new cn(), Te.prototype.copy.call(r, n), r.color.copy(n.color), this.cache.add(a, r)), n = r;
    }
    if (s || i || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let r = this.cache.get(a);
      r || (r = n.clone(), i && (r.vertexColors = !0), o && (r.flatShading = !0), s && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(n))), n = r;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return Oe;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let o;
    const a = {}, r = i.extensions || {}, l = [];
    if (r[E.KHR_MATERIALS_UNLIT]) {
      const u = s[E.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new W(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        a.color.fromArray(f), a.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, ae)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    i.doubleSided === !0 && (a.side = ln);
    const d = i.alphaMode || Ae.OPAQUE;
    if (d === Ae.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, d === Ae.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== $ && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new S(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return i.occlusionTexture !== void 0 && o !== $ && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== $ && (a.emissive = new W().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && o !== $ && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, ae)), Promise.all(l).then(function() {
      const u = new o(a);
      return i.name && (u.name = i.name), K(u, i), t.associations.set(u, { materials: e }), i.extensions && se(s, u, i), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = hn.sanitizeNodeName(e || "");
    let n = t;
    for (let s = 1; this.nodeNamesUsed[n]; ++s)
      n = t + "_" + s;
    return this.nodeNamesUsed[n] = !0, n;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(a) {
      return n[E.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
        return st(r, a, t);
      });
    }
    const o = [];
    for (let a = 0, r = e.length; a < r; a++) {
      const l = e[a], d = cs(l), u = s[d];
      if (u)
        o.push(u.promise);
      else {
        let f;
        l.extensions && l.extensions[E.KHR_DRACO_MESH_COMPRESSION] ? f = i(l) : f = st(new yt(), l, t), s[d] = { primitive: l, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], o = i.primitives, a = [];
    for (let r = 0, l = o.length; r < l; r++) {
      const d = o[r].material === void 0 ? os(this.cache) : this.getDependency("material", o[r].material);
      a.push(d);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(r) {
      const l = r.slice(0, r.length - 1), d = r[r.length - 1], u = [];
      for (let m = 0, x = d.length; m < x; m++) {
        const T = d[m], g = o[m];
        let w;
        const R = l[m];
        if (g.mode === k.TRIANGLES || g.mode === k.TRIANGLE_STRIP || g.mode === k.TRIANGLE_FAN || g.mode === void 0)
          w = i.isSkinnedMesh === !0 ? new un(T, R) : new Tt(T, R), w.isSkinnedMesh === !0 && !w.geometry.attributes.skinWeight.normalized && w.normalizeSkinWeights(), g.mode === k.TRIANGLE_STRIP ? w.geometry = it(w.geometry, Nn) : g.mode === k.TRIANGLE_FAN && (w.geometry = it(w.geometry, Et));
        else if (g.mode === k.LINES)
          w = new dn(T, R);
        else if (g.mode === k.LINE_STRIP)
          w = new fn(T, R);
        else if (g.mode === k.LINE_LOOP)
          w = new pn(T, R);
        else if (g.mode === k.POINTS)
          w = new mn(T, R);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(w.geometry.morphAttributes).length > 0 && as(w, i), w.name = t.createUniqueName(i.name || "mesh_" + e), K(w, i), g.extensions && se(s, w, g), t.assignFinalMaterial(w), u.push(w);
      }
      for (let m = 0, x = u.length; m < x; m++)
        t.associations.set(u[m], {
          meshes: e,
          primitives: m
        });
      if (u.length === 1)
        return u[0];
      const f = new be();
      t.associations.set(f, { meshes: e });
      for (let m = 0, x = u.length; m < x; m++)
        f.add(u[m]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new gn(wn.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new xn(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), K(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this.getDependency("node", t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), o = s, a = [], r = [];
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        if (u) {
          a.push(u);
          const f = new re();
          i !== null && f.fromArray(i.array, l * 16), r.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new yn(a, r);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const n = this.json.animations[e], s = [], i = [], o = [], a = [], r = [];
    for (let l = 0, d = n.channels.length; l < d; l++) {
      const u = n.channels[l], f = n.samplers[u.sampler], m = u.target, x = m.node, T = n.parameters !== void 0 ? n.parameters[f.input] : f.input, g = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      s.push(this.getDependency("node", x)), i.push(this.getDependency("accessor", T)), o.push(this.getDependency("accessor", g)), a.push(f), r.push(m);
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(r)
    ]).then(function(l) {
      const d = l[0], u = l[1], f = l[2], m = l[3], x = l[4], T = [];
      for (let w = 0, R = d.length; w < R; w++) {
        const A = d[w], M = u[w], b = f[w], I = m[w], C = x[w];
        if (A === void 0) continue;
        A.updateMatrix();
        let _;
        switch (V[C.path]) {
          case V.weights:
            _ = An;
            break;
          case V.rotation:
            _ = We;
            break;
          case V.position:
          case V.scale:
          default:
            _ = Mn;
            break;
        }
        const D = A.name ? A.name : A.uuid, q = I.interpolation !== void 0 ? is[I.interpolation] : bt, z = [];
        V[C.path] === V.weights ? A.traverse(function(N) {
          N.morphTargetInfluences && z.push(N.name ? N.name : N.uuid);
        }) : z.push(D);
        let H = b.array;
        if (b.normalized) {
          const N = Ne(H.constructor), G = new Float32Array(H.length);
          for (let F = 0, te = H.length; F < te; F++)
            G[F] = H[F] * N;
          H = G;
        }
        for (let N = 0, G = z.length; N < G; N++) {
          const F = new _(
            z[N] + "." + V[C.path],
            M.array,
            H,
            q
          );
          I.interpolation === "CUBICSPLINE" && (F.createInterpolant = function(me) {
            const le = this instanceof We ? ss : Lt;
            return new le(this.times, this.values, this.getValueSize() / 3, me);
          }, F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), T.push(F);
        }
      }
      const g = n.name ? n.name : "animation_" + e;
      return new bn(g, void 0, T);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const o = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let r = 0, l = s.weights.length; r < l; r++)
            a.morphTargetInfluences[r] = s.weights[r];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this.extensions, s = this, i = t.nodes[e], o = i.name ? s.createUniqueName(i.name) : "";
    return (function() {
      const a = [], r = s._invokeOne(function(f) {
        return f.createNodeMesh && f.createNodeMesh(e);
      });
      r && a.push(r), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(f) {
        return s._getNodeRef(s.cameraCache, i.camera, f);
      })), s._invokeAll(function(f) {
        return f.createNodeAttachment && f.createNodeAttachment(e);
      }).forEach(function(f) {
        a.push(f);
      });
      const l = [], d = i.children || [];
      for (let f = 0, m = d.length; f < m; f++)
        l.push(s.getDependency("node", d[f]));
      const u = i.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", i.skin);
      return Promise.all([
        Promise.all(a),
        Promise.all(l),
        u
      ]);
    })().then(function(a) {
      const r = a[0], l = a[1], d = a[2];
      let u;
      if (i.isBone === !0 ? u = new En() : r.length > 1 ? u = new be() : r.length === 1 ? u = r[0] : u = new pe(), u !== r[0])
        for (let f = 0, m = r.length; f < m; f++)
          u.add(r[f]);
      if (i.name && (u.userData.name = i.name, u.name = o), K(u, i), i.extensions && se(n, u, i), i.matrix !== void 0) {
        const f = new re();
        f.fromArray(i.matrix), u.applyMatrix4(f);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, d !== null && u.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, hs);
      });
      for (let f = 0, m = l.length; f < m; f++)
        u.add(l[f]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new be();
    n.name && (i.name = s.createUniqueName(n.name)), K(i, n), n.extensions && se(t, i, n);
    const o = n.nodes || [], a = [];
    for (let r = 0, l = o.length; r < l; r++)
      a.push(s.getDependency("node", o[r]));
    return Promise.all(a).then(function(r) {
      for (let d = 0, u = r.length; d < u; d++)
        i.add(r[d]);
      const l = (d) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, m] of s.associations)
          (f instanceof Te || f instanceof Xe) && u.set(f, m);
        return d.traverse((f) => {
          const m = s.associations.get(f);
          m != null && u.set(f, m);
        }), u;
      };
      return s.associations = l(i), i;
    });
  }
}
function ds(c, e, t) {
  const n = e.attributes, s = new Sn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], r = a.min, l = a.max;
    if (r !== void 0 && l !== void 0) {
      if (s.set(
        new P(r[0], r[1], r[2]),
        new P(l[0], l[1], l[2])
      ), a.normalized) {
        const d = Ne(ee[a.componentType]);
        s.min.multiplyScalar(d), s.max.multiplyScalar(d);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const a = new P(), r = new P();
    for (let l = 0, d = i.length; l < d; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION], m = f.min, x = f.max;
        if (m !== void 0 && x !== void 0) {
          if (r.setX(Math.max(Math.abs(m[0]), Math.abs(x[0]))), r.setY(Math.max(Math.abs(m[1]), Math.abs(x[1]))), r.setZ(Math.max(Math.abs(m[2]), Math.abs(x[2]))), f.normalized) {
            const T = Ne(ee[f.componentType]);
            r.multiplyScalar(T);
          }
          a.max(r);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  c.boundingBox = s;
  const o = new vn();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, c.boundingSphere = o;
}
function st(c, e, t) {
  const n = e.attributes, s = [];
  function i(o, a) {
    return t.getDependency("accessor", o).then(function(r) {
      c.setAttribute(a, r);
    });
  }
  for (const o in n) {
    const a = ve[o] || o.toLowerCase();
    a in c.attributes || s.push(i(n[o], a));
  }
  if (e.indices !== void 0 && !c.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      c.setIndex(a);
    });
    s.push(o);
  }
  return K(c, e), ds(c, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? rs(c, e.targets, t) : c;
  });
}
function it(c, e) {
  let t = c.getIndex();
  if (t === null) {
    const o = [], a = c.getAttribute("position");
    if (a !== void 0) {
      for (let r = 0; r < a.count; r++)
        o.push(r);
      c.setIndex(o), t = c.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
  }
  const n = t.count - 2, s = [];
  if (e === Et)
    for (let o = 1; o <= n; o++)
      s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
  else
    for (let o = 0; o < n; o++)
      o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
  s.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = c.clone();
  return i.setIndex(s), i;
}
const fs = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";
class ps {
  constructor(e, t, n, s, i = null) {
    this.controller = t, this.handModel = e, this.bones = [], i === null && (i = new At(), i.setPath(n || fs)), i.load(`${s}.glb`, (o) => {
      const a = o.scene.children[0];
      this.handModel.add(a);
      const r = a.getObjectByProperty("type", "SkinnedMesh");
      r.frustumCulled = !1, r.castShadow = !0, r.receiveShadow = !0, [
        "wrist",
        "thumb-metacarpal",
        "thumb-phalanx-proximal",
        "thumb-phalanx-distal",
        "thumb-tip",
        "index-finger-metacarpal",
        "index-finger-phalanx-proximal",
        "index-finger-phalanx-intermediate",
        "index-finger-phalanx-distal",
        "index-finger-tip",
        "middle-finger-metacarpal",
        "middle-finger-phalanx-proximal",
        "middle-finger-phalanx-intermediate",
        "middle-finger-phalanx-distal",
        "middle-finger-tip",
        "ring-finger-metacarpal",
        "ring-finger-phalanx-proximal",
        "ring-finger-phalanx-intermediate",
        "ring-finger-phalanx-distal",
        "ring-finger-tip",
        "pinky-finger-metacarpal",
        "pinky-finger-phalanx-proximal",
        "pinky-finger-phalanx-intermediate",
        "pinky-finger-phalanx-distal",
        "pinky-finger-tip"
      ].forEach((d) => {
        const u = a.getObjectByName(d);
        u !== void 0 ? u.jointName = d : console.warn(`Couldn't find ${d} in ${s} hand mesh`), this.bones.push(u);
      });
    });
  }
  updateMesh() {
    const e = this.controller.joints;
    for (let t = 0; t < this.bones.length; t++) {
      const n = this.bones[t];
      if (n) {
        const s = e[n.jointName];
        if (s.visible) {
          const i = s.position;
          n.position.copy(i), n.quaternion.copy(s.quaternion);
        }
      }
    }
  }
}
class ms extends pe {
  constructor(e) {
    super(), this.controller = e, this.motionController = null, this.envMap = null, this.mesh = null;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.motionController && this.motionController.updateMesh();
  }
}
class gs {
  constructor() {
    this.path = null;
  }
  setPath(e) {
    return this.path = e, this;
  }
  createHandModel(e, t) {
    const n = new ms(e);
    return e.addEventListener("connected", (s) => {
      const i = s.data;
      i.hand && !n.motionController && (n.xrInputSource = i, t === void 0 || t === "spheres" ? n.motionController = new Qe(n, e, this.path, i.handedness, { primitive: "sphere" }) : t === "boxes" ? n.motionController = new Qe(n, e, this.path, i.handedness, { primitive: "box" }) : t === "mesh" && (n.motionController = new ps(n, e, this.path, i.handedness))), e.visible = !0;
    }), e.addEventListener("disconnected", () => {
      e.visible = !1;
    }), n;
  }
}
const ws = new gs(), ot = new p.Matrix4();
class rt {
  constructor(e, t, n) {
    this.raycaster = new p.Raycaster(), this.isSelecting = !1, this.tmpVector1 = new p.Vector3(), this.tmpVector2 = new p.Vector3(), this.grabbing = !1, this.connected = !1, this.self = this, this.lastPosition = new p.Vector3(), this.moveVector = new p.Vector3(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.onSelectStart = this.onSelectStart.bind(this), this.onSelectEnd = this.onSelectEnd.bind(this), this._onMove = this._onMove.bind(this), this.onConnected = this.onConnected.bind(this), this.onDisconnected = this.onDisconnected.bind(this), this.controller = t.xr.getHand(e), this.controller.userData.built = !1, this.controller.addEventListener("connected", this.onConnected), this.controller.addEventListener("disconnected", this.onDisconnected), this.controller.add(ws.createHandModel(this.controller)), this.scene = n;
  }
  buildController(e) {
    let t, n;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return console.log("add line to hand"), t = new p.BufferGeometry(), t.setAttribute("position", new p.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3)), t.setAttribute("color", new p.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)), n = new p.LineBasicMaterial({ vertexColors: !0, blending: p.AdditiveBlending }), new p.Line(t, n);
      case "gaze":
        return t = new p.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1), n = new p.MeshBasicMaterial({ opacity: 0.5, transparent: !0 }), new p.Mesh(t, n);
    }
  }
  getSelectedObject(e) {
    const t = this.getPart(ue.INDEX.JOINT1);
    if (t) {
      ot.identity().extractRotation(t.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(t.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(ot);
      let n = e.children.length, s, i;
      for (; n--; )
        if (s = e.children[n], s.userData.selectable === !0 && (i = this.raycaster.intersectObject(s, !1), i.length > 0))
          return s;
    }
    return null;
  }
  collideObject(e, t) {
    console.log("collide", e?.children.length);
    const n = e?.children?.length ?? 0;
    for (let s = 0; s < n; s++) {
      const i = e.children[s];
      if (i.userData.selectable === !0 && i instanceof p.Mesh && t.getWorldPosition(this.tmpVector1).distanceTo(i.getWorldPosition(this.tmpVector2)) < i.geometry.boundingSphere.radius * i.scale.x)
        return console.log("found mesh"), i;
    }
    return null;
  }
  onConnected(e) {
    Object.keys(this.controller?.joints ?? {}).length > 5 && (console.log("hand", this.controllerIndex, "connected"), this.connected = !0, this.controller.addEventListener("selectstart", this.onSelectStart), this.controller.addEventListener("selectend", this.onSelectEnd), this.controller.addEventListener("move", this._onMove), this.controller.userData.built === !1 && (console.log("joints", Object.keys(this.controller.joints)), ue.INDEX.JOINT1 in this.controller.joints && (this.getPart(ue.INDEX.JOINT1)?.add(this.buildController(e.data)), this.controller.userData.built = !0, this.lastPosition.copy(this.controller.position))));
  }
  onDisconnected(e) {
    this.connected = !1, this.controller.removeEventListener("selectstart", this.onSelectStart), this.controller.removeEventListener("selectend", this.onSelectEnd), this.controller.removeEventListener("move", this._onMove), console.log("hand", this.controllerIndex, "disconnected");
  }
  onMove(e) {
  }
  _onMove() {
    console.log("pre move", this.controller.position.toArray().join()), this.lastPosition.equals(this.controller.position) || (this.moveVector.subVectors(this.controller.position, this.lastPosition), this.lastPosition.copy(this.controller.position), this.onMove({ vector: this.moveVector }));
  }
  _onPinchStart(e) {
    console.log("pinch");
  }
  onPinchStart(e) {
  }
  onPinchEnd(e) {
  }
  _onPinchEnd(e) {
    const t = e.target;
    if (t.userData.selected !== void 0) {
      const n = t.userData.selected;
      this.scene.attach(n), t.userData.selected = void 0, this.grabbing = !1, this.onPinchEnd({ type: "pinchend", target: n });
    }
  }
  onSelectStart() {
    this.controller.userData.selectPosition = this.getPart(ue.INDEX.TIP)?.position.clone(), this.controller.userData.selectVelocity = new p.Vector3(), this.isSelecting = !0;
  }
  onSelectEnd() {
    this.isSelecting = !1;
  }
  getPart(e) {
    return this.controller.joints[e];
  }
}
const ue = {
  WRIST: "wrist",
  THUMB: {
    KNUCKLE: "thumb-metacarpal",
    JOINT1: "thumb-phalanx-proximal",
    JOINT2: "thumb-phalanx-distal",
    TIP: "thumb-tip"
  },
  INDEX: {
    KNUCKLE: "index-finger-metacarpal",
    JOINT1: "index-finger-phalanx-proximal",
    JOINT2: "index-finger-phalanx-intermediate",
    JOINT3: "index-finger-phalanx-distal",
    TIP: "index-finger-tip"
  },
  MIDDLE: {
    KNUCKLE: "middle-finger-metacarpal",
    JOINT1: "middle-finger-phalanx-proximal",
    JOINT2: "middle-finger-phalanx-intermediate",
    JOINT3: "middle-finger-phalanx-distal",
    TIP: "middle-finger-tip"
  },
  RING: {
    KNUCKLE: "ring-finger-metacarpal",
    JOINT1: "ring-finger-phalanx-proximal",
    JOINT2: "ring-finger-phalanx-intermediate",
    JOINT3: "ring-finger-phalanx-distal",
    TIP: "ring-finger-tip"
  },
  PINKY: {
    KNUCKLE: "pinky-finger-metacarpal",
    JOINT1: "pinky-finger-phalanx-proximal",
    JOINT2: "pinky-finger-phalanx-intermediate",
    JOINT3: "pinky-finger-phalanx-distal",
    TOP: "pinky-finger-tip"
  }
};
class xs {
  constructor(e, t) {
    this.raycaster = new p.Raycaster(), this.mouse = { x: -9999999999, y: -9999999999 }, this.mouseMove = new p.Vector2(), this.mouseDown = new p.Vector2(), this.mouseUp = new p.Vector2(), this.isDown = !1, this.target = null, this.onDown = () => {
    }, this.onMove = () => {
    }, this.onUp = () => {
    }, this.canvas = e, this.camera = t, this.rect = this.canvas.getBoundingClientRect(), window.addEventListener("mousedown", this.onDocumentMouseDown.bind(this), !1), window.addEventListener("mouseup", this.onDocumentMouseUp.bind(this), !1), window.addEventListener("mousemove", this.onDocumentMouseMove.bind(this), !1), window.addEventListener("resize", this.onResize.bind(this), !1);
  }
  onResize() {
    this.rect = this.canvas.getBoundingClientRect();
  }
  updateMouse(e) {
    const t = e.clientX - this.rect.left, n = e.clientY - this.rect.top;
    return this.mouse.x = t / this.rect.width * 2 - 1, this.mouse.y = -(n / this.rect.height) * 2 + 1, { x: t, y: n };
  }
  onDocumentMouseDown(e) {
    e.preventDefault();
    const t = this.updateMouse(e);
    this.mouseDown.set(t.x, t.y), this.isDown = !0, this.onDown(this);
  }
  onDocumentMouseUp(e) {
    e.preventDefault();
    const t = this.updateMouse(e);
    this.mouseUp.set(t.x, t.y), this.isDown = !1, this.onUp(this), this.mouse.x = -9999999999, this.mouse.y = -9999999999;
  }
  onDocumentMouseMove(e) {
    e.preventDefault();
    const t = this.updateMouse(e);
    this.mouseMove.set(t.x, t.y), this.onMove(this);
  }
  // THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>
  getSelectedObject(e, t = !1) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const n = this.raycaster.intersectObjects(e, t);
    let s = null;
    return n.length > 0 && (s = n[0]), s;
  }
}
const L = {
  ComponentState: Object.freeze({
    DEFAULT: "default",
    TOUCHED: "touched",
    PRESSED: "pressed"
  }),
  ComponentProperty: Object.freeze({
    BUTTON: "button",
    X_AXIS: "xAxis",
    Y_AXIS: "yAxis",
    STATE: "state"
  }),
  ComponentType: Object.freeze({
    TRIGGER: "trigger",
    SQUEEZE: "squeeze",
    TOUCHPAD: "touchpad",
    THUMBSTICK: "thumbstick",
    BUTTON: "button"
  }),
  ButtonTouchThreshold: 0.05,
  AxisTouchThreshold: 0.1,
  VisualResponseProperty: Object.freeze({
    TRANSFORM: "transform",
    VISIBILITY: "visibility"
  })
};
async function St(c) {
  const e = await fetch(c);
  if (e.ok)
    return e.json();
  throw new Error(e.statusText);
}
async function ys(c) {
  if (!c)
    throw new Error("No basePath supplied");
  return await St(`${c}/profilesList.json`);
}
async function Ts(c, e, t = null, n = !0) {
  if (!c)
    throw new Error("No xrInputSource supplied");
  if (!e)
    throw new Error("No basePath supplied");
  const s = await ys(e);
  let i;
  if (c.profiles.some((r) => {
    const l = s[r];
    return l && (i = {
      profileId: r,
      profilePath: `${e}/${l.path}`,
      deprecated: !!l.deprecated
    }), !!i;
  }), !i) {
    if (!t)
      throw new Error("No matching profile name found");
    const r = s[t];
    if (!r)
      throw new Error(`No matching profile name found and default profile "${t}" missing.`);
    i = {
      profileId: t,
      profilePath: `${e}/${r.path}`,
      deprecated: !!r.deprecated
    };
  }
  const o = await St(i.profilePath);
  let a;
  if (n) {
    let r;
    if (c.handedness === "any" ? r = o.layouts[Object.keys(o.layouts)[0]] : r = o.layouts[c.handedness], !r)
      throw new Error(
        `No matching handedness, ${c.handedness}, in profile ${i.profileId}`
      );
    r.assetPath && (a = i.profilePath.replace("profile.json", r.assetPath));
  }
  return { profile: o, assetPath: a };
}
const bs = {
  xAxis: 0,
  yAxis: 0,
  button: 0,
  state: L.ComponentState.DEFAULT
};
function Es(c = 0, e = 0) {
  let t = c, n = e;
  if (Math.sqrt(c * c + e * e) > 1) {
    const o = Math.atan2(e, c);
    t = Math.cos(o), n = Math.sin(o);
  }
  return {
    normalizedXAxis: t * 0.5 + 0.5,
    normalizedYAxis: n * 0.5 + 0.5
  };
}
class Ms {
  constructor(e) {
    this.componentProperty = e.componentProperty, this.states = e.states, this.valueNodeName = e.valueNodeName, this.valueNodeProperty = e.valueNodeProperty, this.valueNodeProperty === L.VisualResponseProperty.TRANSFORM && (this.minNodeName = e.minNodeName, this.maxNodeName = e.maxNodeName), this.value = 0, this.updateFromComponent(bs);
  }
  /**
   * Computes the visual response's interpolation weight based on component state
   * @param {Object} componentValues - The component from which to update
   * @param {number} xAxis - The reported X axis value of the component
   * @param {number} yAxis - The reported Y axis value of the component
   * @param {number} button - The reported value of the component's button
   * @param {string} state - The component's active state
   */
  updateFromComponent({
    xAxis: e,
    yAxis: t,
    button: n,
    state: s
  }) {
    const { normalizedXAxis: i, normalizedYAxis: o } = Es(e, t);
    switch (this.componentProperty) {
      case L.ComponentProperty.X_AXIS:
        this.value = this.states.includes(s) ? i : 0.5;
        break;
      case L.ComponentProperty.Y_AXIS:
        this.value = this.states.includes(s) ? o : 0.5;
        break;
      case L.ComponentProperty.BUTTON:
        this.value = this.states.includes(s) ? n : 0;
        break;
      case L.ComponentProperty.STATE:
        this.valueNodeProperty === L.VisualResponseProperty.VISIBILITY ? this.value = this.states.includes(s) : this.value = this.states.includes(s) ? 1 : 0;
        break;
      default:
        throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`);
    }
  }
}
class As {
  /**
   * @param {Object} componentId - Id of the component
   * @param {Object} componentDescription - Description of the component to be created
   */
  constructor(e, t) {
    if (!e || !t || !t.visualResponses || !t.gamepadIndices || Object.keys(t.gamepadIndices).length === 0)
      throw new Error("Invalid arguments supplied");
    this.id = e, this.type = t.type, this.rootNodeName = t.rootNodeName, this.touchPointNodeName = t.touchPointNodeName, this.visualResponses = {}, Object.keys(t.visualResponses).forEach((n) => {
      const s = new Ms(t.visualResponses[n]);
      this.visualResponses[n] = s;
    }), this.gamepadIndices = Object.assign({}, t.gamepadIndices), this.values = {
      state: L.ComponentState.DEFAULT,
      button: this.gamepadIndices.button !== void 0 ? 0 : void 0,
      xAxis: this.gamepadIndices.xAxis !== void 0 ? 0 : void 0,
      yAxis: this.gamepadIndices.yAxis !== void 0 ? 0 : void 0
    };
  }
  get data() {
    return { id: this.id, ...this.values };
  }
  /**
   * @description Poll for updated data based on current gamepad state
   * @param {Object} gamepad - The gamepad object from which the component data should be polled
   */
  updateFromGamepad(e) {
    if (this.values.state = L.ComponentState.DEFAULT, this.gamepadIndices.button !== void 0 && e.buttons.length > this.gamepadIndices.button) {
      const t = e.buttons[this.gamepadIndices.button];
      this.values.button = t.value, this.values.button = this.values.button < 0 ? 0 : this.values.button, this.values.button = this.values.button > 1 ? 1 : this.values.button, t.pressed || this.values.button === 1 ? this.values.state = L.ComponentState.PRESSED : (t.touched || this.values.button > L.ButtonTouchThreshold) && (this.values.state = L.ComponentState.TOUCHED);
    }
    this.gamepadIndices.xAxis !== void 0 && e.axes.length > this.gamepadIndices.xAxis && (this.values.xAxis = e.axes[this.gamepadIndices.xAxis], this.values.xAxis = this.values.xAxis < -1 ? -1 : this.values.xAxis, this.values.xAxis = this.values.xAxis > 1 ? 1 : this.values.xAxis, this.values.state === L.ComponentState.DEFAULT && Math.abs(this.values.xAxis) > L.AxisTouchThreshold && (this.values.state = L.ComponentState.TOUCHED)), this.gamepadIndices.yAxis !== void 0 && e.axes.length > this.gamepadIndices.yAxis && (this.values.yAxis = e.axes[this.gamepadIndices.yAxis], this.values.yAxis = this.values.yAxis < -1 ? -1 : this.values.yAxis, this.values.yAxis = this.values.yAxis > 1 ? 1 : this.values.yAxis, this.values.state === L.ComponentState.DEFAULT && Math.abs(this.values.yAxis) > L.AxisTouchThreshold && (this.values.state = L.ComponentState.TOUCHED)), Object.values(this.visualResponses).forEach((t) => {
      t.updateFromComponent(this.values);
    });
  }
}
class Rs {
  /**
   * @param {Object} xrInputSource - The XRInputSource to build the MotionController around
   * @param {Object} profile - The best matched profile description for the supplied xrInputSource
   * @param {Object} assetUrl
   */
  constructor(e, t, n) {
    if (!e)
      throw new Error("No xrInputSource supplied");
    if (!t)
      throw new Error("No profile supplied");
    this.xrInputSource = e, this.assetUrl = n, this.id = t.profileId, this.layoutDescription = t.layouts[e.handedness], this.components = {}, Object.keys(this.layoutDescription.components).forEach((s) => {
      const i = this.layoutDescription.components[s];
      this.components[s] = new As(s, i);
    }), this.updateFromGamepad();
  }
  get gripSpace() {
    return this.xrInputSource.gripSpace;
  }
  get targetRaySpace() {
    return this.xrInputSource.targetRaySpace;
  }
  /**
   * @description Returns a subset of component data for simplified debugging
   */
  get data() {
    const e = [];
    return Object.values(this.components).forEach((t) => {
      e.push(t.data);
    }), e;
  }
  /**
   * @description Poll for updated data based on current gamepad state
   */
  updateFromGamepad() {
    Object.values(this.components).forEach((e) => {
      e.updateFromGamepad(this.xrInputSource.gamepad);
    });
  }
}
const Ls = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles", Ss = "generic-trigger";
class vs extends pe {
  constructor() {
    super(), this.motionController = null, this.envMap = null;
  }
  setEnvironmentMap(e) {
    return this.envMap == e ? this : (this.envMap = e, this.traverse((t) => {
      t.isMesh && (t.material.envMap = this.envMap, t.material.needsUpdate = !0);
    }), this);
  }
  /**
   * Polls data from the XRInputSource and updates the model's components to match
   * the real world data
   */
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.motionController && (this.motionController.updateFromGamepad(), Object.values(this.motionController.components).forEach((t) => {
      Object.values(t.visualResponses).forEach((n) => {
        const { valueNode: s, minNode: i, maxNode: o, value: a, valueNodeProperty: r } = n;
        s && (r === L.VisualResponseProperty.VISIBILITY ? s.visible = a : r === L.VisualResponseProperty.TRANSFORM && (s.quaternion.slerpQuaternions(
          i.quaternion,
          o.quaternion,
          a
        ), s.position.lerpVectors(
          i.position,
          o.position,
          a
        )));
      });
    }));
  }
}
function Ns(c, e) {
  Object.values(c.components).forEach((t) => {
    const { type: n, touchPointNodeName: s, visualResponses: i } = t;
    if (n === L.ComponentType.TOUCHPAD)
      if (t.touchPointNode = e.getObjectByName(s), t.touchPointNode) {
        const o = new pt(1e-3), a = new $({ color: 255 }), r = new Tt(o, a);
        t.touchPointNode.add(r);
      } else
        console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);
    Object.values(i).forEach((o) => {
      const { valueNodeName: a, minNodeName: r, maxNodeName: l, valueNodeProperty: d } = o;
      if (d === L.VisualResponseProperty.TRANSFORM) {
        if (o.minNode = e.getObjectByName(r), o.maxNode = e.getObjectByName(l), !o.minNode) {
          console.warn(`Could not find ${r} in the model`);
          return;
        }
        if (!o.maxNode) {
          console.warn(`Could not find ${l} in the model`);
          return;
        }
      }
      o.valueNode = e.getObjectByName(a), o.valueNode || console.warn(`Could not find ${a} in the model`);
    });
  });
}
function at(c, e) {
  Ns(c.motionController, e), c.envMap && e.traverse((t) => {
    t.isMesh && (t.material.envMap = c.envMap, t.material.needsUpdate = !0);
  }), c.add(e);
}
class Os {
  constructor(e = null) {
    this.gltfLoader = e, this.path = Ls, this._assetCache = {}, this.gltfLoader || (this.gltfLoader = new At());
  }
  createControllerModel(e) {
    const t = new vs();
    let n = null;
    return e.addEventListener("connected", (s) => {
      const i = s.data;
      i.targetRayMode !== "tracked-pointer" || !i.gamepad || Ts(i, this.path, Ss).then(({ profile: o, assetPath: a }) => {
        t.motionController = new Rs(
          i,
          o,
          a
        );
        const r = this._assetCache[t.motionController.assetUrl];
        if (r)
          n = r.scene.clone(), at(t, n);
        else {
          if (!this.gltfLoader)
            throw new Error("GLTFLoader not set.");
          this.gltfLoader.setPath(""), this.gltfLoader.load(
            t.motionController.assetUrl,
            (l) => {
              this._assetCache[t.motionController.assetUrl] = l, n = l.scene.clone(), at(t, n);
            },
            null,
            () => {
              throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`);
            }
          );
        }
      }).catch((o) => {
        console.warn(o);
      });
    }), e.addEventListener("disconnected", () => {
      t.motionController = null, t.remove(n), n = null;
    }), t;
  }
}
const Is = new Os(), ct = new p.Matrix4();
var Cs = /* @__PURE__ */ ((c) => (c.SELECT_START = "selectstart", c.SELECT_END = "selectend", c.MOVE = "move", c.CONNECTED = "connected", c.DISCONNECTED = "disconnected", c))(Cs || {});
class lt {
  constructor(e, t, n) {
    this.raycaster = new p.Raycaster(), this.isBuilt = !1, this.isConnected = !1, this.isSelecting = !1, this.userData = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.lastPosition = new p.Vector3(), this.moveVector = new p.Vector3(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.controller = t.xr.getController(e), this.controller.addEventListener("selectstart", this._onSelectStart.bind(this)), this.controller.addEventListener("selectend", this._onSelectEnd.bind(this)), this.controller.addEventListener("connected", this.onConnected.bind(this)), this.controller.addEventListener("disconnected", this.onDisconnected.bind(this)), this.grip = t.xr.getControllerGrip(e), this.grip.add(Is.createControllerModel(this.grip)), n.add(this.controller), n.add(this.grip);
  }
  buildController(e) {
    let t, n;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return t = new p.BufferGeometry().setFromPoints([new p.Vector3(0, 0, 0), new p.Vector3(0, 0, -1), new p.Vector3(0, 0.5, -1)]), t.setAttribute("color", new p.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)), n = new p.LineBasicMaterial({
          vertexColors: !0,
          // blending: THREE.AdditiveBlending,
          color: 16737792
        }), new p.Line(t, n);
      case "gaze":
        return t = new p.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1), n = new p.MeshBasicMaterial({ opacity: 0.5, transparent: !0 }), new p.Mesh(t, n);
    }
  }
  getSelectedObject(e, t = !1) {
    ct.identity().extractRotation(this.controller.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(ct);
    const s = this.raycaster.intersectObjects(e, t).filter((i) => i.object.userData.selectable === !0);
    return s.length > 0 ? s[0] : null;
  }
  // TODO: this won't remove the specific event
  on(e, t) {
    return this.controller.addEventListener(e, (n) => t({ ...n, ref: this })), this;
  }
  off(e, t) {
    return this.controller.removeEventListener(e, (n) => t({ ...n, ref: this })), this;
  }
  // onMove(info: { vector: THREE.Vector3 }) {}
  // _onMove() {
  // this.onMove.call(this);
  // console.log('pre move', this.controller.position.toArray().join());
  // if (!this.lastPosition.equals(this.controller.position)) {
  //   // console.log('move', this.controller.position);
  //   this.moveVector.subVectors(this.controller.position, this.lastPosition);
  //   this.lastPosition.copy(this.controller.position);
  //   this.onMove({ vector: this.moveVector });
  // }
  // }
  onConnected(e) {
    this.isConnected = !0, this.isBuilt === !1 && (this.controller.add(this.buildController(e.data)), this.isBuilt = !0), this.controller.visible = !0;
  }
  onDisconnected(e) {
    this.isConnected = !1, this.controller.visible = !1;
  }
  _onSelectStart() {
    this.isSelecting = !0;
  }
  // onSelectStart() {
  //   console.log('onSelectStart');
  // }
  _onSelectEnd() {
    this.isSelecting = !1;
  }
  // onSelectEnd() {}
}
const ht = { type: "change" }, Re = { type: "start" }, ut = { type: "end" };
class Ps extends On {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Z.ROTATE, MIDDLE: Z.DOLLY, RIGHT: Z.PAN }, this.touches = { ONE: Q.ROTATE, TWO: Q.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(h) {
      h.addEventListener("keydown", Be), this._domElementKeyEvents = h;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ht), n.update(), i = s.NONE;
    }, this.update = (function() {
      const h = new P(), y = new de().setFromUnitVectors(e.up, new P(0, 1, 0)), v = y.clone().invert(), O = new P(), j = new de(), J = 2 * Math.PI;
      return function() {
        const ze = n.object.position;
        h.copy(ze).sub(n.target), h.applyQuaternion(y), a.setFromVector3(h), n.autoRotate && i === s.NONE && D(C()), n.enableDamping ? (a.theta += r.theta * n.dampingFactor, a.phi += r.phi * n.dampingFactor) : (a.theta += r.theta, a.phi += r.phi);
        let U = n.minAzimuthAngle, B = n.maxAzimuthAngle;
        return isFinite(U) && isFinite(B) && (U < -Math.PI ? U += J : U > Math.PI && (U -= J), B < -Math.PI ? B += J : B > Math.PI && (B -= J), U <= B ? a.theta = Math.max(U, Math.min(B, a.theta)) : a.theta = a.theta > (U + B) / 2 ? Math.max(U, a.theta) : Math.min(B, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(d, n.dampingFactor) : n.target.add(d), h.setFromSpherical(a), h.applyQuaternion(v), ze.copy(n.target).add(h), n.object.lookAt(n.target), n.enableDamping === !0 ? (r.theta *= 1 - n.dampingFactor, r.phi *= 1 - n.dampingFactor, d.multiplyScalar(1 - n.dampingFactor)) : (r.set(0, 0, 0), d.set(0, 0, 0)), l = 1, u || O.distanceToSquared(n.object.position) > o || 8 * (1 - j.dot(n.object.quaternion)) > o ? (n.dispatchEvent(ht), O.copy(n.object.position), j.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    })(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", Ge), n.domElement.removeEventListener("pointerdown", je), n.domElement.removeEventListener("pointercancel", He), n.domElement.removeEventListener("wheel", Ue), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", we), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", Be);
    };
    const n = this, s = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = s.NONE;
    const o = 1e-6, a = new Ye(), r = new Ye();
    let l = 1;
    const d = new P();
    let u = !1;
    const f = new S(), m = new S(), x = new S(), T = new S(), g = new S(), w = new S(), R = new S(), A = new S(), M = new S(), b = [], I = {};
    function C() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function _() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function D(h) {
      r.theta -= h;
    }
    function q(h) {
      r.phi -= h;
    }
    const z = (function() {
      const h = new P();
      return function(v, O) {
        h.setFromMatrixColumn(O, 0), h.multiplyScalar(-v), d.add(h);
      };
    })(), H = (function() {
      const h = new P();
      return function(v, O) {
        n.screenSpacePanning === !0 ? h.setFromMatrixColumn(O, 1) : (h.setFromMatrixColumn(O, 0), h.crossVectors(n.object.up, h)), h.multiplyScalar(v), d.add(h);
      };
    })(), N = (function() {
      const h = new P();
      return function(v, O) {
        const j = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const J = n.object.position;
          h.copy(J).sub(n.target);
          let he = h.length();
          he *= Math.tan(n.object.fov / 2 * Math.PI / 180), z(2 * v * he / j.clientHeight, n.object.matrix), H(2 * O * he / j.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (z(v * (n.object.right - n.object.left) / n.object.zoom / j.clientWidth, n.object.matrix), H(O * (n.object.top - n.object.bottom) / n.object.zoom / j.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    })();
    function G(h) {
      n.object.isPerspectiveCamera ? l /= h : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * h)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function F(h) {
      n.object.isPerspectiveCamera ? l *= h : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / h)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function te(h) {
      f.set(h.clientX, h.clientY);
    }
    function me(h) {
      R.set(h.clientX, h.clientY);
    }
    function le(h) {
      T.set(h.clientX, h.clientY);
    }
    function Ot(h) {
      m.set(h.clientX, h.clientY), x.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const y = n.domElement;
      D(2 * Math.PI * x.x / y.clientHeight), q(2 * Math.PI * x.y / y.clientHeight), f.copy(m), n.update();
    }
    function It(h) {
      A.set(h.clientX, h.clientY), M.subVectors(A, R), M.y > 0 ? G(_()) : M.y < 0 && F(_()), R.copy(A), n.update();
    }
    function Ct(h) {
      g.set(h.clientX, h.clientY), w.subVectors(g, T).multiplyScalar(n.panSpeed), N(w.x, w.y), T.copy(g), n.update();
    }
    function Pt(h) {
      h.deltaY < 0 ? F(_()) : h.deltaY > 0 && G(_()), n.update();
    }
    function _t(h) {
      let y = !1;
      switch (h.code) {
        case n.keys.UP:
          h.ctrlKey || h.metaKey || h.shiftKey ? q(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(0, n.keyPanSpeed), y = !0;
          break;
        case n.keys.BOTTOM:
          h.ctrlKey || h.metaKey || h.shiftKey ? q(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(0, -n.keyPanSpeed), y = !0;
          break;
        case n.keys.LEFT:
          h.ctrlKey || h.metaKey || h.shiftKey ? D(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(n.keyPanSpeed, 0), y = !0;
          break;
        case n.keys.RIGHT:
          h.ctrlKey || h.metaKey || h.shiftKey ? D(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : N(-n.keyPanSpeed, 0), y = !0;
          break;
      }
      y && (h.preventDefault(), n.update());
    }
    function Ce() {
      if (b.length === 1)
        f.set(b[0].pageX, b[0].pageY);
      else {
        const h = 0.5 * (b[0].pageX + b[1].pageX), y = 0.5 * (b[0].pageY + b[1].pageY);
        f.set(h, y);
      }
    }
    function Pe() {
      if (b.length === 1)
        T.set(b[0].pageX, b[0].pageY);
      else {
        const h = 0.5 * (b[0].pageX + b[1].pageX), y = 0.5 * (b[0].pageY + b[1].pageY);
        T.set(h, y);
      }
    }
    function _e() {
      const h = b[0].pageX - b[1].pageX, y = b[0].pageY - b[1].pageY, v = Math.sqrt(h * h + y * y);
      R.set(0, v);
    }
    function Dt() {
      n.enableZoom && _e(), n.enablePan && Pe();
    }
    function kt() {
      n.enableZoom && _e(), n.enableRotate && Ce();
    }
    function De(h) {
      if (b.length == 1)
        m.set(h.pageX, h.pageY);
      else {
        const v = xe(h), O = 0.5 * (h.pageX + v.x), j = 0.5 * (h.pageY + v.y);
        m.set(O, j);
      }
      x.subVectors(m, f).multiplyScalar(n.rotateSpeed);
      const y = n.domElement;
      D(2 * Math.PI * x.x / y.clientHeight), q(2 * Math.PI * x.y / y.clientHeight), f.copy(m);
    }
    function ke(h) {
      if (b.length === 1)
        g.set(h.pageX, h.pageY);
      else {
        const y = xe(h), v = 0.5 * (h.pageX + y.x), O = 0.5 * (h.pageY + y.y);
        g.set(v, O);
      }
      w.subVectors(g, T).multiplyScalar(n.panSpeed), N(w.x, w.y), T.copy(g);
    }
    function Fe(h) {
      const y = xe(h), v = h.pageX - y.x, O = h.pageY - y.y, j = Math.sqrt(v * v + O * O);
      A.set(0, j), M.set(0, Math.pow(A.y / R.y, n.zoomSpeed)), G(M.y), R.copy(A);
    }
    function Ft(h) {
      n.enableZoom && Fe(h), n.enablePan && ke(h);
    }
    function jt(h) {
      n.enableZoom && Fe(h), n.enableRotate && De(h);
    }
    function je(h) {
      n.enabled !== !1 && (b.length === 0 && (n.domElement.setPointerCapture(h.pointerId), n.domElement.addEventListener("pointermove", ge), n.domElement.addEventListener("pointerup", we)), Vt(h), h.pointerType === "touch" ? Bt(h) : Ht(h));
    }
    function ge(h) {
      n.enabled !== !1 && (h.pointerType === "touch" ? Gt(h) : Ut(h));
    }
    function we(h) {
      Ve(h), b.length === 0 && (n.domElement.releasePointerCapture(h.pointerId), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", we)), n.dispatchEvent(ut), i = s.NONE;
    }
    function He(h) {
      Ve(h);
    }
    function Ht(h) {
      let y;
      switch (h.button) {
        case 0:
          y = n.mouseButtons.LEFT;
          break;
        case 1:
          y = n.mouseButtons.MIDDLE;
          break;
        case 2:
          y = n.mouseButtons.RIGHT;
          break;
        default:
          y = -1;
      }
      switch (y) {
        case Z.DOLLY:
          if (n.enableZoom === !1) return;
          me(h), i = s.DOLLY;
          break;
        case Z.ROTATE:
          if (h.ctrlKey || h.metaKey || h.shiftKey) {
            if (n.enablePan === !1) return;
            le(h), i = s.PAN;
          } else {
            if (n.enableRotate === !1) return;
            te(h), i = s.ROTATE;
          }
          break;
        case Z.PAN:
          if (h.ctrlKey || h.metaKey || h.shiftKey) {
            if (n.enableRotate === !1) return;
            te(h), i = s.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            le(h), i = s.PAN;
          }
          break;
        default:
          i = s.NONE;
      }
      i !== s.NONE && n.dispatchEvent(Re);
    }
    function Ut(h) {
      switch (i) {
        case s.ROTATE:
          if (n.enableRotate === !1) return;
          Ot(h);
          break;
        case s.DOLLY:
          if (n.enableZoom === !1) return;
          It(h);
          break;
        case s.PAN:
          if (n.enablePan === !1) return;
          Ct(h);
          break;
      }
    }
    function Ue(h) {
      n.enabled === !1 || n.enableZoom === !1 || i !== s.NONE || (h.preventDefault(), n.dispatchEvent(Re), Pt(h), n.dispatchEvent(ut));
    }
    function Be(h) {
      n.enabled === !1 || n.enablePan === !1 || _t(h);
    }
    function Bt(h) {
      switch (Ke(h), b.length) {
        case 1:
          switch (n.touches.ONE) {
            case Q.ROTATE:
              if (n.enableRotate === !1) return;
              Ce(), i = s.TOUCH_ROTATE;
              break;
            case Q.PAN:
              if (n.enablePan === !1) return;
              Pe(), i = s.TOUCH_PAN;
              break;
            default:
              i = s.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Q.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Dt(), i = s.TOUCH_DOLLY_PAN;
              break;
            case Q.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              kt(), i = s.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = s.NONE;
          }
          break;
        default:
          i = s.NONE;
      }
      i !== s.NONE && n.dispatchEvent(Re);
    }
    function Gt(h) {
      switch (Ke(h), i) {
        case s.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          De(h), n.update();
          break;
        case s.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ke(h), n.update();
          break;
        case s.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ft(h), n.update();
          break;
        case s.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          jt(h), n.update();
          break;
        default:
          i = s.NONE;
      }
    }
    function Ge(h) {
      n.enabled !== !1 && h.preventDefault();
    }
    function Vt(h) {
      b.push(h);
    }
    function Ve(h) {
      delete I[h.pointerId];
      for (let y = 0; y < b.length; y++)
        if (b[y].pointerId == h.pointerId) {
          b.splice(y, 1);
          return;
        }
    }
    function Ke(h) {
      let y = I[h.pointerId];
      y === void 0 && (y = new S(), I[h.pointerId] = y), y.set(h.pageX, h.pageY);
    }
    function xe(h) {
      const y = h.pointerId === b[0].pointerId ? b[1] : b[0];
      return I[y.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Ge), n.domElement.addEventListener("pointerdown", je), n.domElement.addEventListener("pointercancel", He), n.domElement.addEventListener("wheel", Ue, { passive: !1 }), this.update();
  }
}
const dt = new p.Matrix4();
class Vs {
  constructor() {
    this.clock = new p.Clock(), this.tmpPosition = new p.Vector3(), this.sessionActive = !1, this.raycaster = new p.Raycaster(), this.VRSessionActive = !1, this.mouseInitialized = !1, this.globalForces = new p.Vector3(0, -0.1, 0), this.friction = 0.95, this.controllersInitialized = !1, this.handsInitialized = !1, this.orbitControlsActive = !1, this.keyInfo = {
      ArrowRight: { isDown: !1, downTime: 0, speed: 0 },
      ArrowLeft: { isDown: !1, downTime: 0, speed: 0 },
      ArrowUp: { isDown: !1, downTime: 0, speed: 0 },
      ArrowDown: { isDown: !1, downTime: 0, speed: 0 }
    }, this.beforeRender = (t) => {
    }, this.direction = new p.Vector3(), this.getCameraObject = this.getCameraObject.bind(this), this.scene = new p.Scene(), this.scene.background = new p.Color(1118481), this.background = new Dn(this), this.camera = new p.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.set(0, 1.6, 0), this.audioListener = new p.AudioListener(), this.camera.add(this.audioListener), this.dolly = new p.Object3D(), this.dolly.add(this.camera), this.scene.add(this.dolly), this.dummyCam = new p.Object3D(), this.camera.add(this.dummyCam), this.scene.add(new p.HemisphereLight(6316128, 4210752));
    const e = new p.DirectionalLight(16777215);
    e.position.set(1, 1, 1).normalize(), this.scene.add(e), e.shadow.mapSize.width = 512, e.shadow.mapSize.height = 512, e.shadow.camera.near = 0.5, e.shadow.camera.far = 1500, this.renderer = new p.WebGLRenderer({ antialias: !0 }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.outputEncoding = p.sRGBEncoding, this.renderer.xr.enabled = !0, this.renderer.xr.addEventListener("sessionstart", this.onSessionStart.bind(this)), this.renderer.xr.addEventListener("sessionend", this.onSessionEnd.bind(this)), this.rightHand = new rt(1, this.renderer, this.dolly), this.leftHand = new rt(0, this.renderer, this.dolly), this.rightController = new lt(1, this.renderer, this.dolly), this.leftController = new lt(0, this.renderer, this.dolly), this.eventManager = new kn(this), this.vrButton = ce.createButton(this.renderer), this.render(), this.startAnimate();
  }
  set gravity(e) {
    this.globalForces.setY(e);
  }
  get gravity() {
    return this.globalForces.y;
  }
  initOrbitControls() {
    this.orbitControlsActive || (this.orbitControlsActive = !0, this.controls = new Ps(this.camera, this.renderer.domElement), this.controls.update());
  }
  initMouse() {
    this.mouseInitialized || (this.mouseInitialized = !0, this.mouse = new xs(this.renderer.domElement, this.camera), this.eventManager.initMouse(this.mouse));
  }
  initControllers() {
    this.controllersInitialized || (console.log("initControllers"), this.controllersInitialized = !0, this.eventManager.initController(this.leftController), this.eventManager.initController(this.rightController));
  }
  disposeControllers() {
    console.log("disposeControllers"), this.controllersInitialized = !1;
  }
  initHands() {
    this.handsInitialized || (this.handsInitialized = !0, this.scene.add(this.rightHand.controller), this.scene.add(this.leftHand.controller));
  }
  disposeHands() {
    this.scene.remove(this.rightHand.controller), this.scene.remove(this.leftHand.controller);
  }
  initArrows() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this)), document.addEventListener("keyup", this.handleKeyDown.bind(this));
  }
  handleKeyDown(e) {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowLeft":
      case "ArrowUp":
      case "ArrowDown":
        switch (e.type) {
          case "keydown":
            this.keyInfo[e.key].isDown || (this.keyInfo[e.key].isDown = !0, this.keyInfo[e.key].downTime = Date.now(), this.keyInfo[e.key].speed = 0);
            break;
          case "keyup":
            this.keyInfo[e.key].isDown && (this.keyInfo[e.key].isDown = !1, this.keyInfo[e.key].speed = 0);
            break;
        }
    }
  }
  getCameraObject(e = this.scene) {
    if (this.camera) {
      dt.identity().extractRotation(this.camera.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.camera.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(dt);
      let t = e.children.length, n, s;
      for (; t--; )
        if (n = e.children[t], n.userData.selectable === !0 && (s = this.raycaster.intersectObject(n, !1), s.length > 0))
          return n;
    }
    return null;
  }
  lookAt(e) {
    const t = new p.Vector3();
    e.getWorldPosition(t), this.camera.lookAt(t);
  }
  onSessionStart() {
    this.session = this.renderer.xr.getSession(), console.log("onSessionStart"), this.controls.enabled = !1, this.VRSessionActive = !0, this.endAnimate(), this.renderer.setAnimationLoop(this.render.bind(this));
  }
  onSessionEnd() {
    console.log("onSessionEnd"), this.session?.end(), this.session = null, this.controls.enabled = !0, this.VRSessionActive = !1, this.startAnimate(), this.renderer.setAnimationLoop(null);
  }
  startAnimate() {
    console.log("startAnimate"), this.animate();
  }
  animate() {
    this.animateRequest = requestAnimationFrame(this.animate.bind(this)), this.render();
  }
  endAnimate() {
    console.log("endAnimate"), cancelAnimationFrame(this.animateRequest);
  }
  // onWindowResize() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(width, height);
  //   // this.fpc?.handleResize();
  // }
  setSize(e, t) {
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  setSelectedObjectRight(e) {
    e !== this.selectedObjectRight && (this.selectedObjectRight && this.selectedObjectRight.material.color.setHex(this.selectedObjectRight.userData.color), this.selectedObjectRight = e, e && e.material.color.setHex(16737792));
  }
  setSelectedObjectLeft(e) {
    e !== this.selectedObjectLeft && (this.selectedObjectLeft && this.selectedObjectLeft.material.color.setHex(this.selectedObjectLeft.userData.color), this.selectedObjectLeft = e, e && e.material.color.setHex(16737792));
  }
  setSelectedObjectMouse() {
  }
  render() {
    const e = this.clock.getDelta();
    this.beforeRender(e), this.renderer.render(this.scene, this.camera), this.orbitControlsActive === !0 && this.controls.update();
  }
}
class _s extends yt {
  constructor(e = 1, t = 1, n = 1, s = 1, i = 1, o = 1) {
    super(), s = Math.floor(s), i = Math.floor(i), o = Math.floor(o);
    const a = e / 2, r = t / 2, l = n / 2, d = e / s, u = t / i, f = n / o, m = [];
    let x = -a, T = -r, g = -l;
    for (let w = 0; w <= s; w++)
      m.push(x, -r, -l, x, r, -l), m.push(x, r, -l, x, r, l), m.push(x, r, l, x, -r, l), m.push(x, -r, l, x, -r, -l), x += d;
    for (let w = 0; w <= i; w++)
      m.push(-a, T, -l, a, T, -l), m.push(a, T, -l, a, T, l), m.push(a, T, l, -a, T, l), m.push(-a, T, l, -a, T, -l), T += u;
    for (let w = 0; w <= o; w++)
      m.push(-a, -r, g, -a, r, g), m.push(-a, r, g, a, r, g), m.push(a, r, g, a, -r, g), m.push(a, -r, g, -a, -r, g), g += f;
    this.setAttribute("position", new In(m, 3));
  }
}
const ie = {
  transparent: "transparent",
  white: "#fff",
  black: "#000",
  primary: "#1f95f3",
  secondary: "#7ea768",
  dark: "#050505",
  sage_dark: "#3c6924",
  sage: "#7ea768",
  sage_light: "#aec9a0",
  sage_lighter: "#cedfc5",
  squash: "#fcb950",
  green: "#4c8031",
  green_lighter: "#c9e265",
  grey_light: "#f5f5f5",
  grey: "#efefef",
  grey_dark: "#a2a2a2",
  grey_darker: "#4a4a4a",
  grey_darkest: "#262626",
  plum: "#6c698d",
  puce: "#4e3d42",
  puce_dark: "#1d1c33",
  // from logo
  pink: "#F06A9E",
  purple: "#DF9BEF",
  red: "#FE0C5E",
  // '#F94B73',
  orange: "#FFB43A",
  orange_light: "#FFD531",
  yellow: "#FFD531",
  turquiose: "#31BCB1",
  turquiose_light: "#65D4D2",
  lichen: "#A0DDBD",
  //
  linen: "#faf8f2",
  linen_dark: "#cac1b2",
  linen_darker: "#9c8e75",
  blue: "#007aff",
  grey_trans: "#6066733D"
};
var Ks = Math.PI / 180;
function zs(c, e, t) {
  return c + (e - c) * t;
}
function oe(c, e, t = !1) {
  e || (e = c, c = 0);
  let n = c + Math.random() * (e - c);
  return t ? n + 0.5 | 0 : n;
}
function Xs(c, e, t) {
  return e < t ? Math.max(e, Math.min(t, c)) : Math.max(t, Math.min(e, c));
}
function vt() {
  return Math.random() * 16777215;
}
function Ws({ radius: c = oe(0.1, 0.3), color: e = vt(), position: t = [0, 0, 0], opacity: n = 1 } = {}) {
  const s = new p.SphereGeometry(c, 32, 32), i = new p.MeshLambertMaterial({ color: e, opacity: n, transparent: n < 1 }), o = new p.Mesh(s, i);
  return o.position.fromArray(t), o.userData.color = i.color.getHex(), o.userData.physics = !1, o.userData.selectable = !1, o.userData.velocity = new p.Vector3(), o;
}
function Ys({ radius: c = oe(0.1, 0.5), color: e = vt(), position: t = [0, 0, 0], opacity: n = 1 } = {}) {
  const s = c, i = new p.BoxGeometry(s, s, s), o = new p.MeshStandardMaterial({
    color: e,
    roughness: 1,
    metalness: 0,
    opacity: n,
    transparent: n < 1
  }), a = new p.Mesh(i, o);
  return a.position.fromArray(t), a.geometry.computeBoundingSphere(), a;
}
function qs(c = 10) {
  return new p.LineSegments(
    new _s(c, c, c, c, c, c).translate(0, c * 0.5, 0),
    //
    new p.LineBasicMaterial({ color: 8421504 })
  );
}
function Ds() {
  const c = new Cn(64, 64, 16), e = [
    // ThemeColors.turquiose, //
    // ThemeColors.turquiose_light,
    // ThemeColors.lichen,
    // ThemeColors.pink,
    // ThemeColors.purple,
    // ThemeColors.red,
    // ThemeColors.orange,
    ie.yellow
  ], t = document.createElement("canvas"), n = t.getContext("2d");
  n.canvas.width = c.width, n.canvas.height = c.height, n.fillStyle = "#000", n.fillRect(0, 0, n.canvas.width, n.canvas.height), n.fillStyle = "#FFF";
  let s = ~~(c.cells.length * 0.5);
  for (; s--; ) {
    n.globalAlpha = Math.random() * 0.01, n.fillStyle = e[oe(0, e.length - 1, !0)];
    const i = c.getRandomCell(
      (o) => !o.data.active,
      (o) => o.data.active = !0
    );
    i && n.fillRect(i.x, i.y, i.width, i.height);
  }
  for (s = ~~(c.cells.length * 0.01), n.fillStyle = [ie.pink, ie.purple][oe(0, 1, !0)]; s--; ) {
    n.globalAlpha = Math.random() * 0.1, n.fillStyle = [ie.pink, ie.purple][oe(0, 1, !0)];
    const i = c.getRandomCell(
      (o) => !o.data.active,
      (o) => o.data.active = !0
    );
    i && n.fillRect(i.x, i.y, i.width, i.height);
  }
  return new p.CanvasTexture(t);
}
function Js(c = 0, e = 13, t = 256) {
  const n = Ds();
  n.repeat.set(t, t), n.anisotropy = 1, n.wrapT = p.RepeatWrapping, n.wrapS = p.RepeatWrapping;
  const s = new p.PlaneGeometry(Math.pow(2, e), Math.pow(2, e)), i = new p.MeshLambertMaterial({ map: n }), o = new p.Mesh(s, i);
  return o.position.set(0, c, 0), o.rotation.set(Math.PI / -2, 0, 0), o;
}
function Zs(c = 0, e = 13, t = 256) {
  const n = new p.PlaneGeometry(Math.pow(2, e), Math.pow(2, e)), s = new p.MeshLambertMaterial({ color: 1118481 }), i = new p.Mesh(n, s);
  return i.position.set(0, c, 0), i.rotation.set(Math.PI / -2, 0, 0), i;
}
function Le(c, e = 16711680) {
  const t = new p.LineBasicMaterial({ color: e }), n = new p.BufferGeometry().setFromPoints(c);
  return new p.Line(n, t);
}
function Qs() {
  const c = new p.Object3D(), e = Le([new p.Vector3(0, 0, 0), new p.Vector3(0, 10, 0)], 16711680), t = Le([new p.Vector3(0, 0, 0), new p.Vector3(10, 0, 0)], 65280), n = Le([new p.Vector3(0, 0, 0), new p.Vector3(0, 0, 10)], 255);
  return c.add(e), c.add(t), c.add(n), c;
}
const fe = new p.Vector3();
function $s(c, e, t) {
  c !== e && (e.getWorldPosition(fe), ks(c, fe));
}
function ks(c, e, t) {
  const n = c.quaternion.clone();
  c.lookAt(e);
  const s = c.quaternion.clone();
  c.quaternion.copy(n), c.userData.t = 0, Fs(c, s), Ie.to(c.quaternion, { overwrite: "auto", ease: "power1.inOut", x: s.x, y: s.y, z: s.z, w: s.w });
}
function Fs(c, e, t = 1) {
  Ie.to(c.quaternion, { overwrite: "auto", duration: t, ease: "power1.inOut", x: e.x, y: e.y, z: e.z, w: e.w });
}
function ei(c, e) {
  Ie.killTweensOf(c.userData), e.getWorldPosition(fe), c.lookAt(fe);
}
const js = new p.Vector3(0, 1, 0), ft = 0.07, Nt = new p.CylinderGeometry(ft, ft, 1, 64, 1, !0);
Nt.translate(0, 0.5, 0);
function ti(c, e, t) {
  const n = e.clone().sub(c), s = n.length();
  n.normalize();
  const i = new p.Quaternion().setFromUnitVectors(js, n);
  return t = t ?? Nt.clone(), t.scale(1, s, 1), t.applyQuaternion(i), t.translate(c.x, c.y, c.z), t;
}
export {
  Cn as Grid,
  Bs as KeyController,
  _n as KeyboardKeys,
  Gs as MouseController,
  ie as ThemeColors,
  ce as VRButton,
  Dn as XRBackground,
  kn as XREventManager,
  rt as XRHand,
  ue as XRHandParts,
  xs as XRMouse,
  lt as XRRemote,
  Cs as XRRemoteEventType,
  Vs as XRWorld,
  Qs as buildAxis,
  Xs as clamp,
  Ys as createBox,
  qs as createGridRoom,
  Zs as createInfiniteColorPlane,
  Js as createInfinitePlane,
  Ws as createSphere,
  Le as drawLine,
  Fs as easeQuaternium,
  Ds as generateRandomCanvasTexture,
  ti as geomTube,
  zs as interpolate,
  $s as lookAtObject,
  ei as lookAtObjectInstant,
  ks as lookAtPoint,
  Ks as rad,
  oe as rand,
  vt as randomColor
};
//# sourceMappingURL=index.js.map
