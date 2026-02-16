import * as p from "three";
import { Vector2 as b, SphereGeometry as Xe, BoxGeometry as ht, MeshStandardMaterial as ye, InstancedMesh as We, DynamicDrawUsage as ut, Vector3 as S, Matrix4 as J, TrianglesDrawMode as dt, TriangleFanDrawMode as fe, TriangleStripDrawMode as Ye, Loader as pt, LoaderUtils as q, FileLoader as qe, MeshPhysicalMaterial as N, Color as j, LinearSRGBColorSpace as O, SRGBColorSpace as $, SpotLight as ft, PointLight as mt, DirectionalLight as gt, Quaternion as ee, InstancedBufferAttribute as wt, Object3D as se, TextureLoader as _t, ImageBitmapLoader as yt, BufferAttribute as oe, InterleavedBuffer as xt, InterleavedBufferAttribute as Tt, LinearMipmapLinearFilter as Ze, NearestMipmapLinearFilter as bt, LinearMipmapNearestFilter as Et, NearestMipmapNearestFilter as Mt, LinearFilter as me, NearestFilter as Je, RepeatWrapping as ge, MirroredRepeatWrapping as Rt, ClampToEdgeWrapping as At, PointsMaterial as St, Material as re, LineBasicMaterial as Lt, DoubleSide as vt, MeshBasicMaterial as H, PropertyBinding as Dt, BufferGeometry as $e, SkinnedMesh as Ct, Mesh as Qe, LineSegments as Pt, Line as Nt, LineLoop as Ot, Points as It, Group as ae, PerspectiveCamera as kt, MathUtils as et, OrthographicCamera as Ft, Skeleton as jt, AnimationClip as Ut, Bone as Ht, InterpolateDiscrete as Bt, InterpolateLinear as tt, Texture as be, VectorKeyframeTrack as Ee, NumberKeyframeTrack as Me, QuaternionKeyframeTrack as Re, ColorManagement as Ae, FrontSide as Gt, Interpolant as Vt, Box3 as Kt, Sphere as zt, Controls as Xt, MOUSE as G, TOUCH as B, Spherical as Se, Ray as Wt, Plane as Yt, Float32BufferAttribute as qt } from "three";
import xe from "gsap";
class K {
  /**
   * Constructs a new VR button.
   *
   * @param {WebGLRenderer|WebGPURenderer} renderer - The renderer.
   * @param {XRSessionInit} [sessionInit] - The a configuration object for the AR session.
   * @return {HTMLElement} The button or an error message if `immersive-ar` isn't supported.
   */
  static createButton(e, t = {}) {
    const s = document.createElement("button");
    function n() {
      let c = null;
      async function u(f) {
        f.addEventListener("end", h), await e.xr.setSession(f), s.textContent = "EXIT VR", c = f;
      }
      function h() {
        c.removeEventListener("end", h), s.textContent = "ENTER VR", c = null;
      }
      s.style.display = "", s.style.cursor = "pointer", s.style.left = "calc(50% - 50px)", s.style.width = "100px", s.textContent = "ENTER VR";
      const d = {
        ...t,
        optionalFeatures: [
          "local-floor",
          "bounded-floor",
          "layers",
          ...t.optionalFeatures || []
        ]
      };
      s.onmouseenter = function() {
        s.style.opacity = "1.0";
      }, s.onmouseleave = function() {
        s.style.opacity = "0.5";
      }, s.onclick = function() {
        c === null ? navigator.xr.requestSession("immersive-vr", d).then(u) : (c.end(), navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-vr", d).then(u).catch((f) => {
          console.warn(f);
        }));
      }, navigator.xr.offerSession !== void 0 && navigator.xr.offerSession("immersive-vr", d).then(u).catch((f) => {
        console.warn(f);
      });
    }
    function i() {
      s.style.display = "", s.style.cursor = "auto", s.style.left = "calc(50% - 75px)", s.style.width = "150px", s.onmouseenter = null, s.onmouseleave = null, s.onclick = null;
    }
    function o() {
      i(), s.textContent = "VR NOT SUPPORTED";
    }
    function l(c) {
      i(), console.warn("Exception when trying to call xr.isSessionSupported", c), s.textContent = "VR NOT ALLOWED";
    }
    function a(c) {
      c.style.position = "absolute", c.style.bottom = "20px", c.style.padding = "12px 6px", c.style.border = "1px solid #fff", c.style.borderRadius = "4px", c.style.background = "rgba(0,0,0,0.1)", c.style.color = "#fff", c.style.font = "normal 13px sans-serif", c.style.textAlign = "center", c.style.opacity = "0.5", c.style.outline = "none", c.style.zIndex = "999";
    }
    if ("xr" in navigator)
      return s.id = "VRButton", s.style.display = "none", a(s), navigator.xr.isSessionSupported("immersive-vr").then(function(c) {
        c ? n() : o(), c && K.xrSessionIsGranted && s.click();
      }).catch(l), s;
    {
      const c = document.createElement("a");
      return window.isSecureContext === !1 ? (c.href = document.location.href.replace(/^http:/, "https:"), c.innerHTML = "WEBXR NEEDS HTTPS") : (c.href = "https://immersiveweb.dev/", c.innerHTML = "WEBXR NOT AVAILABLE"), c.style.left = "calc(50% - 90px)", c.style.width = "180px", c.style.textDecoration = "none", a(c), c;
    }
  }
  /**
   * Registers a `sessiongranted` event listener. When a session is granted, the {@link VRButton#xrSessionIsGranted}
   * flag will evaluate to `true`. This method is automatically called by the module itself so there
   * should be no need to use it on app level.
   */
  static registerSessionGrantedListener() {
    if (typeof navigator < "u" && "xr" in navigator) {
      if (/WebXRViewer\//i.test(navigator.userAgent)) return;
      navigator.xr.addEventListener("sessiongranted", () => {
        K.xrSessionIsGranted = !0;
      });
    }
  }
}
K.xrSessionIsGranted = !1;
K.registerSessionGrantedListener();
class Zt {
  constructor(e = 10, t = 10, s = 1, n = 0) {
    this.cells = [], this.width = 0, this.height = 0, this.columns = 0, this.rows = 0, this.rowWidth = 10, this.colWidth = 10, this.rowWidth = s, this.colWidth = n > 0 ? n : s, this.columns = t, this.rows = e, this.width = this.colWidth * t, this.height = this.rowWidth * e, this.refreshCells();
  }
  refreshCells() {
    this.cells = Array.from({ length: this.rows * this.columns }).map((e, t) => {
      const s = ~~(t / this.columns), n = t % this.columns, i = this.colWidth * n, o = this.rowWidth * s;
      return {
        row: s,
        column: n,
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
  setSize(e, t, s = "cover") {
    this.columns = ~~(e / this.colWidth), this.rows = ~~(t / this.rowWidth), s === "cover" && (this.colWidth = e / this.columns, this.rowWidth = t / this.rows), this.width = e, this.height = t, this.refreshCells();
  }
  getCellAtPoint(e) {
    const t = ~~(e.x / this.colWidth), s = ~~(e.y / this.rowWidth);
    return this.getCellAt(t, s);
  }
  getCellAt(e, t) {
    const s = t * this.columns + e;
    return s < this.cells.length ? this.cells[s] : null;
  }
  getRandomCell(e = () => !0, t = () => {
  }) {
    const s = this.cells.filter(e);
    if (s.length > 0) {
      const n = ~~(s.length * Math.random());
      return t && t(s[n]), s[n];
    } else
      return null;
  }
  getRow(e) {
    const t = this.columns * e, s = t + this.columns;
    return this.cells.slice(t, s);
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
const Jt = Math.PI / 180;
function Le(r, e, t) {
  return (1 - t) * r + t * e;
}
function le(r) {
  return r * Jt;
}
class st {
  constructor() {
    this.lookup = {};
  }
  initEvent(e) {
    Object.hasOwnProperty.call(this.lookup, e) || (this.lookup[e] = this.lookup?.[e] ?? []);
  }
  on(e, t, s) {
    this.initEvent(e), this.lookup[e].push({ callback: t, options: s });
  }
  off(e, t) {
    if (this.initEvent(e), t) {
      const s = this.lookup[e].findIndex((n) => n.callback === t);
      s > -1 && this.lookup[e].splice(s, 1);
    } else
      this.lookup[e] = [];
  }
  trigger(e, t) {
    this.initEvent(e), this.lookup[e].forEach((s) => s.callback({ type: e, ...t ?? {} }));
  }
}
var $t = /* @__PURE__ */ ((r) => (r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r.ArrowLeft = "ArrowLeft", r.ArrowRight = "ArrowRight", r.Space = " ", r))($t || {});
class En {
  constructor() {
    this.status = {
      ArrowUp: { isDown: !1, userData: { axis: new p.Vector3(0, 0, 0), angle: 0 } },
      ArrowDown: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: le(180) } },
      ArrowLeft: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: le(90) } },
      ArrowRight: { isDown: !1, userData: { axis: new p.Vector3(0, 1, 0), angle: le(-90) } }
    }, this.arrowIsDown = !1, this.eventManager = new st(), document.addEventListener("keydown", this._onKeyDown.bind(this)), document.addEventListener("keyup", this._onKeyUp.bind(this));
  }
  initStatus(e) {
    this.status.hasOwnProperty(e) || (this.status[e] = { isDown: !1, userData: { axis: new p.Vector3(0, 0, 0), angle: 0 } });
  }
  on(e, t, s = {}) {
    return this.eventManager.on(e, t, s), this;
  }
  off(e, t) {
    return this.eventManager.off(e, t), this;
  }
  onPress(e, t, s) {
    return this.on(
      "down",
      (n) => {
        n.key === e && t(n);
      },
      s
    ), this;
  }
  onRelease(e, t, s) {
    return this.on(
      "up",
      (n) => {
        n.key === e && t(n);
      },
      s
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
class Mn {
  constructor(e) {
    this.position = new b(-9999999999, -9999999999), this.relative = new b(-9999999999, -9999999999), this.down = { relative: new b(), position: new b() }, this.move = { relative: new b(), position: new b() }, this.drag = { relative: new b(), position: new b() }, this.up = { relative: new b(), position: new b() }, this.isDown = !1, this.isOver = !1, this.eventManager = new st(), this.initializedEvents = {}, this.clientX = 0, this.clientY = 0, this.element = e, this.rect = this.element.getBoundingClientRect(), window.addEventListener("resize", this.onResize.bind(this), !1), window.addEventListener("wheel", this.onResize.bind(this), !1);
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
  on(e, t, s = {}) {
    this.initEvent(e), this.eventManager.on(e, t, s);
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
    return this.initEvent("down"), this.initEvent("up"), this.eventManager.on(
      "up",
      (s) => {
        s.mouse.drag.position.length() < 10 && e(s);
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
class Qt {
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
    const t = ~~Le(this.world.camera.near, this.world.camera.far, 0.5), s = new p.BoxGeometry(t, t, t), n = new p.Mesh(
      s,
      e.map((i) => new p.MeshBasicMaterial({ map: new p.TextureLoader().load(i), side: p.BackSide }))
    );
    this.world.scene.add(n);
  }
  buildSceneBackground(e) {
    const s = new p.CubeTextureLoader().load(e);
    s.transformUv(new p.Vector2(100, 0.5)), this.world.scene.background = s;
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
    const s = new p.TextureLoader().load(e);
    s.magFilter = p.LinearFilter, s.minFilter = p.LinearFilter;
    const n = new p.ShaderMaterial({
      // fragmentShader: shader.fragmentShader,
      // vertexShader: shader.vertexShader,
      // uniforms: shader.uniforms,
      // depthWrite: false,
      side: p.BackSide
    }), i = ~~Le(this.world.camera.near, this.world.camera.far, 0.5), o = new p.BoxGeometry(i, i, i);
    this.bgMesh = new p.Mesh(o, n), this.world.scene.add(this.bgMesh);
  }
}
class es {
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
  on(e, t, s, n = {}) {
    this.initEvent(t), this.lookup[t][e.id] = { object: e, callback: s, options: n }, this.lookupChildren[t].push(e), e.userData.selectable = !0, t === "click" && (this.on(e, "down", () => {
    }), this.on(
      e,
      "up",
      () => {
      },
      { isClick: !0 }
    )), t === "enter" && this.on(e, "move", () => {
    });
  }
  off(e, t, s) {
    this.initEvent(t), this.lookup[t] && delete this.lookup[t][e.id], this.lookupChildren[t].push(e);
  }
  getObjects(e) {
    return this.lookupChildren?.[e] ?? [];
  }
  // TODO: enter and leave not quite there
  trigger(e, t, s) {
    if (e) {
      const n = this.lookup?.[t]?.[e.id];
      n && (n.callback && n.callback({ type: t, target: e, intersection: s }), this.currentTargets[t] = e, n.options?.once === !0 && this.off(e, t), t === "up" && n.options?.isClick === !0 && this.world.mouse.mouseUp.distanceTo(this.world.mouse.mouseDown) < this.maxClickDistance && this.currentTargets.down === e && this.trigger(e, "click", s), t === "move" && this.currentTargets.enter !== e && (this.currentTargets.enter && (this.trigger(this.currentTargets.enter, "leave", s), this.currentTargets.enter = void 0), this.trigger(e, "enter", s)));
    } else
      t === "move" && this.currentTargets.enter && (this.trigger(
        this.currentTargets.enter,
        "leave"
        /* LEAVE */
      ), this.currentTargets.enter = void 0);
  }
}
const ve = new J(), De = new S();
class Ce {
  /**
   * Constructs a new XR hand primitive model.
   *
   * @param {XRHandModel} handModel - The hand model.
   * @param {Group} controller - The WebXR controller.
   * @param {string} path - The model path.
   * @param {XRHandedness} handedness - The handedness of the XR input source.
   * @param {XRHandPrimitiveModel~Options} options - The model options.
   */
  constructor(e, t, s, n, i) {
    this.controller = t, this.handModel = e, this.envMap = null;
    let o;
    !i || !i.primitive || i.primitive === "sphere" ? o = new Xe(1, 10, 10) : i.primitive === "box" && (o = new ht(1, 1, 1));
    const l = new ye();
    this.handMesh = new We(o, l, 30), this.handMesh.frustumCulled = !1, this.handMesh.instanceMatrix.setUsage(ut), this.handMesh.castShadow = !0, this.handMesh.receiveShadow = !0, this.handModel.add(this.handMesh), this.joints = [
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
  /**
   * Updates the mesh based on the tracked XR joints data.
   */
  updateMesh() {
    const t = this.controller.joints;
    let s = 0;
    for (let n = 0; n < this.joints.length; n++) {
      const i = t[this.joints[n]];
      i.visible && (De.setScalar(i.jointRadius || 8e-3), ve.compose(i.position, i.quaternion, De), this.handMesh.setMatrixAt(n, ve), s++);
    }
    this.handMesh.count = s, this.handMesh.instanceMatrix.needsUpdate = !0;
  }
}
function Pe(r, e) {
  if (e === dt)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === fe || e === Ye) {
    let t = r.getIndex();
    if (t === null) {
      const o = [], l = r.getAttribute("position");
      if (l !== void 0) {
        for (let a = 0; a < l.count; a++)
          o.push(a);
        r.setIndex(o), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const s = t.count - 2, n = [];
    if (e === fe)
      for (let o = 1; o <= s; o++)
        n.push(t.getX(0)), n.push(t.getX(o)), n.push(t.getX(o + 1));
    else
      for (let o = 0; o < s; o++)
        o % 2 === 0 ? (n.push(t.getX(o)), n.push(t.getX(o + 1)), n.push(t.getX(o + 2))) : (n.push(t.getX(o + 2)), n.push(t.getX(o + 1)), n.push(t.getX(o)));
    n.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = r.clone();
    return i.setIndex(n), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class nt extends pt {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new os(t);
    }), this.register(function(t) {
      return new rs(t);
    }), this.register(function(t) {
      return new ms(t);
    }), this.register(function(t) {
      return new gs(t);
    }), this.register(function(t) {
      return new ws(t);
    }), this.register(function(t) {
      return new ls(t);
    }), this.register(function(t) {
      return new cs(t);
    }), this.register(function(t) {
      return new hs(t);
    }), this.register(function(t) {
      return new us(t);
    }), this.register(function(t) {
      return new is(t);
    }), this.register(function(t) {
      return new ds(t);
    }), this.register(function(t) {
      return new as(t);
    }), this.register(function(t) {
      return new fs(t);
    }), this.register(function(t) {
      return new ps(t);
    }), this.register(function(t) {
      return new ss(t);
    }), this.register(function(t) {
      return new _s(t);
    }), this.register(function(t) {
      return new ys(t);
    });
  }
  /**
   * Starts loading from the given URL and passes the loaded glTF asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, s, n) {
    const i = this;
    let o;
    if (this.resourcePath !== "")
      o = this.resourcePath;
    else if (this.path !== "") {
      const c = q.extractUrlBase(e);
      o = q.resolveURL(c, this.path);
    } else
      o = q.extractUrlBase(e);
    this.manager.itemStart(e);
    const l = function(c) {
      n ? n(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, a = new qe(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
      try {
        i.parse(c, o, function(u) {
          t(u), i.manager.itemEnd(e);
        }, l);
      } catch (u) {
        l(u);
      }
    }, s, l);
  }
  /**
   * Sets the given Draco loader to this loader. Required for decoding assets
   * compressed with the `KHR_draco_mesh_compression` extension.
   *
   * @param {DRACOLoader} dracoLoader - The Draco loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  /**
   * Sets the given KTX2 loader to this loader. Required for loading KTX2
   * compressed textures.
   *
   * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  /**
   * Sets the given meshopt decoder. Required for decoding assets
   * compressed with the `EXT_meshopt_compression` extension.
   *
   * @param {Object} meshoptDecoder - The meshopt decoder to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  /**
   * Registers a plugin callback. This API is internally used to implement the various
   * glTF extensions but can also used by third-party code to add additional logic
   * to the loader.
   *
   * @param {function(parser:GLTFParser)} callback - The callback function to register.
   * @return {GLTFLoader} A reference to this loader.
   */
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  /**
   * Unregisters a plugin callback.
   *
   * @param {Function} callback - The callback function to unregister.
   * @return {GLTFLoader} A reference to this loader.
   */
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(e, t, s, n) {
    let i;
    const o = {}, l = {}, a = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(e, 0, 4)) === it) {
        try {
          o[y.KHR_BINARY_GLTF] = new xs(e);
        } catch (h) {
          n && n(h);
          return;
        }
        i = JSON.parse(o[y.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(a.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Ns(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), l[h.name] = h, o[h.name] = !0;
    }
    if (i.extensionsUsed)
      for (let u = 0; u < i.extensionsUsed.length; ++u) {
        const h = i.extensionsUsed[u], d = i.extensionsRequired || [];
        switch (h) {
          case y.KHR_MATERIALS_UNLIT:
            o[h] = new ns();
            break;
          case y.KHR_DRACO_MESH_COMPRESSION:
            o[h] = new Ts(i, this.dracoLoader);
            break;
          case y.KHR_TEXTURE_TRANSFORM:
            o[h] = new bs();
            break;
          case y.KHR_MESH_QUANTIZATION:
            o[h] = new Es();
            break;
          default:
            d.indexOf(h) >= 0 && l[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(o), c.setPlugins(l), c.parse(s, n);
  }
  /**
   * Async version of {@link GLTFLoader#parse}.
   *
   * @async
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
   */
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(n, i) {
      s.parse(e, t, n, i);
    });
  }
}
function ts() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const y = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class ss {
  constructor(e) {
    this.parser = e, this.name = y.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, s = "light:" + e;
    let n = t.cache.get(s);
    if (n) return n;
    const i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new j(16777215);
    a.color !== void 0 && u.setRGB(a.color[0], a.color[1], a.color[2], O);
    const h = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        c = new gt(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new mt(u), c.distance = h;
        break;
      case "spot":
        c = new ft(u), c.distance = h, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, c.angle = a.spot.outerConeAngle, c.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return c.position.set(0, 0, 0), P(c, a), a.intensity !== void 0 && (c.intensity = a.intensity), c.name = t.createUniqueName(a.name || "light_" + e), n = Promise.resolve(c), t.cache.add(s, n), n;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, s = this.parser, i = s.json.nodes[e], l = (i.extensions && i.extensions[this.name] || {}).light;
    return l === void 0 ? null : this._loadLight(l).then(function(a) {
      return s._getNodeRef(t.cache, l, a);
    });
  }
}
class ns {
  constructor() {
    this.name = y.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return H;
  }
  extendParams(e, t, s) {
    const n = [];
    e.color = new j(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], O), e.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && n.push(s.assignTexture(e, "map", i.baseColorTexture, $));
    }
    return Promise.all(n);
  }
}
class is {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class os {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(s.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const l = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new b(l, l);
    }
    return Promise.all(i);
  }
}
class rs {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class as {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(s.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class ls {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new j(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = n.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const l = o.sheenColorFactor;
      t.sheenColor.setRGB(l[0], l[1], l[2], O);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(s.assignTexture(t, "sheenColorMap", o.sheenColorTexture, $)), o.sheenRoughnessTexture !== void 0 && i.push(s.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class cs {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(s.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class hs {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(s.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const l = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new j().setRGB(l[0], l[1], l[2], O), Promise.all(i);
  }
}
class us {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const n = this.parser.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class ds {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(s.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const l = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new j().setRGB(l[0], l[1], l[2], O), o.specularColorTexture !== void 0 && i.push(s.assignTexture(t, "specularColorMap", o.specularColorTexture, $)), Promise.all(i);
  }
}
class ps {
  constructor(e) {
    this.parser = e, this.name = y.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && i.push(s.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(i);
  }
}
class fs {
  constructor(e) {
    this.parser = e, this.name = y.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const s = this.parser.json.materials[e];
    return !s.extensions || !s.extensions[this.name] ? null : N;
  }
  extendMaterialParams(e, t) {
    const s = this.parser, n = s.json.materials[e];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && i.push(s.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(i);
  }
}
class ms {
  constructor(e) {
    this.parser = e, this.name = y.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, s = t.json, n = s.textures[e];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, o);
  }
}
class gs {
  constructor(e) {
    this.parser = e, this.name = y.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], l = n.images[o.source];
    let a = s.textureLoader;
    if (l.uri) {
      const c = s.options.manager.getHandler(l.uri);
      c !== null && (a = c);
    }
    return s.loadTextureImage(e, o.source, a);
  }
}
class ws {
  constructor(e) {
    this.parser = e, this.name = y.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, s = this.parser, n = s.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], l = n.images[o.source];
    let a = s.textureLoader;
    if (l.uri) {
      const c = s.options.manager.getHandler(l.uri);
      c !== null && (a = c);
    }
    return s.loadTextureImage(e, o.source, a);
  }
}
class _s {
  constructor(e) {
    this.name = y.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, s = t.bufferViews[e];
    if (s.extensions && s.extensions[this.name]) {
      const n = s.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(l) {
        const a = n.byteOffset || 0, c = n.byteLength || 0, u = n.count, h = n.byteStride, d = new Uint8Array(l, a, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, d, n.mode, n.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(u * h);
          return o.decodeGltfBuffer(new Uint8Array(f), u, h, d, n.mode, n.filter), f;
        });
      });
    } else
      return null;
  }
}
class ys {
  constructor(e) {
    this.name = y.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, s = t.nodes[e];
    if (!s.extensions || !s.extensions[this.name] || s.mesh === void 0)
      return null;
    const n = t.meshes[s.mesh];
    for (const c of n.primitives)
      if (c.mode !== D.TRIANGLES && c.mode !== D.TRIANGLE_STRIP && c.mode !== D.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const o = s.extensions[this.name].attributes, l = [], a = {};
    for (const c in o)
      l.push(this.parser.getDependency("accessor", o[c]).then((u) => (a[c] = u, a[c])));
    return l.length < 1 ? null : (l.push(this.parser.createNodeMesh(e)), Promise.all(l).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, f = [];
      for (const g of h) {
        const _ = new J(), m = new S(), w = new ee(), R = new S(1, 1, 1), E = new We(g.geometry, g.material, d);
        for (let T = 0; T < d; T++)
          a.TRANSLATION && m.fromBufferAttribute(a.TRANSLATION, T), a.ROTATION && w.fromBufferAttribute(a.ROTATION, T), a.SCALE && R.fromBufferAttribute(a.SCALE, T), E.setMatrixAt(T, _.compose(m, w, R));
        for (const T in a)
          if (T === "_COLOR_0") {
            const v = a[T];
            E.instanceColor = new wt(v.array, v.itemSize, v.normalized);
          } else T !== "TRANSLATION" && T !== "ROTATION" && T !== "SCALE" && g.geometry.setAttribute(T, a[T]);
        se.prototype.copy.call(E, g), this.parser.assignFinalMaterial(E), f.push(E);
      }
      return u.isGroup ? (u.clear(), u.add(...f), u) : f[0];
    }));
  }
}
const it = "glTF", X = 12, Ne = { JSON: 1313821514, BIN: 5130562 };
class xs {
  constructor(e) {
    this.name = y.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, X), s = new TextDecoder();
    if (this.header = {
      magic: s.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== it)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - X, i = new DataView(e, X);
    let o = 0;
    for (; o < n; ) {
      const l = i.getUint32(o, !0);
      o += 4;
      const a = i.getUint32(o, !0);
      if (o += 4, a === Ne.JSON) {
        const c = new Uint8Array(e, X + o, l);
        this.content = s.decode(c);
      } else if (a === Ne.BIN) {
        const c = X + o;
        this.body = e.slice(c, c + l);
      }
      o += l;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Ts {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = y.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const s = this.json, n = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, l = {}, a = {}, c = {};
    for (const u in o) {
      const h = we[u] || u.toLowerCase();
      l[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = we[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const d = s.accessors[e.attributes[u]], f = V[d.componentType];
        c[h] = f.name, a[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(u) {
      return new Promise(function(h, d) {
        n.decodeDracoFile(u, function(f) {
          for (const g in f.attributes) {
            const _ = f.attributes[g], m = a[g];
            m !== void 0 && (_.normalized = m);
          }
          h(f);
        }, l, c, O, d);
      });
    });
  }
}
class bs {
  constructor() {
    this.name = y.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Es {
  constructor() {
    this.name = y.KHR_MESH_QUANTIZATION;
  }
}
class ot extends Vt {
  constructor(e, t, s, n) {
    super(e, t, s, n);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, i = e * n * 3 + n;
    for (let o = 0; o !== n; o++)
      t[o] = s[i + o];
    return t;
  }
  interpolate_(e, t, s, n) {
    const i = this.resultBuffer, o = this.sampleValues, l = this.valueSize, a = l * 2, c = l * 3, u = n - t, h = (s - t) / u, d = h * h, f = d * h, g = e * c, _ = g - c, m = -2 * f + 3 * d, w = f - d, R = 1 - m, E = w - d + h;
    for (let T = 0; T !== l; T++) {
      const v = o[_ + T + l], I = o[_ + T + a] * u, C = o[g + T + l], z = o[g + T] * u;
      i[T] = R * v + E * I + m * C + w * z;
    }
    return i;
  }
}
const Ms = new ee();
class Rs extends ot {
  interpolate_(e, t, s, n) {
    const i = super.interpolate_(e, t, s, n);
    return Ms.fromArray(i).normalize().toArray(i), i;
  }
}
const D = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, V = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Oe = {
  9728: Je,
  9729: me,
  9984: Mt,
  9985: Et,
  9986: bt,
  9987: Ze
}, Ie = {
  33071: At,
  33648: Rt,
  10497: ge
}, ce = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, we = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, k = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, As = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: tt,
  STEP: Bt
}, he = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ss(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ye({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Gt
  })), r.DefaultMaterial;
}
function F(r, e, t) {
  for (const s in t.extensions)
    r[s] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[s] = t.extensions[s]);
}
function P(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Ls(r, e, t) {
  let s = !1, n = !1, i = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (s = !0), h.NORMAL !== void 0 && (n = !0), h.COLOR_0 !== void 0 && (i = !0), s && n && i) break;
  }
  if (!s && !n && !i) return Promise.resolve(r);
  const o = [], l = [], a = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (s) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : r.attributes.position;
      o.push(d);
    }
    if (n) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : r.attributes.normal;
      l.push(d);
    }
    if (i) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : r.attributes.color;
      a.push(d);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(l),
    Promise.all(a)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return s && (r.morphAttributes.position = u), n && (r.morphAttributes.normal = h), i && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r;
  });
}
function vs(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, s = e.weights.length; t < s; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let s = 0, n = t.length; s < n; s++)
        r.morphTargetDictionary[t[s]] = s;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ds(r) {
  let e;
  const t = r.extensions && r.extensions[y.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ue(t.attributes) : e = r.indices + ":" + ue(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let s = 0, n = r.targets.length; s < n; s++)
      e += ":" + ue(r.targets[s]);
  return e;
}
function ue(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let s = 0, n = t.length; s < n; s++)
    e += t[s] + ":" + r[t[s]] + ";";
  return e;
}
function _e(r) {
  switch (r) {
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
function Cs(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Ps = new J();
class Ns {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ts(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let s = !1, n = -1, i = !1, o = -1;
    if (typeof navigator < "u") {
      const l = navigator.userAgent;
      s = /^((?!chrome|android).)*safari/i.test(l) === !0;
      const a = l.match(/Version\/(\d+)/);
      n = s && a ? parseInt(a[1], 10) : -1, i = l.indexOf("Firefox") > -1, o = i ? l.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || s && n < 17 || i && o < 98 ? this.textureLoader = new _t(this.options.manager) : this.textureLoader = new yt(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new qe(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const s = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        s.getDependencies("scene"),
        s.getDependencies("animation"),
        s.getDependencies("camera")
      ]);
    }).then(function(o) {
      const l = {
        scene: o[0][n.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: n.asset,
        parser: s,
        userData: {}
      };
      return F(i, l, n), P(l, n), Promise.all(s._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(l);
      })).then(function() {
        for (const a of l.scenes)
          a.updateMatrixWorld();
        e(l);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   *
   * @private
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const o = t[n].joints;
      for (let l = 0, a = o.length; l < a; l++)
        e[o[l]].isBone = !0;
    }
    for (let n = 0, i = e.length; n < i; n++) {
      const o = e[n];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (s[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
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
   *
   * @private
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @private
   * @param {Object} cache
   * @param {number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(e, t, s) {
    if (e.refs[t] <= 1) return s;
    const n = s.clone(), i = (o, l) => {
      const a = this.associations.get(o);
      a != null && this.associations.set(l, a);
      for (const [c, u] of o.children.entries())
        i(u, l.children[c]);
    };
    return i(s, n), n.name += "_instance_" + e.uses[t]++, n;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let s = 0; s < t.length; s++) {
      const n = e(t[s]);
      if (n) return n;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const s = [];
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      i && s.push(i);
    }
    return s;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const s = e + ":" + t;
    let n = this.cache.get(s);
    if (!n) {
      switch (e) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          n = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          if (n = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !n)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(s, n);
    }
    return n;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const s = this, n = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(n.map(function(i, o) {
        return s.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], s = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[y.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, o) {
      s.load(q.resolveURL(t.uri, n.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(s) {
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return s.slice(i, i + n);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   *
   * @private
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, s = this.json, n = this.json.accessors[e];
    if (n.bufferView === void 0 && n.sparse === void 0) {
      const o = ce[n.type], l = V[n.componentType], a = n.normalized === !0, c = new l(n.count * o);
      return Promise.resolve(new oe(c, o, a));
    }
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const l = o[0], a = ce[n.type], c = V[n.componentType], u = c.BYTES_PER_ELEMENT, h = u * a, d = n.byteOffset || 0, f = n.bufferView !== void 0 ? s.bufferViews[n.bufferView].byteStride : void 0, g = n.normalized === !0;
      let _, m;
      if (f && f !== h) {
        const w = Math.floor(d / f), R = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + w + ":" + n.count;
        let E = t.cache.get(R);
        E || (_ = new c(l, w * f, n.count * f / u), E = new xt(_, f / u), t.cache.add(R, E)), m = new Tt(E, a, d % f / u, g);
      } else
        l === null ? _ = new c(n.count * a) : _ = new c(l, d, n.count * a), m = new oe(_, a, g);
      if (n.sparse !== void 0) {
        const w = ce.SCALAR, R = V[n.sparse.indices.componentType], E = n.sparse.indices.byteOffset || 0, T = n.sparse.values.byteOffset || 0, v = new R(o[1], E, n.sparse.count * w), I = new c(o[2], T, n.sparse.count * a);
        l !== null && (m = new oe(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let C = 0, z = v.length; C < z; C++) {
          const U = v[C];
          if (m.setX(U, I[C * a]), a >= 2 && m.setY(U, I[C * a + 1]), a >= 3 && m.setZ(U, I[C * a + 2]), a >= 4 && m.setW(U, I[C * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   *
   * @private
   * @param {number} textureIndex
   * @return {Promise<?Texture>}
   */
  loadTexture(e) {
    const t = this.json, s = this.options, i = t.textures[e].source, o = t.images[i];
    let l = this.textureLoader;
    if (o.uri) {
      const a = s.manager.getHandler(o.uri);
      a !== null && (l = a);
    }
    return this.loadTextureImage(e, i, l);
  }
  loadTextureImage(e, t, s) {
    const n = this, i = this.json, o = i.textures[e], l = i.images[t], a = (l.uri || l.bufferView) + ":" + o.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const c = this.loadImageSource(t, s).then(function(u) {
      u.flipY = !1, u.name = o.name || l.name || "", u.name === "" && typeof l.uri == "string" && l.uri.startsWith("data:image/") === !1 && (u.name = l.uri);
      const d = (i.samplers || {})[o.sampler] || {};
      return u.magFilter = Oe[d.magFilter] || me, u.minFilter = Oe[d.minFilter] || Ze, u.wrapS = Ie[d.wrapS] || ge, u.wrapT = Ie[d.wrapT] || ge, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Je && u.minFilter !== me, n.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = c, c;
  }
  loadImageSource(e, t) {
    const s = this, n = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const o = n.images[e], l = self.URL || self.webkitURL;
    let a = o.uri || "", c = !1;
    if (o.bufferView !== void 0)
      a = s.getDependency("bufferView", o.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: o.mimeType });
        return a = l.createObjectURL(d), a;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(a).then(function(h) {
      return new Promise(function(d, f) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new be(_);
          m.needsUpdate = !0, d(m);
        }), t.load(q.resolveURL(h, i.path), g, void 0, f);
      });
    }).then(function(h) {
      return c === !0 && l.revokeObjectURL(a), P(h, o), h.userData.mimeType = o.mimeType || Cs(o.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @private
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} [colorSpace]
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, s, n) {
    const i = this;
    return this.getDependency("texture", s.index).then(function(o) {
      if (!o) return null;
      if (s.texCoord !== void 0 && s.texCoord > 0 && (o = o.clone(), o.channel = s.texCoord), i.extensions[y.KHR_TEXTURE_TRANSFORM]) {
        const l = s.extensions !== void 0 ? s.extensions[y.KHR_TEXTURE_TRANSFORM] : void 0;
        if (l) {
          const a = i.associations.get(o);
          o = i.extensions[y.KHR_TEXTURE_TRANSFORM].extendTexture(o, l), i.associations.set(o, a);
        }
      }
      return n !== void 0 && (o.colorSpace = n), e[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   *
   * @private
   * @param {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let s = e.material;
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const l = "PointsMaterial:" + s.uuid;
      let a = this.cache.get(l);
      a || (a = new St(), re.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, a.sizeAttenuation = !1, this.cache.add(l, a)), s = a;
    } else if (e.isLine) {
      const l = "LineBasicMaterial:" + s.uuid;
      let a = this.cache.get(l);
      a || (a = new Lt(), re.prototype.copy.call(a, s), a.color.copy(s.color), a.map = s.map, this.cache.add(l, a)), s = a;
    }
    if (n || i || o) {
      let l = "ClonedMaterial:" + s.uuid + ":";
      n && (l += "derivative-tangents:"), i && (l += "vertex-colors:"), o && (l += "flat-shading:");
      let a = this.cache.get(l);
      a || (a = s.clone(), i && (a.vertexColors = !0), o && (a.flatShading = !0), n && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(l, a), this.associations.set(a, this.associations.get(s))), s = a;
    }
    e.material = s;
  }
  getMaterialType() {
    return ye;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, s = this.json, n = this.extensions, i = s.materials[e];
    let o;
    const l = {}, a = i.extensions || {}, c = [];
    if (a[y.KHR_MATERIALS_UNLIT]) {
      const h = n[y.KHR_MATERIALS_UNLIT];
      o = h.getMaterialType(), c.push(h.extendParams(l, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (l.color = new j(1, 1, 1), l.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        l.color.setRGB(d[0], d[1], d[2], O), l.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(l, "map", h.baseColorTexture, $)), l.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, l.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(l, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(l, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, l);
      })));
    }
    i.doubleSided === !0 && (l.side = vt);
    const u = i.alphaMode || he.OPAQUE;
    if (u === he.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, u === he.MASK && (l.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== H && (c.push(t.assignTexture(l, "normalMap", i.normalTexture)), l.normalScale = new b(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      l.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && o !== H && (c.push(t.assignTexture(l, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (l.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== H) {
      const h = i.emissiveFactor;
      l.emissive = new j().setRGB(h[0], h[1], h[2], O);
    }
    return i.emissiveTexture !== void 0 && o !== H && c.push(t.assignTexture(l, "emissiveMap", i.emissiveTexture, $)), Promise.all(c).then(function() {
      const h = new o(l);
      return i.name && (h.name = i.name), P(h, i), t.associations.set(h, { materials: e }), i.extensions && F(n, h, i), h;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @private
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(e) {
    const t = Dt.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @private
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, s = this.extensions, n = this.primitiveCache;
    function i(l) {
      return s[y.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l, t).then(function(a) {
        return ke(a, l, t);
      });
    }
    const o = [];
    for (let l = 0, a = e.length; l < a; l++) {
      const c = e[l], u = Ds(c), h = n[u];
      if (h)
        o.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[y.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = ke(new $e(), c, t), n[u] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   *
   * @private
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
   */
  loadMesh(e) {
    const t = this, s = this.json, n = this.extensions, i = s.meshes[e], o = i.primitives, l = [];
    for (let a = 0, c = o.length; a < c; a++) {
      const u = o[a].material === void 0 ? Ss(this.cache) : this.getDependency("material", o[a].material);
      l.push(u);
    }
    return l.push(t.loadGeometries(o)), Promise.all(l).then(function(a) {
      const c = a.slice(0, a.length - 1), u = a[a.length - 1], h = [];
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], m = o[f];
        let w;
        const R = c[f];
        if (m.mode === D.TRIANGLES || m.mode === D.TRIANGLE_STRIP || m.mode === D.TRIANGLE_FAN || m.mode === void 0)
          w = i.isSkinnedMesh === !0 ? new Ct(_, R) : new Qe(_, R), w.isSkinnedMesh === !0 && w.normalizeSkinWeights(), m.mode === D.TRIANGLE_STRIP ? w.geometry = Pe(w.geometry, Ye) : m.mode === D.TRIANGLE_FAN && (w.geometry = Pe(w.geometry, fe));
        else if (m.mode === D.LINES)
          w = new Pt(_, R);
        else if (m.mode === D.LINE_STRIP)
          w = new Nt(_, R);
        else if (m.mode === D.LINE_LOOP)
          w = new Ot(_, R);
        else if (m.mode === D.POINTS)
          w = new It(_, R);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(w.geometry.morphAttributes).length > 0 && vs(w, i), w.name = t.createUniqueName(i.name || "mesh_" + e), P(w, i), m.extensions && F(n, w, m), t.assignFinalMaterial(w), h.push(w);
      }
      for (let f = 0, g = h.length; f < g; f++)
        t.associations.set(h[f], {
          meshes: e,
          primitives: f
        });
      if (h.length === 1)
        return i.extensions && F(n, h[0], i), h[0];
      const d = new ae();
      i.extensions && F(n, d, i), t.associations.set(d, { meshes: e });
      for (let f = 0, g = h.length; f < g; f++)
        d.add(h[f]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   *
   * @private
   * @param {number} cameraIndex
   * @return {Promise<Camera>|undefined}
   */
  loadCamera(e) {
    let t;
    const s = this.json.cameras[e], n = s[s.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return s.type === "perspective" ? t = new kt(et.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : s.type === "orthographic" && (t = new Ft(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), P(t, s), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   *
   * @private
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], s = [];
    for (let n = 0, i = t.joints.length; n < i; n++)
      s.push(this._loadNodeShallow(t.joints[n]));
    return t.inverseBindMatrices !== void 0 ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then(function(n) {
      const i = n.pop(), o = n, l = [], a = [];
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        if (h) {
          l.push(h);
          const d = new J();
          i !== null && d.fromArray(i.array, c * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new jt(l, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   *
   * @private
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, s = this, n = t.animations[e], i = n.name ? n.name : "animation_" + e, o = [], l = [], a = [], c = [], u = [];
    for (let h = 0, d = n.channels.length; h < d; h++) {
      const f = n.channels[h], g = n.samplers[f.sampler], _ = f.target, m = _.node, w = n.parameters !== void 0 ? n.parameters[g.input] : g.input, R = n.parameters !== void 0 ? n.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", m)), l.push(this.getDependency("accessor", w)), a.push(this.getDependency("accessor", R)), c.push(g), u.push(_));
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(l),
      Promise.all(a),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], f = h[1], g = h[2], _ = h[3], m = h[4], w = [];
      for (let E = 0, T = d.length; E < T; E++) {
        const v = d[E], I = f[E], C = g[E], z = _[E], U = m[E];
        if (v === void 0) continue;
        v.updateMatrix && v.updateMatrix();
        const ne = s._createAnimationTracks(v, I, C, z, U);
        if (ne)
          for (let ie = 0; ie < ne.length; ie++)
            w.push(ne[ie]);
      }
      const R = new Ut(i, void 0, w);
      return P(R, n), R;
    });
  }
  createNodeMesh(e) {
    const t = this.json, s = this, n = t.nodes[e];
    return n.mesh === void 0 ? null : s.getDependency("mesh", n.mesh).then(function(i) {
      const o = s._getNodeRef(s.meshCache, n.mesh, i);
      return n.weights !== void 0 && o.traverse(function(l) {
        if (l.isMesh)
          for (let a = 0, c = n.weights.length; a < c; a++)
            l.morphTargetInfluences[a] = n.weights[a];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   *
   * @private
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, s = this, n = t.nodes[e], i = s._loadNodeShallow(e), o = [], l = n.children || [];
    for (let c = 0, u = l.length; c < u; c++)
      o.push(s.getDependency("node", l[c]));
    const a = n.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", n.skin);
    return Promise.all([
      i,
      Promise.all(o),
      a
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      d !== null && u.traverse(function(f) {
        f.isSkinnedMesh && f.bind(d, Ps);
      });
      for (let f = 0, g = h.length; f < g; f++)
        u.add(h[f]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, s = this.extensions, n = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], o = i.name ? n.createUniqueName(i.name) : "", l = [], a = n._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return a && l.push(a), i.camera !== void 0 && l.push(n.getDependency("camera", i.camera).then(function(c) {
      return n._getNodeRef(n.cameraCache, i.camera, c);
    })), n._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      l.push(c);
    }), this.nodeCache[e] = Promise.all(l).then(function(c) {
      let u;
      if (i.isBone === !0 ? u = new Ht() : c.length > 1 ? u = new ae() : c.length === 1 ? u = c[0] : u = new se(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (i.name && (u.userData.name = i.name, u.name = o), P(u, i), i.extensions && F(s, u, i), i.matrix !== void 0) {
        const h = new J();
        h.fromArray(i.matrix), u.applyMatrix4(h);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      if (!n.associations.has(u))
        n.associations.set(u, {});
      else if (i.mesh !== void 0 && n.meshCache.refs[i.mesh] > 1) {
        const h = n.associations.get(u);
        n.associations.set(u, { ...h });
      }
      return n.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   *
   * @private
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, s = this.json.scenes[e], n = this, i = new ae();
    s.name && (i.name = n.createUniqueName(s.name)), P(i, s), s.extensions && F(t, i, s);
    const o = s.nodes || [], l = [];
    for (let a = 0, c = o.length; a < c; a++)
      l.push(n.getDependency("node", o[a]));
    return Promise.all(l).then(function(a) {
      for (let u = 0, h = a.length; u < h; u++)
        i.add(a[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, f] of n.associations)
          (d instanceof re || d instanceof be) && h.set(d, f);
        return u.traverse((d) => {
          const f = n.associations.get(d);
          f != null && h.set(d, f);
        }), h;
      };
      return n.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, s, n, i) {
    const o = [], l = e.name ? e.name : e.uuid, a = [];
    k[i.path] === k.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(l);
    let c;
    switch (k[i.path]) {
      case k.weights:
        c = Me;
        break;
      case k.rotation:
        c = Re;
        break;
      case k.translation:
      case k.scale:
        c = Ee;
        break;
      default:
        switch (s.itemSize) {
          case 1:
            c = Me;
            break;
          case 2:
          case 3:
          default:
            c = Ee;
            break;
        }
        break;
    }
    const u = n.interpolation !== void 0 ? As[n.interpolation] : tt, h = this._getArrayFromAccessor(s);
    for (let d = 0, f = a.length; d < f; d++) {
      const g = new c(
        a[d] + "." + k[i.path],
        t.array,
        h,
        u
      );
      n.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const s = _e(t.constructor), n = new Float32Array(t.length);
      for (let i = 0, o = t.length; i < o; i++)
        n[i] = t[i] * s;
      t = n;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(s) {
      const n = this instanceof Re ? Rs : ot;
      return new n(this.times, this.values, this.getValueSize() / 3, s);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function Os(r, e, t) {
  const s = e.attributes, n = new Kt();
  if (s.POSITION !== void 0) {
    const l = t.json.accessors[s.POSITION], a = l.min, c = l.max;
    if (a !== void 0 && c !== void 0) {
      if (n.set(
        new S(a[0], a[1], a[2]),
        new S(c[0], c[1], c[2])
      ), l.normalized) {
        const u = _e(V[l.componentType]);
        n.min.multiplyScalar(u), n.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const l = new S(), a = new S();
    for (let c = 0, u = i.length; c < u; c++) {
      const h = i[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (a.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), a.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), a.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const _ = _e(V[d.componentType]);
            a.multiplyScalar(_);
          }
          l.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(l);
  }
  r.boundingBox = n;
  const o = new zt();
  n.getCenter(o.center), o.radius = n.min.distanceTo(n.max) / 2, r.boundingSphere = o;
}
function ke(r, e, t) {
  const s = e.attributes, n = [];
  function i(o, l) {
    return t.getDependency("accessor", o).then(function(a) {
      r.setAttribute(l, a);
    });
  }
  for (const o in s) {
    const l = we[o] || o.toLowerCase();
    l in r.attributes || n.push(i(s[o], l));
  }
  if (e.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", e.indices).then(function(l) {
      r.setIndex(l);
    });
    n.push(o);
  }
  return Ae.workingColorSpace !== O && "COLOR_0" in s && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ae.workingColorSpace}" not supported.`), P(r, e), Os(r, e, t), Promise.all(n).then(function() {
    return e.targets !== void 0 ? Ls(r, e.targets, t) : r;
  });
}
const Is = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";
class ks {
  /**
   * Constructs a new XR hand mesh model.
   *
   * @param {XRHandModel} handModel - The hand model.
   * @param {Group} controller - The WebXR controller.
   * @param {?string} path - The model path.
   * @param {XRHandedness} handedness - The handedness of the XR input source.
   * @param {?Loader} [loader=null] - The loader. If not provided, an instance of `GLTFLoader` will be used to load models.
   * @param {?Function} [onLoad=null] - A callback that is executed when a controller model has been loaded.
   */
  constructor(e, t, s, n, i = null, o = null) {
    this.controller = t, this.handModel = e, this.bones = [], i === null && (i = new nt(), i.setPath(s || Is)), i.load(`${n}.glb`, (l) => {
      const a = l.scene.children[0];
      this.handModel.add(a);
      const c = a.getObjectByProperty("type", "SkinnedMesh");
      c.frustumCulled = !1, c.castShadow = !0, c.receiveShadow = !0, [
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
      ].forEach((h) => {
        const d = a.getObjectByName(h);
        d !== void 0 ? d.jointName = h : console.warn(`Couldn't find ${h} in ${n} hand mesh`), this.bones.push(d);
      }), o && o(a);
    });
  }
  /**
   * Updates the mesh based on the tracked XR joints data.
   */
  updateMesh() {
    const e = this.controller.joints;
    for (let t = 0; t < this.bones.length; t++) {
      const s = this.bones[t];
      if (s) {
        const n = e[s.jointName];
        if (n.visible) {
          const i = n.position;
          s.position.copy(i), s.quaternion.copy(n.quaternion);
        }
      }
    }
  }
}
class Fs extends se {
  /**
   * Constructs a new XR hand model.
   *
   * @param {Group} controller - The hand controller.
   */
  constructor(e) {
    super(), this.controller = e, this.motionController = null, this.envMap = null, this.mesh = null;
  }
  /**
   * Overwritten with a custom implementation. Makes sure the motion controller updates the mesh.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.motionController && this.motionController.updateMesh();
  }
}
class js {
  /**
   * Constructs a new XR hand model factory.
   *
   * @param {?GLTFLoader} [gltfLoader=null] - A glTF loader that is used to load hand models.
   * @param {?Function} [onLoad=null] - A callback that is executed when a hand model has been loaded.
   */
  constructor(e = null, t = null) {
    this.gltfLoader = e, this.path = null, this.onLoad = t;
  }
  /**
   * Sets the path to the hand model repository.
   *
   * @param {string} path - The path to set.
   * @return {XRHandModelFactory} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Creates a controller model for the given WebXR hand controller.
   *
   * @param {Group} controller - The hand controller.
   * @param {('spheres'|'boxes'|'mesh')} [profile] - The model profile that defines the model type.
   * @return {XRHandModel} The XR hand model.
   */
  createHandModel(e, t) {
    const s = new Fs(e);
    return e.addEventListener("connected", (n) => {
      const i = n.data;
      i.hand && !s.motionController && (s.xrInputSource = i, t === void 0 || t === "spheres" ? s.motionController = new Ce(s, e, this.path, i.handedness, { primitive: "sphere" }) : t === "boxes" ? s.motionController = new Ce(s, e, this.path, i.handedness, { primitive: "box" }) : t === "mesh" && (s.motionController = new ks(s, e, this.path, i.handedness, this.gltfLoader, this.onLoad)));
    }), e.addEventListener("disconnected", () => {
      s.clear(), s.motionController = null;
    }), s;
  }
}
const Us = new js(), Fe = new p.Matrix4();
class je {
  constructor(e, t, s) {
    this.raycaster = new p.Raycaster(), this.isSelecting = !1, this.tmpVector1 = new p.Vector3(), this.tmpVector2 = new p.Vector3(), this.grabbing = !1, this.connected = !1, this.self = this, this.lastPosition = new p.Vector3(), this.moveVector = new p.Vector3(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.onSelectStart = this.onSelectStart.bind(this), this.onSelectEnd = this.onSelectEnd.bind(this), this._onMove = this._onMove.bind(this), this.onConnected = this.onConnected.bind(this), this.onDisconnected = this.onDisconnected.bind(this), this.controller = t.xr.getHand(e), this.controller.userData.built = !1, this.controller.addEventListener("connected", this.onConnected), this.controller.addEventListener("disconnected", this.onDisconnected), this.controller.add(Us.createHandModel(this.controller)), this.scene = s;
  }
  buildController(e) {
    let t, s;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return console.log("add line to hand"), t = new p.BufferGeometry(), t.setAttribute("position", new p.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3)), t.setAttribute("color", new p.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)), s = new p.LineBasicMaterial({ vertexColors: !0, blending: p.AdditiveBlending }), new p.Line(t, s);
      case "gaze":
        return t = new p.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1), s = new p.MeshBasicMaterial({ opacity: 0.5, transparent: !0 }), new p.Mesh(t, s);
    }
  }
  getSelectedObject(e) {
    const t = this.getPart(W.INDEX.JOINT1);
    if (t) {
      Fe.identity().extractRotation(t.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(t.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(Fe);
      let s = e.children.length, n, i;
      for (; s--; )
        if (n = e.children[s], n.userData.selectable === !0 && (i = this.raycaster.intersectObject(n, !1), i.length > 0))
          return n;
    }
    return null;
  }
  collideObject(e, t) {
    console.log("collide", e?.children.length);
    const s = e?.children?.length ?? 0;
    for (let n = 0; n < s; n++) {
      const i = e.children[n];
      if (i.userData.selectable === !0 && i instanceof p.Mesh && t.getWorldPosition(this.tmpVector1).distanceTo(i.getWorldPosition(this.tmpVector2)) < i.geometry.boundingSphere.radius * i.scale.x)
        return console.log("found mesh"), i;
    }
    return null;
  }
  onConnected(e) {
    Object.keys(this.controller?.joints ?? {}).length > 5 && (console.log("hand", this.controllerIndex, "connected"), this.connected = !0, this.controller.addEventListener("selectstart", this.onSelectStart), this.controller.addEventListener("selectend", this.onSelectEnd), this.controller.addEventListener("move", this._onMove), this.controller.userData.built === !1 && (console.log("joints", Object.keys(this.controller.joints)), W.INDEX.JOINT1 in this.controller.joints && (this.getPart(W.INDEX.JOINT1)?.add(this.buildController(e.data)), this.controller.userData.built = !0, this.lastPosition.copy(this.controller.position))));
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
      const s = t.userData.selected;
      this.scene.attach(s), t.userData.selected = void 0, this.grabbing = !1, this.onPinchEnd({ type: "pinchend", target: s });
    }
  }
  onSelectStart() {
    this.controller.userData.selectPosition = this.getPart(W.INDEX.TIP)?.position.clone(), this.controller.userData.selectVelocity = new p.Vector3(), this.isSelecting = !0;
  }
  onSelectEnd() {
    this.isSelecting = !1;
  }
  getPart(e) {
    return this.controller.joints[e];
  }
  getLinearVelocity(e) {
    const t = e.xr.getFrame();
    if (!t) return null;
    const s = e.xr.getReferenceSpace();
    if (!s) return null;
    const n = this.getPart(W.WRIST);
    if (!n) return null;
    const i = t.getPose(n, s);
    if (!i || !i.linearVelocity) return null;
    const o = i.linearVelocity;
    return new p.Vector3(o.x, o.y, o.z);
  }
}
const W = {
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
    TIP: "pinky-finger-tip"
  }
};
class Hs {
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
    const t = e.clientX - this.rect.left, s = e.clientY - this.rect.top;
    return this.mouse.x = t / this.rect.width * 2 - 1, this.mouse.y = -(s / this.rect.height) * 2 + 1, { x: t, y: s };
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
    const s = this.raycaster.intersectObjects(e, t);
    let n = null;
    return s.length > 0 && (n = s[0]), n;
  }
}
const M = {
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
async function rt(r) {
  const e = await fetch(r);
  if (e.ok)
    return e.json();
  throw new Error(e.statusText);
}
async function Bs(r) {
  if (!r)
    throw new Error("No basePath supplied");
  return await rt(`${r}/profilesList.json`);
}
async function Gs(r, e, t = null, s = !0) {
  if (!r)
    throw new Error("No xrInputSource supplied");
  if (!e)
    throw new Error("No basePath supplied");
  const n = await Bs(e);
  let i;
  if (r.profiles.some((a) => {
    const c = n[a];
    return c && (i = {
      profileId: a,
      profilePath: `${e}/${c.path}`,
      deprecated: !!c.deprecated
    }), !!i;
  }), !i) {
    if (!t)
      throw new Error("No matching profile name found");
    const a = n[t];
    if (!a)
      throw new Error(`No matching profile name found and default profile "${t}" missing.`);
    i = {
      profileId: t,
      profilePath: `${e}/${a.path}`,
      deprecated: !!a.deprecated
    };
  }
  const o = await rt(i.profilePath);
  let l;
  if (s) {
    let a;
    if (r.handedness === "any" ? a = o.layouts[Object.keys(o.layouts)[0]] : a = o.layouts[r.handedness], !a)
      throw new Error(
        `No matching handedness, ${r.handedness}, in profile ${i.profileId}`
      );
    a.assetPath && (l = i.profilePath.replace("profile.json", a.assetPath));
  }
  return { profile: o, assetPath: l };
}
const Vs = {
  xAxis: 0,
  yAxis: 0,
  button: 0,
  state: M.ComponentState.DEFAULT
};
function Ks(r = 0, e = 0) {
  let t = r, s = e;
  if (Math.sqrt(r * r + e * e) > 1) {
    const o = Math.atan2(e, r);
    t = Math.cos(o), s = Math.sin(o);
  }
  return {
    normalizedXAxis: t * 0.5 + 0.5,
    normalizedYAxis: s * 0.5 + 0.5
  };
}
class zs {
  constructor(e) {
    this.componentProperty = e.componentProperty, this.states = e.states, this.valueNodeName = e.valueNodeName, this.valueNodeProperty = e.valueNodeProperty, this.valueNodeProperty === M.VisualResponseProperty.TRANSFORM && (this.minNodeName = e.minNodeName, this.maxNodeName = e.maxNodeName), this.value = 0, this.updateFromComponent(Vs);
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
    button: s,
    state: n
  }) {
    const { normalizedXAxis: i, normalizedYAxis: o } = Ks(e, t);
    switch (this.componentProperty) {
      case M.ComponentProperty.X_AXIS:
        this.value = this.states.includes(n) ? i : 0.5;
        break;
      case M.ComponentProperty.Y_AXIS:
        this.value = this.states.includes(n) ? o : 0.5;
        break;
      case M.ComponentProperty.BUTTON:
        this.value = this.states.includes(n) ? s : 0;
        break;
      case M.ComponentProperty.STATE:
        this.valueNodeProperty === M.VisualResponseProperty.VISIBILITY ? this.value = this.states.includes(n) : this.value = this.states.includes(n) ? 1 : 0;
        break;
      default:
        throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`);
    }
  }
}
class Xs {
  /**
   * @param {Object} componentId - Id of the component
   * @param {Object} componentDescription - Description of the component to be created
   */
  constructor(e, t) {
    if (!e || !t || !t.visualResponses || !t.gamepadIndices || Object.keys(t.gamepadIndices).length === 0)
      throw new Error("Invalid arguments supplied");
    this.id = e, this.type = t.type, this.rootNodeName = t.rootNodeName, this.touchPointNodeName = t.touchPointNodeName, this.visualResponses = {}, Object.keys(t.visualResponses).forEach((s) => {
      const n = new zs(t.visualResponses[s]);
      this.visualResponses[s] = n;
    }), this.gamepadIndices = Object.assign({}, t.gamepadIndices), this.values = {
      state: M.ComponentState.DEFAULT,
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
    if (this.values.state = M.ComponentState.DEFAULT, this.gamepadIndices.button !== void 0 && e.buttons.length > this.gamepadIndices.button) {
      const t = e.buttons[this.gamepadIndices.button];
      this.values.button = t.value, this.values.button = this.values.button < 0 ? 0 : this.values.button, this.values.button = this.values.button > 1 ? 1 : this.values.button, t.pressed || this.values.button === 1 ? this.values.state = M.ComponentState.PRESSED : (t.touched || this.values.button > M.ButtonTouchThreshold) && (this.values.state = M.ComponentState.TOUCHED);
    }
    this.gamepadIndices.xAxis !== void 0 && e.axes.length > this.gamepadIndices.xAxis && (this.values.xAxis = e.axes[this.gamepadIndices.xAxis], this.values.xAxis = this.values.xAxis < -1 ? -1 : this.values.xAxis, this.values.xAxis = this.values.xAxis > 1 ? 1 : this.values.xAxis, this.values.state === M.ComponentState.DEFAULT && Math.abs(this.values.xAxis) > M.AxisTouchThreshold && (this.values.state = M.ComponentState.TOUCHED)), this.gamepadIndices.yAxis !== void 0 && e.axes.length > this.gamepadIndices.yAxis && (this.values.yAxis = e.axes[this.gamepadIndices.yAxis], this.values.yAxis = this.values.yAxis < -1 ? -1 : this.values.yAxis, this.values.yAxis = this.values.yAxis > 1 ? 1 : this.values.yAxis, this.values.state === M.ComponentState.DEFAULT && Math.abs(this.values.yAxis) > M.AxisTouchThreshold && (this.values.state = M.ComponentState.TOUCHED)), Object.values(this.visualResponses).forEach((t) => {
      t.updateFromComponent(this.values);
    });
  }
}
class Ws {
  /**
   * @param {Object} xrInputSource - The XRInputSource to build the MotionController around
   * @param {Object} profile - The best matched profile description for the supplied xrInputSource
   * @param {string} assetUrl
   */
  constructor(e, t, s) {
    if (!e)
      throw new Error("No xrInputSource supplied");
    if (!t)
      throw new Error("No profile supplied");
    this.xrInputSource = e, this.assetUrl = s, this.id = t.profileId, this.layoutDescription = t.layouts[e.handedness], this.components = {}, Object.keys(this.layoutDescription.components).forEach((n) => {
      const i = this.layoutDescription.components[n];
      this.components[n] = new Xs(n, i);
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
const Ys = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles", qs = "generic-trigger";
class Zs extends se {
  /**
   * Constructs a new XR controller model.
   */
  constructor() {
    super(), this.motionController = null, this.envMap = null;
  }
  /**
   * Sets an environment map that is applied to the controller model.
   *
   * @param {?Texture} envMap - The environment map to apply.
   * @return {XRControllerModel} A reference to this instance.
   */
  setEnvironmentMap(e) {
    return this.envMap == e ? this : (this.envMap = e, this.traverse((t) => {
      t.isMesh && (t.material.envMap = this.envMap, t.material.needsUpdate = !0);
    }), this);
  }
  /**
   * Overwritten with a custom implementation. Polls data from the XRInputSource and updates the
   * model's components to match the real world data.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.motionController && (this.motionController.updateFromGamepad(), Object.values(this.motionController.components).forEach((t) => {
      Object.values(t.visualResponses).forEach((s) => {
        const { valueNode: n, minNode: i, maxNode: o, value: l, valueNodeProperty: a } = s;
        n && (a === M.VisualResponseProperty.VISIBILITY ? n.visible = l : a === M.VisualResponseProperty.TRANSFORM && (n.quaternion.slerpQuaternions(
          i.quaternion,
          o.quaternion,
          l
        ), n.position.lerpVectors(
          i.position,
          o.position,
          l
        )));
      });
    }));
  }
}
function Js(r, e) {
  Object.values(r.components).forEach((t) => {
    const { type: s, touchPointNodeName: n, visualResponses: i } = t;
    if (s === M.ComponentType.TOUCHPAD)
      if (t.touchPointNode = e.getObjectByName(n), t.touchPointNode) {
        const o = new Xe(1e-3), l = new H({ color: 255 }), a = new Qe(o, l);
        t.touchPointNode.add(a);
      } else
        console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);
    Object.values(i).forEach((o) => {
      const { valueNodeName: l, minNodeName: a, maxNodeName: c, valueNodeProperty: u } = o;
      if (u === M.VisualResponseProperty.TRANSFORM) {
        if (o.minNode = e.getObjectByName(a), o.maxNode = e.getObjectByName(c), !o.minNode) {
          console.warn(`Could not find ${a} in the model`);
          return;
        }
        if (!o.maxNode) {
          console.warn(`Could not find ${c} in the model`);
          return;
        }
      }
      o.valueNode = e.getObjectByName(l), o.valueNode || console.warn(`Could not find ${l} in the model`);
    });
  });
}
function Ue(r, e) {
  Js(r.motionController, e), r.envMap && e.traverse((t) => {
    t.isMesh && (t.material.envMap = r.envMap, t.material.needsUpdate = !0);
  }), r.add(e);
}
class $s {
  /**
   * Constructs a new XR controller model factory.
   *
   * @param {?GLTFLoader} [gltfLoader=null] - A glTF loader that is used to load controller models.
   * @param {?Function} [onLoad=null] - A callback that is executed when a controller model has been loaded.
   */
  constructor(e = null, t = null) {
    this.gltfLoader = e, this.path = Ys, this._assetCache = {}, this.onLoad = t, this.gltfLoader || (this.gltfLoader = new nt());
  }
  /**
   * Sets the path to the model repository.
   *
   * @param {string} path - The path to set.
   * @return {XRControllerModelFactory} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Creates a controller model for the given WebXR controller.
   *
   * @param {Group} controller - The controller.
   * @return {XRControllerModel} The XR controller model.
   */
  createControllerModel(e) {
    const t = new Zs();
    let s = null;
    return e.addEventListener("connected", (n) => {
      const i = n.data;
      i.targetRayMode !== "tracked-pointer" || !i.gamepad || i.hand || Gs(i, this.path, qs).then(({ profile: o, assetPath: l }) => {
        t.motionController = new Ws(
          i,
          o,
          l
        );
        const a = this._assetCache[t.motionController.assetUrl];
        if (a)
          s = a.scene.clone(), Ue(t, s), this.onLoad && this.onLoad(s);
        else {
          if (!this.gltfLoader)
            throw new Error("GLTFLoader not set.");
          this.gltfLoader.setPath(""), this.gltfLoader.load(
            t.motionController.assetUrl,
            (c) => {
              this._assetCache[t.motionController.assetUrl] = c, s = c.scene.clone(), Ue(t, s), this.onLoad && this.onLoad(s);
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
      t.motionController = null, t.remove(s), s = null;
    }), t;
  }
}
const Qs = new $s(), He = new p.Matrix4();
var en = /* @__PURE__ */ ((r) => (r.SELECT_START = "selectstart", r.SELECT_END = "selectend", r.MOVE = "move", r.CONNECTED = "connected", r.DISCONNECTED = "disconnected", r))(en || {});
class Be {
  constructor(e, t, s) {
    this.raycaster = new p.Raycaster(), this.isBuilt = !1, this.isConnected = !1, this.isSelecting = !1, this.userData = {}, this.eventListeners = /* @__PURE__ */ new Map(), this.lastPosition = new p.Vector3(), this.moveVector = new p.Vector3(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.controller = t.xr.getController(e), this.controller.addEventListener("selectstart", this._onSelectStart.bind(this)), this.controller.addEventListener("selectend", this._onSelectEnd.bind(this)), this.controller.addEventListener("connected", this.onConnected.bind(this)), this.controller.addEventListener("disconnected", this.onDisconnected.bind(this)), this.grip = t.xr.getControllerGrip(e), this.grip.add(Qs.createControllerModel(this.grip)), s.add(this.controller), s.add(this.grip);
  }
  buildController(e) {
    let t, s;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return t = new p.BufferGeometry().setFromPoints([new p.Vector3(0, 0, 0), new p.Vector3(0, 0, -1), new p.Vector3(0, 0.5, -1)]), t.setAttribute("color", new p.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)), s = new p.LineBasicMaterial({
          vertexColors: !0,
          // blending: THREE.AdditiveBlending,
          color: 16737792
        }), new p.Line(t, s);
      case "gaze":
        return t = new p.RingGeometry(0.02, 0.04, 32).translate(0, 0, -1), s = new p.MeshBasicMaterial({ opacity: 0.5, transparent: !0 }), new p.Mesh(t, s);
    }
  }
  getSelectedObject(e, t = !1) {
    He.identity().extractRotation(this.controller.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(He);
    const n = this.raycaster.intersectObjects(e, t).filter((i) => i.object.userData.selectable === !0);
    return n.length > 0 ? n[0] : null;
  }
  // TODO: this won't remove the specific event
  on(e, t) {
    return this.controller.addEventListener(e, (s) => t({ ...s, ref: this })), this;
  }
  off(e, t) {
    return this.controller.removeEventListener(e, (s) => t({ ...s, ref: this })), this;
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
const Ge = { type: "change" }, Te = { type: "start" }, at = { type: "end" }, Q = new Wt(), Ve = new Yt(), tn = Math.cos(70 * et.DEG2RAD), A = new S(), L = 2 * Math.PI, x = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, de = 1e-6;
class sn extends Xt {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLElement} domElement - The HTML element used for event listeners.
   */
  constructor(e, t = null) {
    super(e, t), this.state = x.NONE, this.target = new S(), this.cursor = new S(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: G.ROTATE, MIDDLE: G.DOLLY, RIGHT: G.PAN }, this.touches = { ONE: B.ROTATE, TWO: B.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new S(), this._lastQuaternion = new ee(), this._lastTargetPosition = new S(), this._quat = new ee().setFromUnitVectors(e.up, new S(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Se(), this._sphericalDelta = new Se(), this._scale = 1, this._panOffset = new S(), this._rotateStart = new b(), this._rotateEnd = new b(), this._rotateDelta = new b(), this._panStart = new b(), this._panEnd = new b(), this._panDelta = new b(), this._dollyStart = new b(), this._dollyEnd = new b(), this._dollyDelta = new b(), this._dollyDirection = new S(), this._mouse = new b(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = on.bind(this), this._onPointerDown = nn.bind(this), this._onPointerUp = rn.bind(this), this._onContextMenu = pn.bind(this), this._onMouseWheel = cn.bind(this), this._onKeyDown = hn.bind(this), this._onTouchStart = un.bind(this), this._onTouchMove = dn.bind(this), this._onMouseDown = an.bind(this), this._onMouseMove = ln.bind(this), this._interceptControlDown = fn.bind(this), this._interceptControlUp = mn.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Get the current vertical rotation, in radians.
   *
   * @return {number} The current vertical rotation, in radians.
   */
  getPolarAngle() {
    return this._spherical.phi;
  }
  /**
   * Get the current horizontal rotation, in radians.
   *
   * @return {number} The current horizontal rotation, in radians.
   */
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  /**
   * Returns the distance from the camera to the target.
   *
   * @return {number} The distance from the camera to the target.
   */
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  /**
   * Adds key event listeners to the given DOM element.
   * `window` is a recommended argument for using this method.
   *
   * @param {HTMLElement} domElement - The DOM element
   */
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  /**
   * Removes the key event listener previously defined with `listenToKeyEvents()`.
   */
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  /**
   * Save the current state of the controls. This can later be recovered with `reset()`.
   */
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  /**
   * Reset the controls to their state from either the last time the `saveState()`
   * was called, or the initial state.
   */
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Ge), this.update(), this.state = x.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    A.copy(t).sub(this.target), A.applyQuaternion(this._quat), this._spherical.setFromVector3(A), this.autoRotate && this.state === x.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let s = this.minAzimuthAngle, n = this.maxAzimuthAngle;
    isFinite(s) && isFinite(n) && (s < -Math.PI ? s += L : s > Math.PI && (s -= L), n < -Math.PI ? n += L : n > Math.PI && (n -= L), s <= n ? this._spherical.theta = Math.max(s, Math.min(n, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (s + n) / 2 ? Math.max(s, this._spherical.theta) : Math.min(n, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let i = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = o != this._spherical.radius;
    }
    if (A.setFromSpherical(this._spherical), A.applyQuaternion(this._quatInverse), t.copy(this.target).add(A), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const l = A.length();
        o = this._clampDistance(l * this._scale);
        const a = l - o;
        this.object.position.addScaledVector(this._dollyDirection, a), this.object.updateMatrixWorld(), i = !!a;
      } else if (this.object.isOrthographicCamera) {
        const l = new S(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object);
        const a = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = a !== this.object.zoom;
        const c = new S(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(l), this.object.updateMatrixWorld(), o = A.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Q.origin.copy(this.object.position), Q.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Q.direction)) < tn ? this.object.lookAt(this.target) : (Ve.setFromNormalAndCoplanarPoint(this.object.up, this.target), Q.intersectPlane(Ve, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > de || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > de || this._lastTargetPosition.distanceToSquared(this.target) > de ? (this.dispatchEvent(Ge), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? L / 60 * this.autoRotateSpeed * e : L / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    A.setFromMatrixColumn(t, 0), A.multiplyScalar(-e), this._panOffset.add(A);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? A.setFromMatrixColumn(t, 1) : (A.setFromMatrixColumn(t, 0), A.crossVectors(this.object.up, A)), A.multiplyScalar(e), this._panOffset.add(A);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const s = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const n = this.object.position;
      A.copy(n).sub(this.target);
      let i = A.length();
      i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / s.clientHeight, this.object.matrix), this._panUp(2 * t * i / s.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / s.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / s.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const s = this.domElement.getBoundingClientRect(), n = e - s.left, i = t - s.top, o = s.width, l = s.height;
    this._mouse.x = n / o * 2 - 1, this._mouse.y = -(i / l) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(L * this._rotateDelta.x / t.clientHeight), this._rotateUp(L * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(L * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-L * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(L * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-L * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(s, n);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panStart.set(s, n);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, i = Math.sqrt(s * s + n * n);
    this._dollyStart.set(0, i);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const s = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + s.x), i = 0.5 * (e.pageY + s.y);
      this._rotateEnd.set(n, i);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(L * this._rotateDelta.x / t.clientHeight), this._rotateUp(L * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + t.x), n = 0.5 * (e.pageY + t.y);
      this._panEnd.set(s, n);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), s = e.pageX - t.x, n = e.pageY - t.y, i = Math.sqrt(s * s + n * n);
    this._dollyEnd.set(0, i), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (e.pageX + t.x) * 0.5, l = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(o, l);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new b(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, s = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        s.deltaY *= 16;
        break;
      case 2:
        s.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (s.deltaY *= 10), s;
  }
}
function nn(r) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(r.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(r) && (this._addPointer(r), r.pointerType === "touch" ? this._onTouchStart(r) : this._onMouseDown(r)));
}
function on(r) {
  this.enabled !== !1 && (r.pointerType === "touch" ? this._onTouchMove(r) : this._onMouseMove(r));
}
function rn(r) {
  switch (this._removePointer(r), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(r.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(at), this.state = x.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function an(r) {
  let e;
  switch (r.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case G.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(r), this.state = x.DOLLY;
      break;
    case G.ROTATE:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(r), this.state = x.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(r), this.state = x.ROTATE;
      }
      break;
    case G.PAN:
      if (r.ctrlKey || r.metaKey || r.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(r), this.state = x.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(r), this.state = x.PAN;
      }
      break;
    default:
      this.state = x.NONE;
  }
  this.state !== x.NONE && this.dispatchEvent(Te);
}
function ln(r) {
  switch (this.state) {
    case x.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(r);
      break;
    case x.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(r);
      break;
    case x.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(r);
      break;
  }
}
function cn(r) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== x.NONE || (r.preventDefault(), this.dispatchEvent(Te), this._handleMouseWheel(this._customWheelEvent(r)), this.dispatchEvent(at));
}
function hn(r) {
  this.enabled !== !1 && this._handleKeyDown(r);
}
function un(r) {
  switch (this._trackPointer(r), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case B.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(r), this.state = x.TOUCH_ROTATE;
          break;
        case B.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(r), this.state = x.TOUCH_PAN;
          break;
        default:
          this.state = x.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case B.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(r), this.state = x.TOUCH_DOLLY_PAN;
          break;
        case B.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(r), this.state = x.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = x.NONE;
      }
      break;
    default:
      this.state = x.NONE;
  }
  this.state !== x.NONE && this.dispatchEvent(Te);
}
function dn(r) {
  switch (this._trackPointer(r), this.state) {
    case x.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(r), this.update();
      break;
    case x.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(r), this.update();
      break;
    case x.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(r), this.update();
      break;
    case x.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(r), this.update();
      break;
    default:
      this.state = x.NONE;
  }
}
function pn(r) {
  this.enabled !== !1 && r.preventDefault();
}
function fn(r) {
  r.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function mn(r) {
  r.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const Ke = new p.Matrix4();
class Rn {
  constructor() {
    this.clock = new p.Clock(), this.tmpPosition = new p.Vector3(), this.sessionActive = !1, this.raycaster = new p.Raycaster(), this.VRSessionActive = !1, this.mouseInitialized = !1, this.globalForces = new p.Vector3(0, -0.1, 0), this.friction = 0.95, this.controllersInitialized = !1, this.handsInitialized = !1, this.orbitControlsActive = !1, this.keyInfo = {
      ArrowRight: { isDown: !1, downTime: 0, speed: 0 },
      ArrowLeft: { isDown: !1, downTime: 0, speed: 0 },
      ArrowUp: { isDown: !1, downTime: 0, speed: 0 },
      ArrowDown: { isDown: !1, downTime: 0, speed: 0 }
    }, this.beforeRender = (s) => {
    }, this.direction = new p.Vector3(), this.getCameraObject = this.getCameraObject.bind(this), this.scene = new p.Scene(), this.scene.background = new p.Color(3355443), this.background = new Qt(this), this.camera = new p.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.set(0, 1.6, 0), this.audioListener = new p.AudioListener(), this.camera.add(this.audioListener), this.dolly = new p.Object3D(), this.dolly.add(this.camera), this.scene.add(this.dolly), this.dummyCam = new p.Object3D(), this.camera.add(this.dummyCam);
    const e = new p.AmbientLight(16777215, 0.7);
    this.scene.add(e);
    const t = new p.DirectionalLight(16777215);
    t.position.set(1, 1, 1).normalize(), this.scene.add(t), t.shadow.mapSize.width = 512, t.shadow.mapSize.height = 512, t.shadow.camera.near = 0.5, t.shadow.camera.far = 1500, this.renderer = new p.WebGLRenderer({ antialias: !0 }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.outputEncoding = p.sRGBEncoding, this.renderer.xr.enabled = !0, this.renderer.xr.addEventListener("sessionstart", this.onSessionStart.bind(this)), this.renderer.xr.addEventListener("sessionend", this.onSessionEnd.bind(this)), this.rightHand = new je(1, this.renderer, this.dolly), this.leftHand = new je(0, this.renderer, this.dolly), this.rightController = new Be(1, this.renderer, this.dolly), this.leftController = new Be(0, this.renderer, this.dolly), this.eventManager = new es(this), this.vrButton = K.createButton(this.renderer), this.render(), this.startAnimate();
  }
  set gravity(e) {
    this.globalForces.setY(e);
  }
  get gravity() {
    return this.globalForces.y;
  }
  initOrbitControls() {
    this.orbitControlsActive || (this.orbitControlsActive = !0, this.controls = new sn(this.camera, this.renderer.domElement), this.controls.update());
  }
  initMouse() {
    this.mouseInitialized || (this.mouseInitialized = !0, this.mouse = new Hs(this.renderer.domElement, this.camera), this.eventManager.initMouse(this.mouse));
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
      Ke.identity().extractRotation(this.camera.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.camera.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(Ke);
      let t = e.children.length, s, n;
      for (; t--; )
        if (s = e.children[t], s.userData.selectable === !0 && (n = this.raycaster.intersectObject(s, !1), n.length > 0))
          return s;
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
class gn extends $e {
  /**
   * Constructs a new box line geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular sections along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular sections along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular sections along the depth of the sides.
   */
  constructor(e = 1, t = 1, s = 1, n = 1, i = 1, o = 1) {
    super(), n = Math.floor(n), i = Math.floor(i), o = Math.floor(o);
    const l = e / 2, a = t / 2, c = s / 2, u = e / n, h = t / i, d = s / o, f = [];
    let g = -l, _ = -a, m = -c;
    for (let w = 0; w <= n; w++)
      f.push(g, -a, -c, g, a, -c), f.push(g, a, -c, g, a, c), f.push(g, a, c, g, -a, c), f.push(g, -a, c, g, -a, -c), g += u;
    for (let w = 0; w <= i; w++)
      f.push(-l, _, -c, l, _, -c), f.push(l, _, -c, l, _, c), f.push(l, _, c, -l, _, c), f.push(-l, _, c, -l, _, -c), _ += h;
    for (let w = 0; w <= o; w++)
      f.push(-l, -a, m, -l, a, m), f.push(-l, a, m, l, a, m), f.push(l, a, m, l, -a, m), f.push(l, -a, m, -l, -a, m), m += d;
    this.setAttribute("position", new qt(f, 3));
  }
}
const Y = {
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
var An = Math.PI / 180;
function Sn(r, e, t) {
  return r + (e - r) * t;
}
function Z(r, e, t = !1) {
  e || (e = r, r = 0);
  let s = r + Math.random() * (e - r);
  return t ? s + 0.5 | 0 : s;
}
function Ln(r, e, t) {
  return e < t ? Math.max(e, Math.min(t, r)) : Math.max(t, Math.min(e, r));
}
function lt() {
  return Math.random() * 16777215;
}
function vn({ radius: r = Z(0.1, 0.3), color: e = lt(), position: t = [0, 0, 0], opacity: s = 1 } = {}) {
  const n = new p.SphereGeometry(r, 32, 32), i = new p.MeshLambertMaterial({ color: e, opacity: s, transparent: s < 1 }), o = new p.Mesh(n, i);
  return o.position.fromArray(t), o.userData.color = i.color.getHex(), o.userData.physics = !1, o.userData.selectable = !1, o.userData.velocity = new p.Vector3(), o;
}
function Dn({ radius: r = Z(0.1, 0.5), color: e = lt(), position: t = [0, 0, 0], opacity: s = 1 } = {}) {
  const n = r, i = new p.BoxGeometry(n, n, n), o = new p.MeshStandardMaterial({
    color: e,
    roughness: 1,
    metalness: 0,
    opacity: s,
    transparent: s < 1
  }), l = new p.Mesh(i, o);
  return l.position.fromArray(t), l.geometry.computeBoundingSphere(), l;
}
function Cn(r = 10) {
  return new p.LineSegments(
    new gn(r, r, r, r, r, r).translate(0, r * 0.5, 0),
    //
    new p.LineBasicMaterial({ color: 8421504 })
  );
}
function wn() {
  const r = new Zt(64, 64, 16), e = [
    // ThemeColors.turquiose, //
    // ThemeColors.turquiose_light,
    // ThemeColors.lichen,
    // ThemeColors.pink,
    // ThemeColors.purple,
    // ThemeColors.red,
    // ThemeColors.orange,
    Y.yellow
  ], t = document.createElement("canvas"), s = t.getContext("2d");
  s.canvas.width = r.width, s.canvas.height = r.height, s.fillStyle = "#000", s.fillRect(0, 0, s.canvas.width, s.canvas.height), s.fillStyle = "#FFF";
  let n = ~~(r.cells.length * 0.5);
  for (; n--; ) {
    s.globalAlpha = Math.random() * 0.01, s.fillStyle = e[Z(0, e.length - 1, !0)];
    const i = r.getRandomCell(
      (o) => !o.data.active,
      (o) => o.data.active = !0
    );
    i && s.fillRect(i.x, i.y, i.width, i.height);
  }
  for (n = ~~(r.cells.length * 0.01), s.fillStyle = [Y.pink, Y.purple][Z(0, 1, !0)]; n--; ) {
    s.globalAlpha = Math.random() * 0.1, s.fillStyle = [Y.pink, Y.purple][Z(0, 1, !0)];
    const i = r.getRandomCell(
      (o) => !o.data.active,
      (o) => o.data.active = !0
    );
    i && s.fillRect(i.x, i.y, i.width, i.height);
  }
  return new p.CanvasTexture(t);
}
function Pn(r = 0, e = 13, t = 256) {
  const s = wn();
  s.repeat.set(t, t), s.anisotropy = 1, s.wrapT = p.RepeatWrapping, s.wrapS = p.RepeatWrapping;
  const n = new p.PlaneGeometry(Math.pow(2, e), Math.pow(2, e)), i = new p.MeshLambertMaterial({ map: s }), o = new p.Mesh(n, i);
  return o.position.set(0, r, 0), o.rotation.set(Math.PI / -2, 0, 0), o;
}
function Nn({ y: r = 0, size: e = 13, color: t = 1118481 } = {}) {
  const s = new p.PlaneGeometry(Math.pow(2, e), Math.pow(2, e)), n = new p.MeshLambertMaterial({ color: t }), i = new p.Mesh(s, n);
  return i.position.set(0, r, 0), i.rotation.set(Math.PI / -2, 0, 0), i;
}
function pe(r, e = 16711680) {
  const t = new p.LineBasicMaterial({ color: e }), s = new p.BufferGeometry().setFromPoints(r);
  return new p.Line(s, t);
}
function On() {
  const r = new p.Object3D(), e = pe([new p.Vector3(0, 0, 0), new p.Vector3(0, 10, 0)], 16711680), t = pe([new p.Vector3(0, 0, 0), new p.Vector3(10, 0, 0)], 65280), s = pe([new p.Vector3(0, 0, 0), new p.Vector3(0, 0, 10)], 255);
  return r.add(e), r.add(t), r.add(s), r;
}
const te = new p.Vector3();
function In(r, e, t) {
  r !== e && (e.getWorldPosition(te), _n(r, te));
}
function _n(r, e, t) {
  const s = r.quaternion.clone();
  r.lookAt(e);
  const n = r.quaternion.clone();
  r.quaternion.copy(s), r.userData.t = 0, yn(r, n), xe.to(r.quaternion, { overwrite: "auto", ease: "power1.inOut", x: n.x, y: n.y, z: n.z, w: n.w });
}
function yn(r, e, t = 1) {
  xe.to(r.quaternion, { overwrite: "auto", duration: t, ease: "power1.inOut", x: e.x, y: e.y, z: e.z, w: e.w });
}
function kn(r, e) {
  xe.killTweensOf(r.userData), e.getWorldPosition(te), r.lookAt(te);
}
const xn = new p.Vector3(0, 1, 0), ze = 0.07, ct = new p.CylinderGeometry(ze, ze, 1, 64, 1, !0);
ct.translate(0, 0.5, 0);
function Fn(r, e, t) {
  const s = e.clone().sub(r), n = s.length();
  s.normalize();
  const i = new p.Quaternion().setFromUnitVectors(xn, s);
  return t = t ?? ct.clone(), t.scale(1, n, 1), t.applyQuaternion(i), t.translate(r.x, r.y, r.z), t;
}
export {
  Zt as Grid,
  En as KeyController,
  $t as KeyboardKeys,
  Mn as MouseController,
  Y as ThemeColors,
  K as VRButton,
  Qt as XRBackground,
  es as XREventManager,
  je as XRHand,
  W as XRHandParts,
  Hs as XRMouse,
  Be as XRRemote,
  en as XRRemoteEventType,
  Rn as XRWorld,
  On as buildAxis,
  Ln as clamp,
  Dn as createBox,
  Cn as createGridRoom,
  Nn as createInfiniteColorPlane,
  Pn as createInfinitePlane,
  vn as createSphere,
  pe as drawLine,
  yn as easeQuaternium,
  wn as generateRandomCanvasTexture,
  Fn as geomTube,
  Sn as interpolate,
  In as lookAtObject,
  kn as lookAtObjectInstant,
  _n as lookAtPoint,
  An as rad,
  Z as rand,
  lt as randomColor
};
//# sourceMappingURL=index.js.map
