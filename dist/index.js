var Pg = Math.PI / 180;
function Dg(a, e, t) {
  return a + (e - a) * t;
}
function Ig(a, e, t) {
  e || (e = a, a = 0);
  let n = a + Math.random() * (e - a);
  return t ? n + 0.5 | 0 : n;
}
function Ng(a, e, t) {
  return e < t ? Math.max(e, Math.min(t, a)) : Math.max(t, Math.min(e, a));
}
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ir = "148", kn = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Bn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ol = 0, Kr = 1, Fl = 2, Xa = 1, Ul = 2, Pi = 3, dn = 0, bt = 1, Ss = 2, Xi = 3, un = 0, ii = 1, vr = 2, Zr = 3, $r = 4, zl = 5, ti = 100, kl = 101, Bl = 102, Jr = 103, Qr = 104, Vl = 200, Gl = 201, Hl = 202, Wl = 203, qa = 204, Ya = 205, jl = 206, Xl = 207, ql = 208, Yl = 209, Kl = 210, Zl = 0, $l = 1, Jl = 2, yr = 3, Ql = 4, ec = 5, tc = 6, nc = 7, Ka = 0, ic = 1, sc = 2, tn = 0, rc = 1, oc = 2, ac = 3, lc = 4, cc = 5, Za = 300, oi = 301, ai = 302, Mr = 303, br = 304, ws = 306, li = 1e3, It = 1001, Ms = 1002, ot = 1003, Sr = 1004, xs = 1005, dt = 1006, $a = 1007, Dn = 1008, In = 1009, hc = 1010, uc = 1011, Ja = 1012, dc = 1013, An = 1014, hn = 1015, Oi = 1016, fc = 1017, pc = 1018, si = 1020, mc = 1021, gc = 1022, Nt = 1023, _c = 1024, xc = 1025, Ln = 1026, ci = 1027, vc = 1028, yc = 1029, Mc = 1030, bc = 1031, Sc = 1033, Us = 33776, zs = 33777, ks = 33778, Bs = 33779, eo = 35840, to = 35841, no = 35842, io = 35843, wc = 36196, so = 37492, ro = 37496, oo = 37808, ao = 37809, lo = 37810, co = 37811, ho = 37812, uo = 37813, fo = 37814, po = 37815, mo = 37816, go = 37817, _o = 37818, xo = 37819, vo = 37820, yo = 37821, Mo = 36492, Fi = 2300, hi = 2301, Vs = 2302, bo = 2400, So = 2401, wo = 2402, Tc = 2500, Ec = 1, Qa = 2, Nn = 3e3, Ue = 3001, Ac = 3200, Cc = 3201, el = 0, Lc = 1, Vt = "srgb", Ui = "srgb-linear", Gs = 7680, Rc = 519, wr = 35044, Pc = 35048, To = "300 es", Tr = 1035;
class Un {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, r = i.length; s < r; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const ut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Eo = 1234567;
const Ii = Math.PI / 180, zi = 180 / Math.PI;
function kt() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ut[a & 255] + ut[a >> 8 & 255] + ut[a >> 16 & 255] + ut[a >> 24 & 255] + "-" + ut[e & 255] + ut[e >> 8 & 255] + "-" + ut[e >> 16 & 15 | 64] + ut[e >> 24 & 255] + "-" + ut[t & 63 | 128] + ut[t >> 8 & 255] + "-" + ut[t >> 16 & 255] + ut[t >> 24 & 255] + ut[n & 255] + ut[n >> 8 & 255] + ut[n >> 16 & 255] + ut[n >> 24 & 255]).toLowerCase();
}
function ft(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function Nr(a, e) {
  return (a % e + e) % e;
}
function Dc(a, e, t, n, i) {
  return n + (a - e) * (i - n) / (t - e);
}
function Ic(a, e, t) {
  return a !== e ? (t - a) / (e - a) : 0;
}
function Ni(a, e, t) {
  return (1 - t) * a + t * e;
}
function Nc(a, e, t, n) {
  return Ni(a, e, 1 - Math.exp(-t * n));
}
function Oc(a, e = 1) {
  return e - Math.abs(Nr(a, e * 2) - e);
}
function Fc(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * (3 - 2 * a));
}
function Uc(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * a * (a * (a * 6 - 15) + 10));
}
function zc(a, e) {
  return a + Math.floor(Math.random() * (e - a + 1));
}
function kc(a, e) {
  return a + Math.random() * (e - a);
}
function Bc(a) {
  return a * (0.5 - Math.random());
}
function Vc(a) {
  a !== void 0 && (Eo = a);
  let e = Eo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Gc(a) {
  return a * Ii;
}
function Hc(a) {
  return a * zi;
}
function Er(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function tl(a) {
  return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
}
function bs(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function Wc(a, e, t, n, i) {
  const s = Math.cos, r = Math.sin, o = s(t / 2), l = r(t / 2), c = s((e + n) / 2), h = r((e + n) / 2), u = s((e - n) / 2), d = r((e - n) / 2), m = s((n - e) / 2), g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      a.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      a.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      a.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      a.set(o * h, l * g, l * m, o * c);
      break;
    case "YXY":
      a.set(l * m, o * h, l * g, o * c);
      break;
    case "ZYZ":
      a.set(l * g, l * m, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function en(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function He(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var jc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: Ii,
  RAD2DEG: zi,
  generateUUID: kt,
  clamp: ft,
  euclideanModulo: Nr,
  mapLinear: Dc,
  inverseLerp: Ic,
  lerp: Ni,
  damp: Nc,
  pingpong: Oc,
  smoothstep: Fc,
  smootherstep: Uc,
  randInt: zc,
  randFloat: kc,
  randFloatSpread: Bc,
  seededRandom: Vc,
  degToRad: Gc,
  radToDeg: Hc,
  isPowerOfTwo: Er,
  ceilPowerOfTwo: tl,
  floorPowerOfTwo: bs,
  setQuaternionFromProperEuler: Wc,
  normalize: He,
  denormalize: en
});
class _e {
  constructor(e = 0, t = 0) {
    _e.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
    return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ct {
  constructor() {
    Ct.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = r, h[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], p = i[0], f = i[3], _ = i[6], w = i[1], v = i[4], M = i[7], S = i[2], L = i[5], P = i[8];
    return s[0] = r * p + o * w + l * S, s[3] = r * f + o * v + l * L, s[6] = r * _ + o * M + l * P, s[1] = c * p + h * w + u * S, s[4] = c * f + h * v + u * L, s[7] = c * _ + h * M + u * P, s[2] = d * p + m * w + g * S, s[5] = d * f + m * v + g * L, s[8] = d * _ + m * M + g * P, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * r * h - t * o * c - n * s * h + n * o * l + i * s * c - i * r * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * r - o * c, d = o * l - h * s, m = c * s - r * l, g = t * u + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = u * p, e[1] = (i * c - h * n) * p, e[2] = (o * n - i * r) * p, e[3] = d * p, e[4] = (h * t - i * l) * p, e[5] = (i * s - o * t) * p, e[6] = m * p, e[7] = (n * l - c * t) * p, e[8] = (r * t - n * s) * p, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, r, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * r + c * o) + r + e,
      -i * c,
      i * l,
      -i * (-c * r + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Hs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Hs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Hs.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Hs = /* @__PURE__ */ new Ct();
function nl(a) {
  for (let e = a.length - 1; e >= 0; --e)
    if (a[e] >= 65535) return !0;
  return !1;
}
function ki(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function Rn(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function vs(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const Ws = {
  [Vt]: { [Ui]: Rn },
  [Ui]: { [Vt]: vs }
}, gt = {
  legacyMode: !0,
  get workingColorSpace() {
    return Ui;
  },
  set workingColorSpace(a) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(a, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return a;
    if (Ws[e] && Ws[e][t] !== void 0) {
      const n = Ws[e][t];
      return a.r = n(a.r), a.g = n(a.g), a.b = n(a.b), a;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(a, e) {
    return this.convert(a, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(a, e) {
    return this.convert(a, e, this.workingColorSpace);
  }
}, il = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Qe = { r: 0, g: 0, b: 0 }, Ot = { h: 0, s: 0, l: 0 }, qi = { h: 0, s: 0, l: 0 };
function js(a, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? a + (e - a) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? a + (e - a) * 6 * (2 / 3 - t) : a;
}
function Yi(a, e) {
  return e.r = a.r, e.g = a.g, e.b = a.b, e;
}
class we {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Vt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, gt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = gt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, gt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = gt.workingColorSpace) {
    if (e = Nr(e, 1), t = ft(t, 0, 1), n = ft(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
      this.r = js(r, s, e + 1 / 3), this.g = js(r, s, e), this.b = js(r, s, e - 1 / 3);
    }
    return gt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Vt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const r = i[1], o = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, gt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, gt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            const l = parseFloat(s[1]) / 360, c = parseFloat(s[2]) / 100, h = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, h, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], r = s.length;
      if (r === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, gt.toWorkingColorSpace(this, t), this;
      if (r === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, gt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Vt) {
    const n = il[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Rn(e.r), this.g = Rn(e.g), this.b = Rn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = vs(e.r), this.g = vs(e.g), this.b = vs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Vt) {
    return gt.fromWorkingColorSpace(Yi(this, Qe), e), ft(Qe.r * 255, 0, 255) << 16 ^ ft(Qe.g * 255, 0, 255) << 8 ^ ft(Qe.b * 255, 0, 255) << 0;
  }
  getHexString(e = Vt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = gt.workingColorSpace) {
    gt.fromWorkingColorSpace(Yi(this, Qe), t);
    const n = Qe.r, i = Qe.g, s = Qe.b, r = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const h = (o + r) / 2;
    if (o === r)
      l = 0, c = 0;
    else {
      const u = r - o;
      switch (c = h <= 0.5 ? u / (r + o) : u / (2 - r - o), r) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = gt.workingColorSpace) {
    return gt.fromWorkingColorSpace(Yi(this, Qe), t), e.r = Qe.r, e.g = Qe.g, e.b = Qe.b, e;
  }
  getStyle(e = Vt) {
    return gt.fromWorkingColorSpace(Yi(this, Qe), e), e !== Vt ? `color(${e} ${Qe.r} ${Qe.g} ${Qe.b})` : `rgb(${Qe.r * 255 | 0},${Qe.g * 255 | 0},${Qe.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ot), Ot.h += e, Ot.s += t, Ot.l += n, this.setHSL(Ot.h, Ot.s, Ot.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Ot), e.getHSL(qi);
    const n = Ni(Ot.h, qi.h, t), i = Ni(Ot.s, qi.s, t), s = Ni(Ot.l, qi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
we.NAMES = il;
let Vn;
class sl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Vn === void 0 && (Vn = ki("canvas")), Vn.width = e.width, Vn.height = e.height;
      const n = Vn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Vn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ki("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let r = 0; r < s.length; r++)
        s[r] = Rn(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Rn(t[n] / 255) * 255) : t[n] = Rn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class rl {
  constructor(e = null) {
    this.isSource = !0, this.uuid = kt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let r = 0, o = i.length; r < o; r++)
          i[r].isDataTexture ? s.push(Xs(i[r].image)) : s.push(Xs(i[r]));
      } else
        s = Xs(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Xs(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? sl.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Xc = 0;
class ct extends Un {
  constructor(e = ct.DEFAULT_IMAGE, t = ct.DEFAULT_MAPPING, n = It, i = It, s = dt, r = Dn, o = Nt, l = In, c = ct.DEFAULT_ANISOTROPY, h = Nn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Xc++ }), this.uuid = kt(), this.name = "", this.source = new rl(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new _e(0, 0), this.repeat = new _e(1, 1), this.center = new _e(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Za) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case li:
          e.x = e.x - Math.floor(e.x);
          break;
        case It:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ms:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case li:
          e.y = e.y - Math.floor(e.y);
          break;
        case It:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ms:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
ct.DEFAULT_IMAGE = null;
ct.DEFAULT_MAPPING = Za;
ct.DEFAULT_ANISOTROPY = 1;
class We {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    We.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], m = l[5], g = l[9], p = l[2], f = l[6], _ = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(c + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2, M = (m + 1) / 2, S = (_ + 1) / 2, L = (h + d) / 4, P = (u + p) / 4, x = (g + f) / 4;
      return v > M && v > S ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = L / n, s = P / n) : M > S ? M < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(M), n = L / i, s = x / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(S), n = P / s, i = x / s), this.set(n, i, s, t), this;
    }
    let w = Math.sqrt((f - g) * (f - g) + (u - p) * (u - p) + (d - h) * (d - h));
    return Math.abs(w) < 1e-3 && (w = 1), this.x = (f - g) / w, this.y = (u - p) / w, this.z = (d - h) / w, this.w = Math.acos((c + m + _ - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class On extends Un {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new We(0, 0, e, t), this.scissorTest = !1, this.viewport = new We(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new ct(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : dt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new rl(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ol extends ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ot, this.minFilter = ot, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class qc extends ct {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ot, this.minFilter = ot, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Bt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, r, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[r + 0], m = s[r + 1], g = s[r + 2], p = s[r + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (u !== p || l !== d || c !== m || h !== g) {
      let f = 1 - o;
      const _ = l * d + c * m + h * g + u * p, w = _ >= 0 ? 1 : -1, v = 1 - _ * _;
      if (v > Number.EPSILON) {
        const S = Math.sqrt(v), L = Math.atan2(S, _ * w);
        f = Math.sin(f * L) / S, o = Math.sin(o * L) / S;
      }
      const M = o * w;
      if (l = l * f + d * M, c = c * f + m * M, h = h * f + g * M, u = u * f + p * M, f === 1 - o) {
        const S = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= S, c *= S, h *= S, u *= S;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[r], d = s[r + 1], m = s[r + 2], g = s[r + 3];
    return e[t] = o * g + h * u + l * m - c * d, e[t + 1] = l * g + h * d + c * u - o * m, e[t + 2] = c * g + h * m + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), d = l(n / 2), m = l(i / 2), g = l(s / 2);
    switch (r) {
      case "XYZ":
        this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g;
        break;
      case "YZX":
        this._x = d * h * u + c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u - d * m * g;
        break;
      case "XZY":
        this._x = d * h * u - c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u + d * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], r = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (r - i) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (i + r) / m, this._z = (s + c) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / m, this._x = (i + r) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (r - i) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ft(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + r * o + i * c - s * l, this._y = i * h + r * l + s * o - n * c, this._z = s * h + r * c + n * l - i * o, this._w = r * h - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, r = this._w;
    let o = r * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = r, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * r + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = r * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class C {
  constructor(e = 0, t = 0, n = 0) {
    C.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ao.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ao.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, r = e.y, o = e.z, l = e.w, c = l * t + r * i - o * n, h = l * n + o * t - s * i, u = l * i + s * n - r * t, d = -s * t - r * n - o * i;
    return this.x = c * l + d * -s + h * -o - u * -r, this.y = h * l + d * -r + u * -s - c * -o, this.z = u * l + d * -o + c * -r - h * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, r = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * r - n * l, this.z = n * o - i * r, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return qs.copy(this).projectOnVector(e), this.sub(qs);
  }
  reflect(e) {
    return this.sub(qs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ft(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const qs = /* @__PURE__ */ new C(), Ao = /* @__PURE__ */ new Bt();
class fi {
  constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const h = e[l], u = e[l + 1], d = e[l + 2];
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > r && (r = u), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const h = e.getX(l), u = e.getY(l), d = e.getZ(l);
      h < t && (t = h), u < n && (n = u), d < i && (i = d), h > s && (s = h), u > r && (r = u), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = vn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let r = 0, o = s.count; r < o; r++)
          vn.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld), this.expandByPoint(vn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), Ys.copy(n.boundingBox), Ys.applyMatrix4(e.matrixWorld), this.union(Ys);
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, vn), vn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(yi), Ki.subVectors(this.max, yi), Gn.subVectors(e.a, yi), Hn.subVectors(e.b, yi), Wn.subVectors(e.c, yi), nn.subVectors(Hn, Gn), sn.subVectors(Wn, Hn), yn.subVectors(Gn, Wn);
    let t = [
      0,
      -nn.z,
      nn.y,
      0,
      -sn.z,
      sn.y,
      0,
      -yn.z,
      yn.y,
      nn.z,
      0,
      -nn.x,
      sn.z,
      0,
      -sn.x,
      yn.z,
      0,
      -yn.x,
      -nn.y,
      nn.x,
      0,
      -sn.y,
      sn.x,
      0,
      -yn.y,
      yn.x,
      0
    ];
    return !Ks(t, Gn, Hn, Wn, Ki) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ks(t, Gn, Hn, Wn, Ki)) ? !1 : (Zi.crossVectors(nn, sn), t = [Zi.x, Zi.y, Zi.z], Ks(t, Gn, Hn, Wn, Ki));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return vn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(vn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (qt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), qt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), qt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), qt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), qt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(qt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const qt = [
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C(),
  /* @__PURE__ */ new C()
], vn = /* @__PURE__ */ new C(), Ys = /* @__PURE__ */ new fi(), Gn = /* @__PURE__ */ new C(), Hn = /* @__PURE__ */ new C(), Wn = /* @__PURE__ */ new C(), nn = /* @__PURE__ */ new C(), sn = /* @__PURE__ */ new C(), yn = /* @__PURE__ */ new C(), yi = /* @__PURE__ */ new C(), Ki = /* @__PURE__ */ new C(), Zi = /* @__PURE__ */ new C(), Mn = /* @__PURE__ */ new C();
function Ks(a, e, t, n, i) {
  for (let s = 0, r = a.length - 3; s <= r; s += 3) {
    Mn.fromArray(a, s);
    const o = i.x * Math.abs(Mn.x) + i.y * Math.abs(Mn.y) + i.z * Math.abs(Mn.z), l = e.dot(Mn), c = t.dot(Mn), h = n.dot(Mn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o)
      return !1;
  }
  return !0;
}
const Yc = /* @__PURE__ */ new fi(), Mi = /* @__PURE__ */ new C(), Zs = /* @__PURE__ */ new C();
class pi {
  constructor(e = new C(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Yc.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Mi.subVectors(e, this.center);
    const t = Mi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Mi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Zs.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Mi.copy(e.center).add(Zs)), this.expandByPoint(Mi.copy(e.center).sub(Zs))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Yt = /* @__PURE__ */ new C(), $s = /* @__PURE__ */ new C(), $i = /* @__PURE__ */ new C(), rn = /* @__PURE__ */ new C(), Js = /* @__PURE__ */ new C(), Ji = /* @__PURE__ */ new C(), Qs = /* @__PURE__ */ new C();
class Ts {
  constructor(e = new C(), t = new C(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Yt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Yt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Yt.copy(this.direction).multiplyScalar(t).add(this.origin), Yt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    $s.copy(e).add(t).multiplyScalar(0.5), $i.copy(t).sub(e).normalize(), rn.copy(this.origin).sub($s);
    const s = e.distanceTo(t) * 0.5, r = -this.direction.dot($i), o = rn.dot(this.direction), l = -rn.dot($i), c = rn.lengthSq(), h = Math.abs(1 - r * r);
    let u, d, m, g;
    if (h > 0)
      if (u = r * l - o, d = r * o - l, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const p = 1 / h;
            u *= p, d *= p, m = u * (u + r * d + 2 * o) + d * (r * u + d + 2 * l) + c;
          } else
            d = s, u = Math.max(0, -(r * d + o)), m = -u * u + d * (d + 2 * l) + c;
        else
          d = -s, u = Math.max(0, -(r * d + o)), m = -u * u + d * (d + 2 * l) + c;
      else
        d <= -g ? (u = Math.max(0, -(-r * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (u = Math.max(0, -(r * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), m = -u * u + d * (d + 2 * l) + c);
    else
      d = r > 0 ? -s : s, u = Math.max(0, -(r * d + o)), m = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), i && i.copy($i).multiplyScalar(d).add($s), m;
  }
  intersectSphere(e, t) {
    Yt.subVectors(e.center, this.origin);
    const n = Yt.dot(this.direction), i = Yt.dot(Yt) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const r = Math.sqrt(s - i), o = n - r, l = n + r;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, r, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, r = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, r = (e.min.y - d.y) * h), n > r || s > i || ((s > n || isNaN(n)) && (n = s), (r < i || isNaN(i)) && (i = r), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Yt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Js.subVectors(t, e), Ji.subVectors(n, e), Qs.crossVectors(Js, Ji);
    let r = this.direction.dot(Qs), o;
    if (r > 0) {
      if (i) return null;
      o = 1;
    } else if (r < 0)
      o = -1, r = -r;
    else
      return null;
    rn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ji.crossVectors(rn, Ji));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Js.cross(rn));
    if (c < 0 || l + c > r)
      return null;
    const h = -o * rn.dot(Qs);
    return h < 0 ? null : this.at(h / r, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class be {
  constructor() {
    be.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, o, l, c, h, u, d, m, g, p, f) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = r, _[9] = o, _[13] = l, _[2] = c, _[6] = h, _[10] = u, _[14] = d, _[3] = m, _[7] = g, _[11] = p, _[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new be().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / jn.setFromMatrixColumn(e, 0).length(), s = 1 / jn.setFromMatrixColumn(e, 1).length(), r = 1 / jn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, r = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = r * h, m = r * u, g = o * h, p = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = m + g * c, t[5] = d - p * c, t[9] = -o * l, t[2] = p - d * c, t[6] = g + m * c, t[10] = r * l;
    } else if (e.order === "YXZ") {
      const d = l * h, m = l * u, g = c * h, p = c * u;
      t[0] = d + p * o, t[4] = g * o - m, t[8] = r * c, t[1] = r * u, t[5] = r * h, t[9] = -o, t[2] = m * o - g, t[6] = p + d * o, t[10] = r * l;
    } else if (e.order === "ZXY") {
      const d = l * h, m = l * u, g = c * h, p = c * u;
      t[0] = d - p * o, t[4] = -r * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = r * h, t[9] = p - d * o, t[2] = -r * c, t[6] = o, t[10] = r * l;
    } else if (e.order === "ZYX") {
      const d = r * h, m = r * u, g = o * h, p = o * u;
      t[0] = l * h, t[4] = g * c - m, t[8] = d * c + p, t[1] = l * u, t[5] = p * c + d, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = r * l;
    } else if (e.order === "YZX") {
      const d = r * l, m = r * c, g = o * l, p = o * c;
      t[0] = l * h, t[4] = p - d * u, t[8] = g * u + m, t[1] = u, t[5] = r * h, t[9] = -o * h, t[2] = -c * h, t[6] = m * u + g, t[10] = d - p * u;
    } else if (e.order === "XZY") {
      const d = r * l, m = r * c, g = o * l, p = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + p, t[5] = r * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = o * h, t[10] = p * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Kc, e, Zc);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Et.subVectors(e, t), Et.lengthSq() === 0 && (Et.z = 1), Et.normalize(), on.crossVectors(n, Et), on.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Et.x += 1e-4 : Et.z += 1e-4, Et.normalize(), on.crossVectors(n, Et)), on.normalize(), Qi.crossVectors(Et, on), i[0] = on.x, i[4] = Qi.x, i[8] = Et.x, i[1] = on.y, i[5] = Qi.y, i[9] = Et.y, i[2] = on.z, i[6] = Qi.z, i[10] = Et.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], p = n[6], f = n[10], _ = n[14], w = n[3], v = n[7], M = n[11], S = n[15], L = i[0], P = i[4], x = i[8], A = i[12], O = i[1], q = i[5], Z = i[9], F = i[13], N = i[2], B = i[6], K = i[10], J = i[14], X = i[3], ee = i[7], Y = i[11], H = i[15];
    return s[0] = r * L + o * O + l * N + c * X, s[4] = r * P + o * q + l * B + c * ee, s[8] = r * x + o * Z + l * K + c * Y, s[12] = r * A + o * F + l * J + c * H, s[1] = h * L + u * O + d * N + m * X, s[5] = h * P + u * q + d * B + m * ee, s[9] = h * x + u * Z + d * K + m * Y, s[13] = h * A + u * F + d * J + m * H, s[2] = g * L + p * O + f * N + _ * X, s[6] = g * P + p * q + f * B + _ * ee, s[10] = g * x + p * Z + f * K + _ * Y, s[14] = g * A + p * F + f * J + _ * H, s[3] = w * L + v * O + M * N + S * X, s[7] = w * P + v * q + M * B + S * ee, s[11] = w * x + v * Z + M * K + S * Y, s[15] = w * A + v * F + M * J + S * H, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], r = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], p = e[7], f = e[11], _ = e[15];
    return g * (+s * l * u - i * c * u - s * o * d + n * c * d + i * o * m - n * l * m) + p * (+t * l * m - t * c * d + s * r * d - i * r * m + i * c * h - s * l * h) + f * (+t * c * u - t * o * m - s * r * u + n * r * m + s * o * h - n * c * h) + _ * (-i * o * h - t * l * u + t * o * d + i * r * u - n * r * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], p = e[13], f = e[14], _ = e[15], w = u * f * c - p * d * c + p * l * m - o * f * m - u * l * _ + o * d * _, v = g * d * c - h * f * c - g * l * m + r * f * m + h * l * _ - r * d * _, M = h * p * c - g * u * c + g * o * m - r * p * m - h * o * _ + r * u * _, S = g * u * l - h * p * l - g * o * d + r * p * d + h * o * f - r * u * f, L = t * w + n * v + i * M + s * S;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / L;
    return e[0] = w * P, e[1] = (p * d * s - u * f * s - p * i * m + n * f * m + u * i * _ - n * d * _) * P, e[2] = (o * f * s - p * l * s + p * i * c - n * f * c - o * i * _ + n * l * _) * P, e[3] = (u * l * s - o * d * s - u * i * c + n * d * c + o * i * m - n * l * m) * P, e[4] = v * P, e[5] = (h * f * s - g * d * s + g * i * m - t * f * m - h * i * _ + t * d * _) * P, e[6] = (g * l * s - r * f * s - g * i * c + t * f * c + r * i * _ - t * l * _) * P, e[7] = (r * d * s - h * l * s + h * i * c - t * d * c - r * i * m + t * l * m) * P, e[8] = M * P, e[9] = (g * u * s - h * p * s - g * n * m + t * p * m + h * n * _ - t * u * _) * P, e[10] = (r * p * s - g * o * s + g * n * c - t * p * c - r * n * _ + t * o * _) * P, e[11] = (h * o * s - r * u * s - h * n * c + t * u * c + r * n * m - t * o * m) * P, e[12] = S * P, e[13] = (h * p * i - g * u * i + g * n * d - t * p * d - h * n * f + t * u * f) * P, e[14] = (g * o * i - r * p * i - g * n * l + t * p * l + r * n * f - t * o * f) * P, e[15] = (r * u * i - h * o * i + h * n * l - t * u * l - r * n * d + t * o * d) * P, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, r = e.x, o = e.y, l = e.z, c = s * r, h = s * o;
    return this.set(
      c * r + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      h * o + n,
      h * l - i * r,
      0,
      c * l - i * o,
      h * l + i * r,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, r) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      r,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, r = t._y, o = t._z, l = t._w, c = s + s, h = r + r, u = o + o, d = s * c, m = s * h, g = s * u, p = r * h, f = r * u, _ = o * u, w = l * c, v = l * h, M = l * u, S = n.x, L = n.y, P = n.z;
    return i[0] = (1 - (p + _)) * S, i[1] = (m + M) * S, i[2] = (g - v) * S, i[3] = 0, i[4] = (m - M) * L, i[5] = (1 - (d + _)) * L, i[6] = (f + w) * L, i[7] = 0, i[8] = (g + v) * P, i[9] = (f - w) * P, i[10] = (1 - (d + p)) * P, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = jn.set(i[0], i[1], i[2]).length();
    const r = jn.set(i[4], i[5], i[6]).length(), o = jn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ft.copy(this);
    const c = 1 / s, h = 1 / r, u = 1 / o;
    return Ft.elements[0] *= c, Ft.elements[1] *= c, Ft.elements[2] *= c, Ft.elements[4] *= h, Ft.elements[5] *= h, Ft.elements[6] *= h, Ft.elements[8] *= u, Ft.elements[9] *= u, Ft.elements[10] *= u, t.setFromRotationMatrix(Ft), n.x = s, n.y = r, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, r) {
    const o = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), h = (t + e) / (t - e), u = (n + i) / (n - i), d = -(r + s) / (r - s), m = -2 * r * s / (r - s);
    return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = m, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, r) {
    const o = this.elements, l = 1 / (t - e), c = 1 / (n - i), h = 1 / (r - s), u = (t + e) * l, d = (n + i) * c, m = (r + s) * h;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -m, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const jn = /* @__PURE__ */ new C(), Ft = /* @__PURE__ */ new be(), Kc = /* @__PURE__ */ new C(0, 0, 0), Zc = /* @__PURE__ */ new C(1, 1, 1), on = /* @__PURE__ */ new C(), Qi = /* @__PURE__ */ new C(), Et = /* @__PURE__ */ new C(), Co = /* @__PURE__ */ new be(), Lo = /* @__PURE__ */ new Bt();
class Hi {
  constructor(e = 0, t = 0, n = 0, i = Hi.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], r = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ft(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ft(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-r, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-r, c));
        break;
      case "YZX":
        this._z = Math.asin(ft(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-ft(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Co.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Co, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Lo.setFromEuler(this), this.setFromQuaternion(Lo, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  // @deprecated since r138, 02cf0df1cb4575d5842fef9c85bb5a89fe020d53
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
Hi.DefaultOrder = "XYZ";
Hi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Or {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let $c = 0;
const Ro = /* @__PURE__ */ new C(), Xn = /* @__PURE__ */ new Bt(), Kt = /* @__PURE__ */ new be(), es = /* @__PURE__ */ new C(), bi = /* @__PURE__ */ new C(), Jc = /* @__PURE__ */ new C(), Qc = /* @__PURE__ */ new Bt(), Po = /* @__PURE__ */ new C(1, 0, 0), Do = /* @__PURE__ */ new C(0, 1, 0), Io = /* @__PURE__ */ new C(0, 0, 1), eh = { type: "added" }, No = { type: "removed" };
class Ve extends Un {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: $c++ }), this.uuid = kt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ve.DefaultUp.clone();
    const e = new C(), t = new Hi(), n = new Bt(), i = new C(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new be()
      },
      normalMatrix: {
        value: new Ct()
      }
    }), this.matrix = new be(), this.matrixWorld = new be(), this.matrixAutoUpdate = Ve.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ve.DefaultMatrixWorldAutoUpdate, this.layers = new Or(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.multiply(Xn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.premultiply(Xn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Po, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Do, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Io, e);
  }
  translateOnAxis(e, t) {
    return Ro.copy(e).applyQuaternion(this.quaternion), this.position.add(Ro.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Po, e);
  }
  translateY(e) {
    return this.translateOnAxis(Do, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Io, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Kt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? es.copy(e) : es.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), bi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Kt.lookAt(bi, es, this.up) : Kt.lookAt(es, bi, this.up), this.quaternion.setFromRotationMatrix(Kt), i && (Kt.extractRotation(i.matrixWorld), Xn.setFromRotationMatrix(Kt), this.quaternion.premultiply(Xn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(eh)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(No)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(No);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Kt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0)
        return r;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const r = this.children[i].getObjectsByProperty(e, t);
      r.length > 0 && (n = n.concat(r));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bi, e, Jc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bi, Qc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, r = i.length; s < r; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            s(e.shapes, u);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = r(e.geometries), l = r(e.materials), c = r(e.textures), h = r(e.images), u = r(e.shapes), d = r(e.skeletons), m = r(e.animations), g = r(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function r(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Ve.DefaultUp = /* @__PURE__ */ new C(0, 1, 0);
Ve.DefaultMatrixAutoUpdate = !0;
Ve.DefaultMatrixWorldAutoUpdate = !0;
const Ut = /* @__PURE__ */ new C(), Zt = /* @__PURE__ */ new C(), er = /* @__PURE__ */ new C(), $t = /* @__PURE__ */ new C(), qn = /* @__PURE__ */ new C(), Yn = /* @__PURE__ */ new C(), Oo = /* @__PURE__ */ new C(), tr = /* @__PURE__ */ new C(), nr = /* @__PURE__ */ new C(), ir = /* @__PURE__ */ new C();
class Qt {
  constructor(e = new C(), t = new C(), n = new C()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ut.subVectors(e, t), i.cross(Ut);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Ut.subVectors(i, t), Zt.subVectors(n, t), er.subVectors(e, t);
    const r = Ut.dot(Ut), o = Ut.dot(Zt), l = Ut.dot(er), c = Zt.dot(Zt), h = Zt.dot(er), u = r * c - o * o;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, m = (c * l - o * h) * d, g = (r * h - o * l) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, $t), $t.x >= 0 && $t.y >= 0 && $t.x + $t.y <= 1;
  }
  static getUV(e, t, n, i, s, r, o, l) {
    return this.getBarycoord(e, t, n, i, $t), l.set(0, 0), l.addScaledVector(s, $t.x), l.addScaledVector(r, $t.y), l.addScaledVector(o, $t.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return Ut.subVectors(n, t), Zt.subVectors(e, t), Ut.cross(Zt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ut.subVectors(this.c, this.b), Zt.subVectors(this.a, this.b), Ut.cross(Zt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Qt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let r, o;
    qn.subVectors(i, n), Yn.subVectors(s, n), tr.subVectors(e, n);
    const l = qn.dot(tr), c = Yn.dot(tr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    nr.subVectors(e, i);
    const h = qn.dot(nr), u = Yn.dot(nr);
    if (h >= 0 && u <= h)
      return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return r = l / (l - h), t.copy(n).addScaledVector(qn, r);
    ir.subVectors(e, s);
    const m = qn.dot(ir), g = Yn.dot(ir);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Yn, o);
    const f = h * g - m * u;
    if (f <= 0 && u - h >= 0 && m - g >= 0)
      return Oo.subVectors(s, i), o = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(Oo, o);
    const _ = 1 / (f + p + d);
    return r = p * _, o = d * _, t.copy(n).addScaledVector(qn, r).addScaledVector(Yn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let th = 0;
class Ht extends Un {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: th++ }), this.uuid = kt(), this.name = "", this.type = "Material", this.blending = ii, this.side = dn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = qa, this.blendDst = Ya, this.blendEquation = ti, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = yr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Rc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gs, this.stencilZFail = Gs, this.stencilZPass = Gs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ii && (n.blending = this.blending), this.side !== dn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const r = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, r.push(l);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures), r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class zt extends Ht {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new we(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ka, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ze = /* @__PURE__ */ new C(), ts = /* @__PURE__ */ new _e();
class yt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = wr, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ts.fromBufferAttribute(this, t), ts.applyMatrix3(e), this.setXY(t, ts.x, ts.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ze.fromBufferAttribute(this, t), Ze.applyMatrix3(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.applyMatrix4(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.applyNormalMatrix(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t), Ze.transformDirection(e), this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== wr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  // @deprecated
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class al extends yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ll extends yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class lt extends yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let nh = 0;
const Pt = /* @__PURE__ */ new be(), sr = /* @__PURE__ */ new Ve(), Kn = /* @__PURE__ */ new C(), At = /* @__PURE__ */ new fi(), Si = /* @__PURE__ */ new fi(), rt = /* @__PURE__ */ new C();
class St extends Un {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: nh++ }), this.uuid = kt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (nl(e) ? ll : al)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ct().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Pt.makeRotationFromQuaternion(e), this.applyMatrix4(Pt), this;
  }
  rotateX(e) {
    return Pt.makeRotationX(e), this.applyMatrix4(Pt), this;
  }
  rotateY(e) {
    return Pt.makeRotationY(e), this.applyMatrix4(Pt), this;
  }
  rotateZ(e) {
    return Pt.makeRotationZ(e), this.applyMatrix4(Pt), this;
  }
  translate(e, t, n) {
    return Pt.makeTranslation(e, t, n), this.applyMatrix4(Pt), this;
  }
  scale(e, t, n) {
    return Pt.makeScale(e, t, n), this.applyMatrix4(Pt), this;
  }
  lookAt(e) {
    return sr.lookAt(e), sr.updateMatrix(), this.applyMatrix4(sr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Kn).negate(), this.translate(Kn.x, Kn.y, Kn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new lt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new fi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new C(-1 / 0, -1 / 0, -1 / 0),
        new C(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          At.setFromBufferAttribute(s), this.morphTargetsRelative ? (rt.addVectors(this.boundingBox.min, At.min), this.boundingBox.expandByPoint(rt), rt.addVectors(this.boundingBox.max, At.max), this.boundingBox.expandByPoint(rt)) : (this.boundingBox.expandByPoint(At.min), this.boundingBox.expandByPoint(At.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new pi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (At.setFromBufferAttribute(e), t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s];
          Si.setFromBufferAttribute(o), this.morphTargetsRelative ? (rt.addVectors(At.min, Si.min), At.expandByPoint(rt), rt.addVectors(At.max, Si.max), At.expandByPoint(rt)) : (At.expandByPoint(Si.min), At.expandByPoint(Si.max));
        }
      At.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        rt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(rt));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            rt.fromBufferAttribute(o, c), l && (Kn.fromBufferAttribute(e, c), rt.add(Kn)), i = Math.max(i, n.distanceToSquared(rt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, r = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new yt(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let O = 0; O < o; O++)
      c[O] = new C(), h[O] = new C();
    const u = new C(), d = new C(), m = new C(), g = new _e(), p = new _e(), f = new _e(), _ = new C(), w = new C();
    function v(O, q, Z) {
      u.fromArray(i, O * 3), d.fromArray(i, q * 3), m.fromArray(i, Z * 3), g.fromArray(r, O * 2), p.fromArray(r, q * 2), f.fromArray(r, Z * 2), d.sub(u), m.sub(u), p.sub(g), f.sub(g);
      const F = 1 / (p.x * f.y - f.x * p.y);
      isFinite(F) && (_.copy(d).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(F), w.copy(m).multiplyScalar(p.x).addScaledVector(d, -f.x).multiplyScalar(F), c[O].add(_), c[q].add(_), c[Z].add(_), h[O].add(w), h[q].add(w), h[Z].add(w));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: n.length
    }]);
    for (let O = 0, q = M.length; O < q; ++O) {
      const Z = M[O], F = Z.start, N = Z.count;
      for (let B = F, K = F + N; B < K; B += 3)
        v(
          n[B + 0],
          n[B + 1],
          n[B + 2]
        );
    }
    const S = new C(), L = new C(), P = new C(), x = new C();
    function A(O) {
      P.fromArray(s, O * 3), x.copy(P);
      const q = c[O];
      S.copy(q), S.sub(P.multiplyScalar(P.dot(q))).normalize(), L.crossVectors(x, q);
      const F = L.dot(h[O]) < 0 ? -1 : 1;
      l[O * 4] = S.x, l[O * 4 + 1] = S.y, l[O * 4 + 2] = S.z, l[O * 4 + 3] = F;
    }
    for (let O = 0, q = M.length; O < q; ++O) {
      const Z = M[O], F = Z.start, N = Z.count;
      for (let B = F, K = F + N; B < K; B += 3)
        A(n[B + 0]), A(n[B + 1]), A(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new C(), s = new C(), r = new C(), o = new C(), l = new C(), c = new C(), h = new C(), u = new C();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), p = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), r.fromBufferAttribute(t, f), h.subVectors(r, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, p), c.fromBufferAttribute(n, f), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(p, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), r.fromBufferAttribute(t, d + 2), h.subVectors(r, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  // @deprecated since r144
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t), rt.normalize(), e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        o.isInterleavedBufferAttribute ? m = l[p] * o.data.stride + o.offset : m = l[p] * h;
        for (let _ = 0; _ < h; _++)
          d[g++] = c[m++];
      }
      return new yt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new St(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let o = 0, l = r.length; o < l; o++) {
      const c = r[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const m = c[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, m = u.length; d < m; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Fo = /* @__PURE__ */ new be(), Zn = /* @__PURE__ */ new Ts(), rr = /* @__PURE__ */ new pi(), wi = /* @__PURE__ */ new C(), Ti = /* @__PURE__ */ new C(), Ei = /* @__PURE__ */ new C(), or = /* @__PURE__ */ new C(), ns = /* @__PURE__ */ new C(), is = /* @__PURE__ */ new _e(), ss = /* @__PURE__ */ new _e(), rs = /* @__PURE__ */ new _e(), ar = /* @__PURE__ */ new C(), os = /* @__PURE__ */ new C();
class at extends Ve {
  constructor(e = new St(), t = new zt()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, r = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ns.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], u = s[l];
        h !== 0 && (or.fromBufferAttribute(u, e), r ? ns.addScaledVector(or, h) : ns.addScaledVector(or.sub(t), h));
      }
      t.add(ns);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), rr.copy(n.boundingSphere), rr.applyMatrix4(s), e.ray.intersectsSphere(rr) === !1) || (Fo.copy(s).invert(), Zn.copy(e.ray).applyMatrix4(Fo), n.boundingBox !== null && Zn.intersectsBox(n.boundingBox) === !1))
      return;
    let r;
    const o = n.index, l = n.attributes.position, c = n.attributes.uv, h = n.attributes.uv2, u = n.groups, d = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], f = i[p.materialIndex], _ = Math.max(p.start, d.start), w = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
          for (let v = _, M = w; v < M; v += 3) {
            const S = o.getX(v), L = o.getX(v + 1), P = o.getX(v + 2);
            r = as(this, f, e, Zn, c, h, S, L, P), r && (r.faceIndex = Math.floor(v / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(o.count, d.start + d.count);
        for (let p = m, f = g; p < f; p += 3) {
          const _ = o.getX(p), w = o.getX(p + 1), v = o.getX(p + 2);
          r = as(this, i, e, Zn, c, h, _, w, v), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = u.length; m < g; m++) {
          const p = u[m], f = i[p.materialIndex], _ = Math.max(p.start, d.start), w = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
          for (let v = _, M = w; v < M; v += 3) {
            const S = v, L = v + 1, P = v + 2;
            r = as(this, f, e, Zn, c, h, S, L, P), r && (r.faceIndex = Math.floor(v / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(l.count, d.start + d.count);
        for (let p = m, f = g; p < f; p += 3) {
          const _ = p, w = p + 1, v = p + 2;
          r = as(this, i, e, Zn, c, h, _, w, v), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function ih(a, e, t, n, i, s, r, o) {
  let l;
  if (e.side === bt ? l = n.intersectTriangle(r, s, i, !0, o) : l = n.intersectTriangle(i, s, r, e.side === dn, o), l === null) return null;
  os.copy(o), os.applyMatrix4(a.matrixWorld);
  const c = t.ray.origin.distanceTo(os);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: os.clone(),
    object: a
  };
}
function as(a, e, t, n, i, s, r, o, l) {
  a.getVertexPosition(r, wi), a.getVertexPosition(o, Ti), a.getVertexPosition(l, Ei);
  const c = ih(a, e, t, n, wi, Ti, Ei, ar);
  if (c) {
    i && (is.fromBufferAttribute(i, r), ss.fromBufferAttribute(i, o), rs.fromBufferAttribute(i, l), c.uv = Qt.getUV(ar, wi, Ti, Ei, is, ss, rs, new _e())), s && (is.fromBufferAttribute(s, r), ss.fromBufferAttribute(s, o), rs.fromBufferAttribute(s, l), c.uv2 = Qt.getUV(ar, wi, Ti, Ei, is, ss, rs, new _e()));
    const h = {
      a: r,
      b: o,
      c: l,
      normal: new C(),
      materialIndex: 0
    };
    Qt.getNormal(wi, Ti, Ei, h.normal), c.face = h;
  }
  return c;
}
class fn extends St {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: r
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
    const l = [], c = [], h = [], u = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new lt(c, 3)), this.setAttribute("normal", new lt(h, 3)), this.setAttribute("uv", new lt(u, 2));
    function g(p, f, _, w, v, M, S, L, P, x, A) {
      const O = M / P, q = S / x, Z = M / 2, F = S / 2, N = L / 2, B = P + 1, K = x + 1;
      let J = 0, X = 0;
      const ee = new C();
      for (let Y = 0; Y < K; Y++) {
        const H = Y * q - F;
        for (let z = 0; z < B; z++) {
          const se = z * O - Z;
          ee[p] = se * w, ee[f] = H * v, ee[_] = N, c.push(ee.x, ee.y, ee.z), ee[p] = 0, ee[f] = 0, ee[_] = L > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), u.push(z / P), u.push(1 - Y / x), J += 1;
        }
      }
      for (let Y = 0; Y < x; Y++)
        for (let H = 0; H < P; H++) {
          const z = d + H + B * Y, se = d + H + B * (Y + 1), te = d + (H + 1) + B * (Y + 1), re = d + (H + 1) + B * Y;
          l.push(z, se, re), l.push(se, te, re), X += 6;
        }
      o.addGroup(m, X, A), m += X, d += J;
    }
  }
  static fromJSON(e) {
    return new fn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ui(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function xt(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = ui(a[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function sh(a) {
  const e = [];
  for (let t = 0; t < a.length; t++)
    e.push(a[t].clone());
  return e;
}
function cl(a) {
  return a.getRenderTarget() === null && a.outputEncoding === Ue ? Vt : Ui;
}
const rh = { clone: ui, merge: xt };
var oh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ah = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class pn extends Ht {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = oh, this.fragmentShader = ah, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ui(e.uniforms), this.uniformsGroups = sh(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class hl extends Ve {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new be(), this.projectionMatrix = new be(), this.projectionMatrixInverse = new be();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class vt extends hl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = zi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ii * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return zi * 2 * Math.atan(
      Math.tan(Ii * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, r) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ii * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = r.fullWidth, c = r.fullHeight;
      s += r.offsetX * i / l, t -= r.offsetY * n / c, i *= r.width / l, n *= r.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const $n = -90, Jn = 1;
class lh extends Ve {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new vt($n, Jn, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new vt($n, Jn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const r = new vt($n, Jn, e, t);
    r.layers = this.layers, r.up.set(0, 0, -1), r.lookAt(0, 1, 0), this.add(r);
    const o = new vt($n, Jn, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(0, -1, 0), this.add(o);
    const l = new vt($n, Jn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new vt($n, Jn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, -1), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, r, o, l, c] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = tn, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, r), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Fr extends ct {
  constructor(e, t, n, i, s, r, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : oi, super(e, t, n, i, s, r, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ch extends On {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Fr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : dt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new fn(5, 5, 5), s = new pn({
      name: "CubemapFromEquirect",
      uniforms: ui(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: bt,
      blending: un
    });
    s.uniforms.tEquirect.value = t;
    const r = new at(i, s), o = t.minFilter;
    return t.minFilter === Dn && (t.minFilter = dt), new lh(1, 10, this).update(e, r), t.minFilter = o, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++)
      e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const lr = /* @__PURE__ */ new C(), hh = /* @__PURE__ */ new C(), uh = /* @__PURE__ */ new Ct();
class wn {
  constructor(e = new C(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = lr.subVectors(n, t).cross(hh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(lr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || uh.getNormalMatrix(e), i = this.coplanarPoint(lr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qn = /* @__PURE__ */ new pi(), ls = /* @__PURE__ */ new C();
class Ur {
  constructor(e = new wn(), t = new wn(), n = new wn(), i = new wn(), s = new wn(), r = new wn()) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(r), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], r = n[2], o = n[3], l = n[4], c = n[5], h = n[6], u = n[7], d = n[8], m = n[9], g = n[10], p = n[11], f = n[12], _ = n[13], w = n[14], v = n[15];
    return t[0].setComponents(o - i, u - l, p - d, v - f).normalize(), t[1].setComponents(o + i, u + l, p + d, v + f).normalize(), t[2].setComponents(o + s, u + c, p + m, v + _).normalize(), t[3].setComponents(o - s, u - c, p - m, v - _).normalize(), t[4].setComponents(o - r, u - h, p - g, v - w).normalize(), t[5].setComponents(o + r, u + h, p + g, v + w).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Qn);
  }
  intersectsSprite(e) {
    return Qn.center.set(0, 0, 0), Qn.radius = 0.7071067811865476, Qn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Qn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (ls.x = i.normal.x > 0 ? e.max.x : e.min.x, ls.y = i.normal.y > 0 ? e.max.y : e.min.y, ls.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ls) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ul() {
  let a = null, e = !1, t = null, n = null;
  function i(s, r) {
    t(s, r), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = a.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      a = s;
    }
  };
}
function dh(a, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, h) {
    const u = c.array, d = c.usage, m = a.createBuffer();
    a.bindBuffer(h, m), a.bufferData(h, u, d), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = 5126;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (u instanceof Int16Array)
      g = 5122;
    else if (u instanceof Uint32Array)
      g = 5125;
    else if (u instanceof Int32Array)
      g = 5124;
    else if (u instanceof Int8Array)
      g = 5120;
    else if (u instanceof Uint8Array)
      g = 5121;
    else if (u instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, h, u) {
    const d = h.array, m = h.updateRange;
    a.bindBuffer(u, c), m.count === -1 ? a.bufferSubData(u, 0, d) : (t ? a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : a.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function r(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (a.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0 ? n.set(c, i(c, h)) : u.version < c.version && (s(u.buffer, c, h), u.version = c.version);
  }
  return {
    get: r,
    remove: o,
    update: l
  };
}
class zr extends St {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, r = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, m = [], g = [], p = [], f = [];
    for (let _ = 0; _ < h; _++) {
      const w = _ * d - r;
      for (let v = 0; v < c; v++) {
        const M = v * u - s;
        g.push(M, -w, 0), p.push(0, 0, 1), f.push(v / o), f.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let w = 0; w < o; w++) {
        const v = w + c * _, M = w + c * (_ + 1), S = w + 1 + c * (_ + 1), L = w + 1 + c * _;
        m.push(v, M, L), m.push(M, S, L);
      }
    this.setIndex(m), this.setAttribute("position", new lt(g, 3)), this.setAttribute("normal", new lt(p, 3)), this.setAttribute("uv", new lt(f, 2));
  }
  static fromJSON(e) {
    return new zr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var fh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, ph = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, mh = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, gh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, _h = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, xh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, vh = "vec3 transformed = vec3( position );", yh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Mh = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, bh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Sh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, wh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Th = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Eh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ah = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ch = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Lh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Rh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ph = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Dh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Ih = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Nh = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Oh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Fh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Uh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, zh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, kh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Bh = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Vh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Gh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Hh = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Wh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, jh = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, qh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Yh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Kh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Zh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, $h = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Jh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Qh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, eu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, tu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, nu = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, iu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, su = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ru = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ou = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, au = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, lu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, cu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, hu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, uu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, du = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, fu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, pu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, mu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, gu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, _u = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, vu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Mu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, bu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Su = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, wu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Tu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Eu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Au = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Cu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Lu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ru = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Pu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Du = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Iu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Nu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Ou = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Fu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Uu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, zu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ku = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Bu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Vu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Gu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Hu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Wu = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, ju = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Xu = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, qu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Yu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ku = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Zu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, $u = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Ju = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Qu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ed = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, td = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, nd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, id = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, sd = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, rd = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, od = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, ad = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, ld = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, cd = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, hd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ud = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, dd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, fd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, pd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, md = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, _d = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, xd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, vd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, yd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Md = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, bd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Sd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, wd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Td = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Ed = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ad = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ld = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Rd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Dd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Id = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Od = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Fd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ud = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Bd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Vd = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Hd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Wd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Te = {
  alphamap_fragment: fh,
  alphamap_pars_fragment: ph,
  alphatest_fragment: mh,
  alphatest_pars_fragment: gh,
  aomap_fragment: _h,
  aomap_pars_fragment: xh,
  begin_vertex: vh,
  beginnormal_vertex: yh,
  bsdfs: Mh,
  iridescence_fragment: bh,
  bumpmap_pars_fragment: Sh,
  clipping_planes_fragment: wh,
  clipping_planes_pars_fragment: Th,
  clipping_planes_pars_vertex: Eh,
  clipping_planes_vertex: Ah,
  color_fragment: Ch,
  color_pars_fragment: Lh,
  color_pars_vertex: Rh,
  color_vertex: Ph,
  common: Dh,
  cube_uv_reflection_fragment: Ih,
  defaultnormal_vertex: Nh,
  displacementmap_pars_vertex: Oh,
  displacementmap_vertex: Fh,
  emissivemap_fragment: Uh,
  emissivemap_pars_fragment: zh,
  encodings_fragment: kh,
  encodings_pars_fragment: Bh,
  envmap_fragment: Vh,
  envmap_common_pars_fragment: Gh,
  envmap_pars_fragment: Hh,
  envmap_pars_vertex: Wh,
  envmap_physical_pars_fragment: nu,
  envmap_vertex: jh,
  fog_vertex: Xh,
  fog_pars_vertex: qh,
  fog_fragment: Yh,
  fog_pars_fragment: Kh,
  gradientmap_pars_fragment: Zh,
  lightmap_fragment: $h,
  lightmap_pars_fragment: Jh,
  lights_lambert_fragment: Qh,
  lights_lambert_pars_fragment: eu,
  lights_pars_begin: tu,
  lights_toon_fragment: iu,
  lights_toon_pars_fragment: su,
  lights_phong_fragment: ru,
  lights_phong_pars_fragment: ou,
  lights_physical_fragment: au,
  lights_physical_pars_fragment: lu,
  lights_fragment_begin: cu,
  lights_fragment_maps: hu,
  lights_fragment_end: uu,
  logdepthbuf_fragment: du,
  logdepthbuf_pars_fragment: fu,
  logdepthbuf_pars_vertex: pu,
  logdepthbuf_vertex: mu,
  map_fragment: gu,
  map_pars_fragment: _u,
  map_particle_fragment: xu,
  map_particle_pars_fragment: vu,
  metalnessmap_fragment: yu,
  metalnessmap_pars_fragment: Mu,
  morphcolor_vertex: bu,
  morphnormal_vertex: Su,
  morphtarget_pars_vertex: wu,
  morphtarget_vertex: Tu,
  normal_fragment_begin: Eu,
  normal_fragment_maps: Au,
  normal_pars_fragment: Cu,
  normal_pars_vertex: Lu,
  normal_vertex: Ru,
  normalmap_pars_fragment: Pu,
  clearcoat_normal_fragment_begin: Du,
  clearcoat_normal_fragment_maps: Iu,
  clearcoat_pars_fragment: Nu,
  iridescence_pars_fragment: Ou,
  output_fragment: Fu,
  packing: Uu,
  premultiplied_alpha_fragment: zu,
  project_vertex: ku,
  dithering_fragment: Bu,
  dithering_pars_fragment: Vu,
  roughnessmap_fragment: Gu,
  roughnessmap_pars_fragment: Hu,
  shadowmap_pars_fragment: Wu,
  shadowmap_pars_vertex: ju,
  shadowmap_vertex: Xu,
  shadowmask_pars_fragment: qu,
  skinbase_vertex: Yu,
  skinning_pars_vertex: Ku,
  skinning_vertex: Zu,
  skinnormal_vertex: $u,
  specularmap_fragment: Ju,
  specularmap_pars_fragment: Qu,
  tonemapping_fragment: ed,
  tonemapping_pars_fragment: td,
  transmission_fragment: nd,
  transmission_pars_fragment: id,
  uv_pars_fragment: sd,
  uv_pars_vertex: rd,
  uv_vertex: od,
  uv2_pars_fragment: ad,
  uv2_pars_vertex: ld,
  uv2_vertex: cd,
  worldpos_vertex: hd,
  background_vert: ud,
  background_frag: dd,
  backgroundCube_vert: fd,
  backgroundCube_frag: pd,
  cube_vert: md,
  cube_frag: gd,
  depth_vert: _d,
  depth_frag: xd,
  distanceRGBA_vert: vd,
  distanceRGBA_frag: yd,
  equirect_vert: Md,
  equirect_frag: bd,
  linedashed_vert: Sd,
  linedashed_frag: wd,
  meshbasic_vert: Td,
  meshbasic_frag: Ed,
  meshlambert_vert: Ad,
  meshlambert_frag: Cd,
  meshmatcap_vert: Ld,
  meshmatcap_frag: Rd,
  meshnormal_vert: Pd,
  meshnormal_frag: Dd,
  meshphong_vert: Id,
  meshphong_frag: Nd,
  meshphysical_vert: Od,
  meshphysical_frag: Fd,
  meshtoon_vert: Ud,
  meshtoon_frag: zd,
  points_vert: kd,
  points_frag: Bd,
  shadow_vert: Vd,
  shadow_frag: Gd,
  sprite_vert: Hd,
  sprite_frag: Wd
}, ie = {
  common: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Ct() },
    uv2Transform: { value: /* @__PURE__ */ new Ct() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new _e(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new we(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ct() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new we(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new _e(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ct() }
  }
}, Gt = {
  basic: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.fog
    ]),
    vertexShader: Te.meshbasic_vert,
    fragmentShader: Te.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) }
      }
    ]),
    vertexShader: Te.meshlambert_vert,
    fragmentShader: Te.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.specularmap,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) },
        specular: { value: /* @__PURE__ */ new we(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Te.meshphong_vert,
    fragmentShader: Te.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.envmap,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.roughnessmap,
      ie.metalnessmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Te.meshphysical_vert,
    fragmentShader: Te.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.aomap,
      ie.lightmap,
      ie.emissivemap,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.gradientmap,
      ie.fog,
      ie.lights,
      {
        emissive: { value: /* @__PURE__ */ new we(0) }
      }
    ]),
    vertexShader: Te.meshtoon_vert,
    fragmentShader: Te.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      ie.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Te.meshmatcap_vert,
    fragmentShader: Te.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ xt([
      ie.points,
      ie.fog
    ]),
    vertexShader: Te.points_vert,
    fragmentShader: Te.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Te.linedashed_vert,
    fragmentShader: Te.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.displacementmap
    ]),
    vertexShader: Te.depth_vert,
    fragmentShader: Te.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.bumpmap,
      ie.normalmap,
      ie.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Te.meshnormal_vert,
    fragmentShader: Te.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ xt([
      ie.sprite,
      ie.fog
    ]),
    vertexShader: Te.sprite_vert,
    fragmentShader: Te.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ct() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Te.background_vert,
    fragmentShader: Te.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Te.backgroundCube_vert,
    fragmentShader: Te.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Te.cube_vert,
    fragmentShader: Te.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Te.equirect_vert,
    fragmentShader: Te.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ xt([
      ie.common,
      ie.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new C() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Te.distanceRGBA_vert,
    fragmentShader: Te.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ xt([
      ie.lights,
      ie.fog,
      {
        color: { value: /* @__PURE__ */ new we(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Te.shadow_vert,
    fragmentShader: Te.shadow_frag
  }
};
Gt.physical = {
  uniforms: /* @__PURE__ */ xt([
    Gt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new _e(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new we(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new _e() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new we(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new we(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Te.meshphysical_vert,
  fragmentShader: Te.meshphysical_frag
};
const cs = { r: 0, b: 0, g: 0 };
function jd(a, e, t, n, i, s, r) {
  const o = new we(0);
  let l = s === !0 ? 0 : 1, c, h, u = null, d = 0, m = null;
  function g(f, _) {
    let w = !1, v = _.isScene === !0 ? _.background : null;
    v && v.isTexture && (v = (_.backgroundBlurriness > 0 ? t : e).get(v));
    const M = a.xr, S = M.getSession && M.getSession();
    S && S.environmentBlendMode === "additive" && (v = null), v === null ? p(o, l) : v && v.isColor && (p(v, 1), w = !0), (a.autoClear || w) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), v && (v.isCubeTexture || v.mapping === ws) ? (h === void 0 && (h = new at(
      new fn(1, 1, 1),
      new pn({
        name: "BackgroundCubeMaterial",
        uniforms: ui(Gt.backgroundCube.uniforms),
        vertexShader: Gt.backgroundCube.vertexShader,
        fragmentShader: Gt.backgroundCube.fragmentShader,
        side: bt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(L, P, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.toneMapped = v.encoding !== Ue, (u !== v || d !== v.version || m !== a.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, m = a.toneMapping), h.layers.enableAll(), f.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (c === void 0 && (c = new at(
      new zr(2, 2),
      new pn({
        name: "BackgroundMaterial",
        uniforms: ui(Gt.background.uniforms),
        vertexShader: Gt.background.vertexShader,
        fragmentShader: Gt.background.fragmentShader,
        side: dn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c.material.toneMapped = v.encoding !== Ue, v.matrixAutoUpdate === !0 && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || m !== a.toneMapping) && (c.material.needsUpdate = !0, u = v, d = v.version, m = a.toneMapping), c.layers.enableAll(), f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(f, _) {
    f.getRGB(cs, cl(a)), n.buffers.color.setClear(cs.r, cs.g, cs.b, _, r);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, _ = 1) {
      o.set(f), l = _, p(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(f) {
      l = f, p(o, l);
    },
    render: g
  };
}
function Xd(a, e, t, n) {
  const i = a.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), r = n.isWebGL2 || s !== null, o = {}, l = f(null);
  let c = l, h = !1;
  function u(N, B, K, J, X) {
    let ee = !1;
    if (r) {
      const Y = p(J, K, B);
      c !== Y && (c = Y, m(c.object)), ee = _(N, J, K, X), ee && w(N, J, K, X);
    } else {
      const Y = B.wireframe === !0;
      (c.geometry !== J.id || c.program !== K.id || c.wireframe !== Y) && (c.geometry = J.id, c.program = K.id, c.wireframe = Y, ee = !0);
    }
    X !== null && t.update(X, 34963), (ee || h) && (h = !1, x(N, B, K, J), X !== null && a.bindBuffer(34963, t.get(X).buffer));
  }
  function d() {
    return n.isWebGL2 ? a.createVertexArray() : s.createVertexArrayOES();
  }
  function m(N) {
    return n.isWebGL2 ? a.bindVertexArray(N) : s.bindVertexArrayOES(N);
  }
  function g(N) {
    return n.isWebGL2 ? a.deleteVertexArray(N) : s.deleteVertexArrayOES(N);
  }
  function p(N, B, K) {
    const J = K.wireframe === !0;
    let X = o[N.id];
    X === void 0 && (X = {}, o[N.id] = X);
    let ee = X[B.id];
    ee === void 0 && (ee = {}, X[B.id] = ee);
    let Y = ee[J];
    return Y === void 0 && (Y = f(d()), ee[J] = Y), Y;
  }
  function f(N) {
    const B = [], K = [], J = [];
    for (let X = 0; X < i; X++)
      B[X] = 0, K[X] = 0, J[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: K,
      attributeDivisors: J,
      object: N,
      attributes: {},
      index: null
    };
  }
  function _(N, B, K, J) {
    const X = c.attributes, ee = B.attributes;
    let Y = 0;
    const H = K.getAttributes();
    for (const z in H)
      if (H[z].location >= 0) {
        const te = X[z];
        let re = ee[z];
        if (re === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (re = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (re = N.instanceColor)), te === void 0 || te.attribute !== re || re && te.data !== re.data) return !0;
        Y++;
      }
    return c.attributesNum !== Y || c.index !== J;
  }
  function w(N, B, K, J) {
    const X = {}, ee = B.attributes;
    let Y = 0;
    const H = K.getAttributes();
    for (const z in H)
      if (H[z].location >= 0) {
        let te = ee[z];
        te === void 0 && (z === "instanceMatrix" && N.instanceMatrix && (te = N.instanceMatrix), z === "instanceColor" && N.instanceColor && (te = N.instanceColor));
        const re = {};
        re.attribute = te, te && te.data && (re.data = te.data), X[z] = re, Y++;
      }
    c.attributes = X, c.attributesNum = Y, c.index = J;
  }
  function v() {
    const N = c.newAttributes;
    for (let B = 0, K = N.length; B < K; B++)
      N[B] = 0;
  }
  function M(N) {
    S(N, 0);
  }
  function S(N, B) {
    const K = c.newAttributes, J = c.enabledAttributes, X = c.attributeDivisors;
    K[N] = 1, J[N] === 0 && (a.enableVertexAttribArray(N), J[N] = 1), X[N] !== B && ((n.isWebGL2 ? a : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](N, B), X[N] = B);
  }
  function L() {
    const N = c.newAttributes, B = c.enabledAttributes;
    for (let K = 0, J = B.length; K < J; K++)
      B[K] !== N[K] && (a.disableVertexAttribArray(K), B[K] = 0);
  }
  function P(N, B, K, J, X, ee) {
    n.isWebGL2 === !0 && (K === 5124 || K === 5125) ? a.vertexAttribIPointer(N, B, K, X, ee) : a.vertexAttribPointer(N, B, K, J, X, ee);
  }
  function x(N, B, K, J) {
    if (n.isWebGL2 === !1 && (N.isInstancedMesh || J.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    v();
    const X = J.attributes, ee = K.getAttributes(), Y = B.defaultAttributeValues;
    for (const H in ee) {
      const z = ee[H];
      if (z.location >= 0) {
        let se = X[H];
        if (se === void 0 && (H === "instanceMatrix" && N.instanceMatrix && (se = N.instanceMatrix), H === "instanceColor" && N.instanceColor && (se = N.instanceColor)), se !== void 0) {
          const te = se.normalized, re = se.itemSize, W = t.get(se);
          if (W === void 0) continue;
          const Ce = W.buffer, de = W.type, xe = W.bytesPerElement;
          if (se.isInterleavedBufferAttribute) {
            const ue = se.data, Fe = ue.stride, Se = se.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < z.locationSize; ve++)
                S(z.location + ve, ue.meshPerAttribute);
              N.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let ve = 0; ve < z.locationSize; ve++)
                M(z.location + ve);
            a.bindBuffer(34962, Ce);
            for (let ve = 0; ve < z.locationSize; ve++)
              P(
                z.location + ve,
                re / z.locationSize,
                de,
                te,
                Fe * xe,
                (Se + re / z.locationSize * ve) * xe
              );
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let ue = 0; ue < z.locationSize; ue++)
                S(z.location + ue, se.meshPerAttribute);
              N.isInstancedMesh !== !0 && J._maxInstanceCount === void 0 && (J._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let ue = 0; ue < z.locationSize; ue++)
                M(z.location + ue);
            a.bindBuffer(34962, Ce);
            for (let ue = 0; ue < z.locationSize; ue++)
              P(
                z.location + ue,
                re / z.locationSize,
                de,
                te,
                re * xe,
                re / z.locationSize * ue * xe
              );
          }
        } else if (Y !== void 0) {
          const te = Y[H];
          if (te !== void 0)
            switch (te.length) {
              case 2:
                a.vertexAttrib2fv(z.location, te);
                break;
              case 3:
                a.vertexAttrib3fv(z.location, te);
                break;
              case 4:
                a.vertexAttrib4fv(z.location, te);
                break;
              default:
                a.vertexAttrib1fv(z.location, te);
            }
        }
      }
    }
    L();
  }
  function A() {
    Z();
    for (const N in o) {
      const B = o[N];
      for (const K in B) {
        const J = B[K];
        for (const X in J)
          g(J[X].object), delete J[X];
        delete B[K];
      }
      delete o[N];
    }
  }
  function O(N) {
    if (o[N.id] === void 0) return;
    const B = o[N.id];
    for (const K in B) {
      const J = B[K];
      for (const X in J)
        g(J[X].object), delete J[X];
      delete B[K];
    }
    delete o[N.id];
  }
  function q(N) {
    for (const B in o) {
      const K = o[B];
      if (K[N.id] === void 0) continue;
      const J = K[N.id];
      for (const X in J)
        g(J[X].object), delete J[X];
      delete K[N.id];
    }
  }
  function Z() {
    F(), h = !0, c !== l && (c = l, m(c.object));
  }
  function F() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: u,
    reset: Z,
    resetDefaultState: F,
    dispose: A,
    releaseStatesOfGeometry: O,
    releaseStatesOfProgram: q,
    initAttributes: v,
    enableAttribute: M,
    disableUnusedAttributes: L
  };
}
function qd(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(c) {
    s = c;
  }
  function o(c, h) {
    a.drawArrays(s, c, h), t.update(h, s, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let d, m;
    if (i)
      d = a, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, c, h, u), t.update(h, s, u);
  }
  this.setMode = r, this.render = o, this.renderInstances = l;
}
function Yd(a, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const P = e.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(P) {
    if (P === "highp") {
      if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const r = typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && a instanceof WebGL2ComputeRenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = r || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = a.getParameter(34930), d = a.getParameter(35660), m = a.getParameter(3379), g = a.getParameter(34076), p = a.getParameter(34921), f = a.getParameter(36347), _ = a.getParameter(36348), w = a.getParameter(36349), v = d > 0, M = r || e.has("OES_texture_float"), S = v && M, L = r ? a.getParameter(36183) : 0;
  return {
    isWebGL2: r,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: _,
    maxFragmentUniforms: w,
    vertexTextures: v,
    floatFragmentTextures: M,
    floatVertexTextures: S,
    maxSamples: L
  };
}
function Kd(a) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const r = new wn(), o = new Ct(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d, m) {
    const g = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, t = h(u, m, 0), n = u.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, c();
  }, this.setState = function(u, d, m) {
    const g = u.clippingPlanes, p = u.clipIntersection, f = u.clipShadows, _ = a.get(u);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : c();
    else {
      const w = s ? 0 : n, v = w * 4;
      let M = _.clippingState || null;
      l.value = M, M = h(g, d, v, m);
      for (let S = 0; S !== v; ++S)
        M[S] = t[S];
      _.clippingState = M, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += w;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, m, g) {
    const p = u !== null ? u.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const _ = m + p * 4, w = d.matrixWorldInverse;
        o.getNormalMatrix(w), (f === null || f.length < _) && (f = new Float32Array(_));
        for (let v = 0, M = m; v !== p; ++v, M += 4)
          r.copy(u[v]).applyMatrix4(w, o), r.normal.toArray(f, M), f[M + 3] = r.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function Zd(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, o) {
    return o === Mr ? r.mapping = oi : o === br && (r.mapping = ai), r;
  }
  function n(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      const o = r.mapping;
      if (o === Mr || o === br)
        if (e.has(r)) {
          const l = e.get(r).texture;
          return t(l, r.mapping);
        } else {
          const l = r.image;
          if (l && l.height > 0) {
            const c = new ch(l.height / 2);
            return c.fromEquirectangularTexture(a, r), e.set(r, c), r.addEventListener("dispose", i), t(c.texture, r.mapping);
          } else
            return null;
        }
    }
    return r;
  }
  function i(r) {
    const o = r.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class kr extends hl {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, r = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, r = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, r, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ni = 4, Uo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], En = 20, cr = /* @__PURE__ */ new kr(), zo = /* @__PURE__ */ new we();
let hr = null;
const Tn = (1 + Math.sqrt(5)) / 2, ei = 1 / Tn, ko = [
  /* @__PURE__ */ new C(1, 1, 1),
  /* @__PURE__ */ new C(-1, 1, 1),
  /* @__PURE__ */ new C(1, 1, -1),
  /* @__PURE__ */ new C(-1, 1, -1),
  /* @__PURE__ */ new C(0, Tn, ei),
  /* @__PURE__ */ new C(0, Tn, -ei),
  /* @__PURE__ */ new C(ei, 0, Tn),
  /* @__PURE__ */ new C(-ei, 0, Tn),
  /* @__PURE__ */ new C(Tn, ei, 0),
  /* @__PURE__ */ new C(-Tn, ei, 0)
];
class Bo {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    hr = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ho(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Go(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(hr), e.scissorTest = !1, hs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === oi || e.mapping === ai ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), hr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: dt,
      minFilter: dt,
      generateMipmaps: !1,
      type: Oi,
      format: Nt,
      encoding: Nn,
      depthBuffer: !1
    }, i = Vo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Vo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = $d(s)), this._blurMaterial = Jd(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new at(this._lodPlanes[0], e);
    this._renderer.compile(t, cr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new vt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(zo), h.toneMapping = tn, h.autoClear = !1;
    const m = new zt({
      name: "PMREM.Background",
      side: bt,
      depthWrite: !1,
      depthTest: !1
    }), g = new at(new fn(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(zo), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const w = _ % 3;
      w === 0 ? (o.up.set(0, l[_], 0), o.lookAt(c[_], 0, 0)) : w === 1 ? (o.up.set(0, 0, l[_]), o.lookAt(0, c[_], 0)) : (o.up.set(0, l[_], 0), o.lookAt(0, 0, c[_]));
      const v = this._cubeSize;
      hs(i, w * v, _ > 2 ? v : 0, v, v), h.setRenderTarget(i), p && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === oi || e.mapping === ai;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ho()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Go());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, r = new at(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    hs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(r, cr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), r = ko[(i - 1) % ko.length];
      this._blur(e, i - 1, i, s, r);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      r,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      r,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, r, o) {
    const l = this._renderer, c = this._blurMaterial;
    r !== "latitudinal" && r !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new at(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * En - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(h * p) : En;
    f > En && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);
    const _ = [];
    let w = 0;
    for (let P = 0; P < En; ++P) {
      const x = P / p, A = Math.exp(-x * x / 2);
      _.push(A), P === 0 ? w += A : P < f && (w += 2 * A);
    }
    for (let P = 0; P < _.length; P++)
      _[P] = _[P] / w;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = _, d.latitudinal.value = r === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: v } = this;
    d.dTheta.value = g, d.mipInt.value = v - n;
    const M = this._sizeLods[i], S = 3 * M * (i > v - ni ? i - v + ni : 0), L = 4 * (this._cubeSize - M);
    hs(t, S, L, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, cr);
  }
}
function $d(a) {
  const e = [], t = [], n = [];
  let i = a;
  const s = a - ni + 1 + Uo.length;
  for (let r = 0; r < s; r++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    r > a - ni ? l = Uo[r - a + ni - 1] : r === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, p = 3, f = 2, _ = 1, w = new Float32Array(p * g * m), v = new Float32Array(f * g * m), M = new Float32Array(_ * g * m);
    for (let L = 0; L < m; L++) {
      const P = L % 3 * 2 / 3 - 1, x = L > 2 ? 0 : -1, A = [
        P,
        x,
        0,
        P + 2 / 3,
        x,
        0,
        P + 2 / 3,
        x + 1,
        0,
        P,
        x,
        0,
        P + 2 / 3,
        x + 1,
        0,
        P,
        x + 1,
        0
      ];
      w.set(A, p * g * L), v.set(d, f * g * L);
      const O = [L, L, L, L, L, L];
      M.set(O, _ * g * L);
    }
    const S = new St();
    S.setAttribute("position", new yt(w, p)), S.setAttribute("uv", new yt(v, f)), S.setAttribute("faceIndex", new yt(M, _)), e.push(S), i > ni && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Vo(a, e, t) {
  const n = new On(a, e, t);
  return n.texture.mapping = ws, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function hs(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function Jd(a, e, t) {
  const n = new Float32Array(En), i = new C(0, 1, 0);
  return new pn({
    name: "SphericalGaussianBlur",
    defines: {
      n: En,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Br(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: un,
    depthTest: !1,
    depthWrite: !1
  });
}
function Go() {
  return new pn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Br(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: un,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ho() {
  return new pn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Br(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: un,
    depthTest: !1,
    depthWrite: !1
  });
}
function Br() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Qd(a) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Mr || l === br, h = l === oi || l === ai;
      if (c || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return t === null && (t = new Bo(a)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const u = o.image;
            if (c && u && u.height > 0 || h && u && i(u)) {
              t === null && (t = new Bo(a));
              const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: r
  };
}
function ef(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function tf(a, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function r(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", r), delete i[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", r), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const m = u.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, _ = p.length; f < _; f++)
        e.update(p[f], 34962);
    }
  }
  function c(u) {
    const d = [], m = u.index, g = u.attributes.position;
    let p = 0;
    if (m !== null) {
      const w = m.array;
      p = m.version;
      for (let v = 0, M = w.length; v < M; v += 3) {
        const S = w[v + 0], L = w[v + 1], P = w[v + 2];
        d.push(S, L, L, P, P, S);
      }
    } else {
      const w = g.array;
      p = g.version;
      for (let v = 0, M = w.length / 3 - 1; v < M; v += 3) {
        const S = v + 0, L = v + 1, P = v + 2;
        d.push(S, L, L, P, P, S);
      }
    }
    const f = new (nl(d) ? ll : al)(d, 1);
    f.version = p;
    const _ = s.get(u);
    _ && e.remove(_), s.set(u, f);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && c(u);
    } else
      c(u);
    return s.get(u);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: h
  };
}
function nf(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(d) {
    s = d;
  }
  let o, l;
  function c(d) {
    o = d.type, l = d.bytesPerElement;
  }
  function h(d, m) {
    a.drawElements(s, m, o, d * l), t.update(m, s, 1);
  }
  function u(d, m, g) {
    if (g === 0) return;
    let p, f;
    if (i)
      p = a, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, m, o, d * l, g), t.update(m, s, g);
  }
  this.setMode = r, this.setIndex = c, this.render = h, this.renderInstances = u;
}
function sf(a) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, r, o) {
    switch (t.calls++, r) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function rf(a, e) {
  return a[0] - e[0];
}
function of(a, e) {
  return Math.abs(e[1]) - Math.abs(a[1]);
}
function af(a, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), r = new We(), o = [];
  for (let c = 0; c < 8; c++)
    o[c] = [c, 0];
  function l(c, h, u, d) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(h);
      if (f === void 0 || f.count !== p) {
        let B = function() {
          F.dispose(), s.delete(h), h.removeEventListener("dispose", B);
        };
        f !== void 0 && f.texture.dispose();
        const v = h.morphAttributes.position !== void 0, M = h.morphAttributes.normal !== void 0, S = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], P = h.morphAttributes.normal || [], x = h.morphAttributes.color || [];
        let A = 0;
        v === !0 && (A = 1), M === !0 && (A = 2), S === !0 && (A = 3);
        let O = h.attributes.position.count * A, q = 1;
        O > e.maxTextureSize && (q = Math.ceil(O / e.maxTextureSize), O = e.maxTextureSize);
        const Z = new Float32Array(O * q * 4 * p), F = new ol(Z, O, q, p);
        F.type = hn, F.needsUpdate = !0;
        const N = A * 4;
        for (let K = 0; K < p; K++) {
          const J = L[K], X = P[K], ee = x[K], Y = O * q * 4 * K;
          for (let H = 0; H < J.count; H++) {
            const z = H * N;
            v === !0 && (r.fromBufferAttribute(J, H), Z[Y + z + 0] = r.x, Z[Y + z + 1] = r.y, Z[Y + z + 2] = r.z, Z[Y + z + 3] = 0), M === !0 && (r.fromBufferAttribute(X, H), Z[Y + z + 4] = r.x, Z[Y + z + 5] = r.y, Z[Y + z + 6] = r.z, Z[Y + z + 7] = 0), S === !0 && (r.fromBufferAttribute(ee, H), Z[Y + z + 8] = r.x, Z[Y + z + 9] = r.y, Z[Y + z + 10] = r.z, Z[Y + z + 11] = ee.itemSize === 4 ? r.w : 1);
          }
        }
        f = {
          count: p,
          texture: F,
          size: new _e(O, q)
        }, s.set(h, f), h.addEventListener("dispose", B);
      }
      let _ = 0;
      for (let v = 0; v < m.length; v++)
        _ += m[v];
      const w = h.morphTargetsRelative ? 1 : 1 - _;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", w), d.getUniforms().setValue(a, "morphTargetInfluences", m), d.getUniforms().setValue(a, "morphTargetsTexture", f.texture, t), d.getUniforms().setValue(a, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[h.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let M = 0; M < g; M++)
          p[M] = [M, 0];
        n[h.id] = p;
      }
      for (let M = 0; M < g; M++) {
        const S = p[M];
        S[0] = M, S[1] = m[M];
      }
      p.sort(of);
      for (let M = 0; M < 8; M++)
        M < g && p[M][1] ? (o[M][0] = p[M][0], o[M][1] = p[M][1]) : (o[M][0] = Number.MAX_SAFE_INTEGER, o[M][1] = 0);
      o.sort(rf);
      const f = h.morphAttributes.position, _ = h.morphAttributes.normal;
      let w = 0;
      for (let M = 0; M < 8; M++) {
        const S = o[M], L = S[0], P = S[1];
        L !== Number.MAX_SAFE_INTEGER && P ? (f && h.getAttribute("morphTarget" + M) !== f[L] && h.setAttribute("morphTarget" + M, f[L]), _ && h.getAttribute("morphNormal" + M) !== _[L] && h.setAttribute("morphNormal" + M, _[L]), i[M] = P, w += P) : (f && h.hasAttribute("morphTarget" + M) === !0 && h.deleteAttribute("morphTarget" + M), _ && h.hasAttribute("morphNormal" + M) === !0 && h.deleteAttribute("morphNormal" + M), i[M] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - w;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", v), d.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function lf(a, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    return i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), u;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: r
  };
}
const dl = /* @__PURE__ */ new ct(), fl = /* @__PURE__ */ new ol(), pl = /* @__PURE__ */ new qc(), ml = /* @__PURE__ */ new Fr(), Wo = [], jo = [], Xo = new Float32Array(16), qo = new Float32Array(9), Yo = new Float32Array(4);
function mi(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0) return a;
  const i = e * t;
  let s = Wo[i];
  if (s === void 0 && (s = new Float32Array(i), Wo[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let r = 1, o = 0; r !== e; ++r)
      o += t, a[r].toArray(s, o);
  }
  return s;
}
function et(a, e) {
  if (a.length !== e.length) return !1;
  for (let t = 0, n = a.length; t < n; t++)
    if (a[t] !== e[t]) return !1;
  return !0;
}
function tt(a, e) {
  for (let t = 0, n = e.length; t < n; t++)
    a[t] = e[t];
}
function Es(a, e) {
  let t = jo[e];
  t === void 0 && (t = new Int32Array(e), jo[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = a.allocateTextureUnit();
  return t;
}
function cf(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), t[0] = e);
}
function hf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e)) return;
    a.uniform2fv(this.addr, e), tt(t, e);
  }
}
function uf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (a.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (et(t, e)) return;
    a.uniform3fv(this.addr, e), tt(t, e);
  }
}
function df(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e)) return;
    a.uniform4fv(this.addr, e), tt(t, e);
  }
}
function ff(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    a.uniformMatrix2fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    Yo.set(n), a.uniformMatrix2fv(this.addr, !1, Yo), tt(t, n);
  }
}
function pf(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    a.uniformMatrix3fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    qo.set(n), a.uniformMatrix3fv(this.addr, !1, qo), tt(t, n);
  }
}
function mf(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (et(t, e)) return;
    a.uniformMatrix4fv(this.addr, !1, e), tt(t, e);
  } else {
    if (et(t, n)) return;
    Xo.set(n), a.uniformMatrix4fv(this.addr, !1, Xo), tt(t, n);
  }
}
function gf(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), t[0] = e);
}
function _f(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e)) return;
    a.uniform2iv(this.addr, e), tt(t, e);
  }
}
function xf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (et(t, e)) return;
    a.uniform3iv(this.addr, e), tt(t, e);
  }
}
function vf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e)) return;
    a.uniform4iv(this.addr, e), tt(t, e);
  }
}
function yf(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), t[0] = e);
}
function Mf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (et(t, e)) return;
    a.uniform2uiv(this.addr, e), tt(t, e);
  }
}
function bf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (et(t, e)) return;
    a.uniform3uiv(this.addr, e), tt(t, e);
  }
}
function Sf(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (et(t, e)) return;
    a.uniform4uiv(this.addr, e), tt(t, e);
  }
}
function wf(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || dl, i);
}
function Tf(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || pl, i);
}
function Ef(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ml, i);
}
function Af(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || fl, i);
}
function Cf(a) {
  switch (a) {
    case 5126:
      return cf;
    // FLOAT
    case 35664:
      return hf;
    // _VEC2
    case 35665:
      return uf;
    // _VEC3
    case 35666:
      return df;
    // _VEC4
    case 35674:
      return ff;
    // _MAT2
    case 35675:
      return pf;
    // _MAT3
    case 35676:
      return mf;
    // _MAT4
    case 5124:
    case 35670:
      return gf;
    // INT, BOOL
    case 35667:
    case 35671:
      return _f;
    // _VEC2
    case 35668:
    case 35672:
      return xf;
    // _VEC3
    case 35669:
    case 35673:
      return vf;
    // _VEC4
    case 5125:
      return yf;
    // UINT
    case 36294:
      return Mf;
    // _VEC2
    case 36295:
      return bf;
    // _VEC3
    case 36296:
      return Sf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return wf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Tf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Ef;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Af;
  }
}
function Lf(a, e) {
  a.uniform1fv(this.addr, e);
}
function Rf(a, e) {
  const t = mi(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Pf(a, e) {
  const t = mi(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function Df(a, e) {
  const t = mi(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function If(a, e) {
  const t = mi(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function Nf(a, e) {
  const t = mi(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function Of(a, e) {
  const t = mi(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function Ff(a, e) {
  a.uniform1iv(this.addr, e);
}
function Uf(a, e) {
  a.uniform2iv(this.addr, e);
}
function zf(a, e) {
  a.uniform3iv(this.addr, e);
}
function kf(a, e) {
  a.uniform4iv(this.addr, e);
}
function Bf(a, e) {
  a.uniform1uiv(this.addr, e);
}
function Vf(a, e) {
  a.uniform2uiv(this.addr, e);
}
function Gf(a, e) {
  a.uniform3uiv(this.addr, e);
}
function Hf(a, e) {
  a.uniform4uiv(this.addr, e);
}
function Wf(a, e, t) {
  const n = this.cache, i = e.length, s = Es(t, i);
  et(n, s) || (a.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2D(e[r] || dl, s[r]);
}
function jf(a, e, t) {
  const n = this.cache, i = e.length, s = Es(t, i);
  et(n, s) || (a.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture3D(e[r] || pl, s[r]);
}
function Xf(a, e, t) {
  const n = this.cache, i = e.length, s = Es(t, i);
  et(n, s) || (a.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTextureCube(e[r] || ml, s[r]);
}
function qf(a, e, t) {
  const n = this.cache, i = e.length, s = Es(t, i);
  et(n, s) || (a.uniform1iv(this.addr, s), tt(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2DArray(e[r] || fl, s[r]);
}
function Yf(a) {
  switch (a) {
    case 5126:
      return Lf;
    // FLOAT
    case 35664:
      return Rf;
    // _VEC2
    case 35665:
      return Pf;
    // _VEC3
    case 35666:
      return Df;
    // _VEC4
    case 35674:
      return If;
    // _MAT2
    case 35675:
      return Nf;
    // _MAT3
    case 35676:
      return Of;
    // _MAT4
    case 5124:
    case 35670:
      return Ff;
    // INT, BOOL
    case 35667:
    case 35671:
      return Uf;
    // _VEC2
    case 35668:
    case 35672:
      return zf;
    // _VEC3
    case 35669:
    case 35673:
      return kf;
    // _VEC4
    case 5125:
      return Bf;
    // UINT
    case 36294:
      return Vf;
    // _VEC2
    case 36295:
      return Gf;
    // _VEC3
    case 36296:
      return Hf;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Wf;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return jf;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Xf;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return qf;
  }
}
class Kf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Cf(t.type);
  }
}
class Zf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Yf(t.type);
  }
}
class $f {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, r = i.length; s !== r; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ur = /(\w+)(\])?(\[|\.)?/g;
function Ko(a, e) {
  a.seq.push(e), a.map[e.id] = e;
}
function Jf(a, e, t) {
  const n = a.name, i = n.length;
  for (ur.lastIndex = 0; ; ) {
    const s = ur.exec(n), r = ur.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && r + 2 === i) {
      Ko(t, c === void 0 ? new Kf(o, a, e) : new Zf(o, a, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new $f(o), Ko(t, u)), t = u;
    }
  }
}
class ys {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), r = e.getUniformLocation(t, s.name);
      Jf(s, r, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, r = t.length; s !== r; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function Zo(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
let Qf = 0;
function ep(a, e) {
  const t = a.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) {
    const o = r + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[r]}`);
  }
  return n.join(`
`);
}
function tp(a) {
  switch (a) {
    case Nn:
      return ["Linear", "( value )"];
    case Ue:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", a), ["Linear", "( value )"];
  }
}
function $o(a, e, t) {
  const n = a.getShaderParameter(e, 35713), i = a.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const r = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + ep(a.getShaderSource(e), r);
  } else
    return i;
}
function np(a, e) {
  const t = tp(e);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ip(a, e) {
  let t;
  switch (e) {
    case rc:
      t = "Linear";
      break;
    case oc:
      t = "Reinhard";
      break;
    case ac:
      t = "OptimizedCineon";
      break;
    case lc:
      t = "ACESFilmic";
      break;
    case cc:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function sp(a) {
  return [
    a.extensionDerivatives || a.envMapCubeUVHeight || a.bumpMap || a.tangentSpaceNormalMap || a.clearcoatNormalMap || a.flatShading || a.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) && a.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) && a.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Di).join(`
`);
}
function rp(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function op(a, e) {
  const t = {}, n = a.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = a.getActiveAttrib(e, i), r = s.name;
    let o = 1;
    s.type === 35674 && (o = 2), s.type === 35675 && (o = 3), s.type === 35676 && (o = 4), t[r] = {
      type: s.type,
      location: a.getAttribLocation(e, r),
      locationSize: o
    };
  }
  return t;
}
function Di(a) {
  return a !== "";
}
function Jo(a, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Qo(a, e) {
  return a.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ap = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ar(a) {
  return a.replace(ap, lp);
}
function lp(a, e) {
  const t = Te[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Ar(t);
}
const cp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ea(a) {
  return a.replace(cp, hp);
}
function hp(a, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ta(a) {
  let e = "precision " + a.precision + ` float;
precision ` + a.precision + " int;";
  return a.precision === "highp" ? e += `
#define HIGH_PRECISION` : a.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function up(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === Xa ? e = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === Ul ? e = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === Pi && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function dp(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case oi:
      case ai:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ws:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function fp(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case ai:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function pp(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case Ka:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ic:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case sc:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function mp(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function gp(a, e, t, n) {
  const i = a.getContext(), s = t.defines;
  let r = t.vertexShader, o = t.fragmentShader;
  const l = up(t), c = dp(t), h = fp(t), u = pp(t), d = mp(t), m = t.isWebGL2 ? "" : sp(t), g = rp(s), p = i.createProgram();
  let f, _, w = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(Di).join(`
`), f.length > 0 && (f += `
`), _ = [
    m,
    g
  ].filter(Di).join(`
`), _.length > 0 && (_ += `
`)) : (f = [
    ta(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Di).join(`
`), _ = [
    m,
    ta(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== tn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== tn ? Te.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== tn ? ip("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Te.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    np("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Di).join(`
`)), r = Ar(r), r = Jo(r, t), r = Qo(r, t), o = Ar(o), o = Jo(o, t), o = Qo(o, t), r = ea(r), o = ea(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (w = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, _ = [
    "#define varying in",
    t.glslVersion === To ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === To ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const v = w + f + r, M = w + _ + o, S = Zo(i, 35633, v), L = Zo(i, 35632, M);
  if (i.attachShader(p, S), i.attachShader(p, L), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), a.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(p).trim(), O = i.getShaderInfoLog(S).trim(), q = i.getShaderInfoLog(L).trim();
    let Z = !0, F = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      Z = !1;
      const N = $o(i, S, "vertex"), B = $o(i, L, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + A + `
` + N + `
` + B
      );
    } else A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (O === "" || q === "") && (F = !1);
    F && (this.diagnostics = {
      runnable: Z,
      programLog: A,
      vertexShader: {
        log: O,
        prefix: f
      },
      fragmentShader: {
        log: q,
        prefix: _
      }
    });
  }
  i.deleteShader(S), i.deleteShader(L);
  let P;
  this.getUniforms = function() {
    return P === void 0 && (P = new ys(i, p)), P;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = op(i, p)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Qf++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = S, this.fragmentShader = L, this;
}
let _p = 0;
class xp {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), r = this._getShaderCacheForMaterial(e);
    return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new vp(e), t.set(e, n)), n;
  }
}
class vp {
  constructor(e) {
    this.id = _p++, this.code = e, this.usedTimes = 0;
  }
}
function yp(a, e, t, n, i, s, r) {
  const o = new Or(), l = new xp(), c = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(x, A, O, q, Z) {
    const F = q.fog, N = Z.geometry, B = x.isMeshStandardMaterial ? q.environment : null, K = (x.isMeshStandardMaterial ? t : e).get(x.envMap || B), J = K && K.mapping === ws ? K.image.height : null, X = g[x.type];
    x.precision !== null && (m = i.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const ee = N.morphAttributes.position || N.morphAttributes.normal || N.morphAttributes.color, Y = ee !== void 0 ? ee.length : 0;
    let H = 0;
    N.morphAttributes.position !== void 0 && (H = 1), N.morphAttributes.normal !== void 0 && (H = 2), N.morphAttributes.color !== void 0 && (H = 3);
    let z, se, te, re;
    if (X) {
      const Fe = Gt[X];
      z = Fe.vertexShader, se = Fe.fragmentShader;
    } else
      z = x.vertexShader, se = x.fragmentShader, l.update(x), te = l.getVertexShaderID(x), re = l.getFragmentShaderID(x);
    const W = a.getRenderTarget(), Ce = x.alphaTest > 0, de = x.clearcoat > 0, xe = x.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: X,
      shaderName: x.type,
      vertexShader: z,
      fragmentShader: se,
      defines: x.defines,
      customVertexShaderID: te,
      customFragmentShaderID: re,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: Z.isInstancedMesh === !0,
      instancingColor: Z.isInstancedMesh === !0 && Z.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: W === null ? a.outputEncoding : W.isXRRenderTarget === !0 ? W.texture.encoding : Nn,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!K,
      envMapMode: K && K.mapping,
      envMapCubeUVHeight: J,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === Lc,
      tangentSpaceNormalMap: x.normalMapType === el,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Ue,
      clearcoat: de,
      clearcoatMap: de && !!x.clearcoatMap,
      clearcoatRoughnessMap: de && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!x.clearcoatNormalMap,
      iridescence: xe,
      iridescenceMap: xe && !!x.iridescenceMap,
      iridescenceThicknessMap: xe && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === ii,
      alphaMap: !!x.alphaMap,
      alphaTest: Ce,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!N.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!N.attributes.color && N.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(x.map || x.bumpMap || x.normalMap || x.specularMap || x.alphaMap || x.emissiveMap || x.roughnessMap || x.metalnessMap || x.clearcoatNormalMap || x.iridescenceMap || x.iridescenceThicknessMap || x.transmission > 0 || x.transmissionMap || x.thicknessMap || x.specularIntensityMap || x.specularColorMap || x.sheen > 0 || x.sheenColorMap || x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!F,
      useFog: x.fog === !0,
      fogExp2: F && F.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: Z.isSkinnedMesh === !0,
      morphTargets: N.morphAttributes.position !== void 0,
      morphNormals: N.morphAttributes.normal !== void 0,
      morphColors: N.morphAttributes.color !== void 0,
      morphTargetsCount: Y,
      morphTextureStride: H,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: a.shadowMap.enabled && O.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: x.toneMapped ? a.toneMapping : tn,
      physicallyCorrectLights: a.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Ss,
      flipSided: x.side === bt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function f(x) {
    const A = [];
    if (x.shaderID ? A.push(x.shaderID) : (A.push(x.customVertexShaderID), A.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const O in x.defines)
        A.push(O), A.push(x.defines[O]);
    return x.isRawShaderMaterial === !1 && (_(A, x), w(A, x), A.push(a.outputEncoding)), A.push(x.customProgramCacheKey), A.join();
  }
  function _(x, A) {
    x.push(A.precision), x.push(A.outputEncoding), x.push(A.envMapMode), x.push(A.envMapCubeUVHeight), x.push(A.combine), x.push(A.vertexUvs), x.push(A.fogExp2), x.push(A.sizeAttenuation), x.push(A.morphTargetsCount), x.push(A.morphAttributeCount), x.push(A.numDirLights), x.push(A.numPointLights), x.push(A.numSpotLights), x.push(A.numSpotLightMaps), x.push(A.numHemiLights), x.push(A.numRectAreaLights), x.push(A.numDirLightShadows), x.push(A.numPointLightShadows), x.push(A.numSpotLightShadows), x.push(A.numSpotLightShadowsWithMaps), x.push(A.shadowMapType), x.push(A.toneMapping), x.push(A.numClippingPlanes), x.push(A.numClipIntersection), x.push(A.depthPacking);
  }
  function w(x, A) {
    o.disableAll(), A.isWebGL2 && o.enable(0), A.supportsVertexTextures && o.enable(1), A.instancing && o.enable(2), A.instancingColor && o.enable(3), A.map && o.enable(4), A.matcap && o.enable(5), A.envMap && o.enable(6), A.lightMap && o.enable(7), A.aoMap && o.enable(8), A.emissiveMap && o.enable(9), A.bumpMap && o.enable(10), A.normalMap && o.enable(11), A.objectSpaceNormalMap && o.enable(12), A.tangentSpaceNormalMap && o.enable(13), A.clearcoat && o.enable(14), A.clearcoatMap && o.enable(15), A.clearcoatRoughnessMap && o.enable(16), A.clearcoatNormalMap && o.enable(17), A.iridescence && o.enable(18), A.iridescenceMap && o.enable(19), A.iridescenceThicknessMap && o.enable(20), A.displacementMap && o.enable(21), A.specularMap && o.enable(22), A.roughnessMap && o.enable(23), A.metalnessMap && o.enable(24), A.gradientMap && o.enable(25), A.alphaMap && o.enable(26), A.alphaTest && o.enable(27), A.vertexColors && o.enable(28), A.vertexAlphas && o.enable(29), A.vertexUvs && o.enable(30), A.vertexTangents && o.enable(31), A.uvsVertexOnly && o.enable(32), x.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.skinning && o.enable(4), A.morphTargets && o.enable(5), A.morphNormals && o.enable(6), A.morphColors && o.enable(7), A.premultipliedAlpha && o.enable(8), A.shadowMapEnabled && o.enable(9), A.physicallyCorrectLights && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.specularIntensityMap && o.enable(15), A.specularColorMap && o.enable(16), A.transmission && o.enable(17), A.transmissionMap && o.enable(18), A.thicknessMap && o.enable(19), A.sheen && o.enable(20), A.sheenColorMap && o.enable(21), A.sheenRoughnessMap && o.enable(22), A.decodeVideoTexture && o.enable(23), A.opaque && o.enable(24), x.push(o.mask);
  }
  function v(x) {
    const A = g[x.type];
    let O;
    if (A) {
      const q = Gt[A];
      O = rh.clone(q.uniforms);
    } else
      O = x.uniforms;
    return O;
  }
  function M(x, A) {
    let O;
    for (let q = 0, Z = c.length; q < Z; q++) {
      const F = c[q];
      if (F.cacheKey === A) {
        O = F, ++O.usedTimes;
        break;
      }
    }
    return O === void 0 && (O = new gp(a, A, x, s), c.push(O)), O;
  }
  function S(x) {
    if (--x.usedTimes === 0) {
      const A = c.indexOf(x);
      c[A] = c[c.length - 1], c.pop(), x.destroy();
    }
  }
  function L(x) {
    l.remove(x);
  }
  function P() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: v,
    acquireProgram: M,
    releaseProgram: S,
    releaseShaderCache: L,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: P
  };
}
function Mp() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let r = a.get(s);
    return r === void 0 && (r = {}, a.set(s, r)), r;
  }
  function t(s) {
    a.delete(s);
  }
  function n(s, r, o) {
    a.get(s)[r] = o;
  }
  function i() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function bp(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.material.id !== e.material.id ? a.material.id - e.material.id : a.z !== e.z ? a.z - e.z : a.id - e.id;
}
function na(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.z !== e.z ? e.z - a.z : a.id - e.id;
}
function ia() {
  const a = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function r(u, d, m, g, p, f) {
    let _ = a[e];
    return _ === void 0 ? (_ = {
      id: u.id,
      object: u,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: p,
      group: f
    }, a[e] = _) : (_.id = u.id, _.object = u, _.geometry = d, _.material = m, _.groupOrder = g, _.renderOrder = u.renderOrder, _.z = p, _.group = f), e++, _;
  }
  function o(u, d, m, g, p, f) {
    const _ = r(u, d, m, g, p, f);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(u, d, m, g, p, f) {
    const _ = r(u, d, m, g, p, f);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || bp), n.length > 1 && n.sort(d || na), i.length > 1 && i.sort(d || na);
  }
  function h() {
    for (let u = e, d = a.length; u < d; u++) {
      const m = a[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Sp() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = a.get(n);
    let r;
    return s === void 0 ? (r = new ia(), a.set(n, [r])) : i >= s.length ? (r = new ia(), s.push(r)) : r = s[i], r;
  }
  function t() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function wp() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new C(),
            color: new we()
          };
          break;
        case "SpotLight":
          t = {
            position: new C(),
            direction: new C(),
            color: new we(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new C(),
            color: new we(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new C(),
            skyColor: new we(),
            groundColor: new we()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new we(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C()
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
function Tp() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new _e()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new _e()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new _e(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
let Ep = 0;
function Ap(a, e) {
  return (e.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (a.map ? 1 : 0);
}
function Cp(a, e) {
  const t = new wp(), n = Tp(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new C());
  const s = new C(), r = new be(), o = new be();
  function l(h, u) {
    let d = 0, m = 0, g = 0;
    for (let q = 0; q < 9; q++) i.probe[q].set(0, 0, 0);
    let p = 0, f = 0, _ = 0, w = 0, v = 0, M = 0, S = 0, L = 0, P = 0, x = 0;
    h.sort(Ap);
    const A = u !== !0 ? Math.PI : 1;
    for (let q = 0, Z = h.length; q < Z; q++) {
      const F = h[q], N = F.color, B = F.intensity, K = F.distance, J = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight)
        d += N.r * B * A, m += N.g * B * A, g += N.b * B * A;
      else if (F.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(F.sh.coefficients[X], B);
      else if (F.isDirectionalLight) {
        const X = t.get(F);
        if (X.color.copy(F.color).multiplyScalar(F.intensity * A), F.castShadow) {
          const ee = F.shadow, Y = n.get(F);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.directionalShadow[p] = Y, i.directionalShadowMap[p] = J, i.directionalShadowMatrix[p] = F.shadow.matrix, M++;
        }
        i.directional[p] = X, p++;
      } else if (F.isSpotLight) {
        const X = t.get(F);
        X.position.setFromMatrixPosition(F.matrixWorld), X.color.copy(N).multiplyScalar(B * A), X.distance = K, X.coneCos = Math.cos(F.angle), X.penumbraCos = Math.cos(F.angle * (1 - F.penumbra)), X.decay = F.decay, i.spot[_] = X;
        const ee = F.shadow;
        if (F.map && (i.spotLightMap[P] = F.map, P++, ee.updateMatrices(F), F.castShadow && x++), i.spotLightMatrix[_] = ee.matrix, F.castShadow) {
          const Y = n.get(F);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, i.spotShadow[_] = Y, i.spotShadowMap[_] = J, L++;
        }
        _++;
      } else if (F.isRectAreaLight) {
        const X = t.get(F);
        X.color.copy(N).multiplyScalar(B), X.halfWidth.set(F.width * 0.5, 0, 0), X.halfHeight.set(0, F.height * 0.5, 0), i.rectArea[w] = X, w++;
      } else if (F.isPointLight) {
        const X = t.get(F);
        if (X.color.copy(F.color).multiplyScalar(F.intensity * A), X.distance = F.distance, X.decay = F.decay, F.castShadow) {
          const ee = F.shadow, Y = n.get(F);
          Y.shadowBias = ee.bias, Y.shadowNormalBias = ee.normalBias, Y.shadowRadius = ee.radius, Y.shadowMapSize = ee.mapSize, Y.shadowCameraNear = ee.camera.near, Y.shadowCameraFar = ee.camera.far, i.pointShadow[f] = Y, i.pointShadowMap[f] = J, i.pointShadowMatrix[f] = F.shadow.matrix, S++;
        }
        i.point[f] = X, f++;
      } else if (F.isHemisphereLight) {
        const X = t.get(F);
        X.skyColor.copy(F.color).multiplyScalar(B * A), X.groundColor.copy(F.groundColor).multiplyScalar(B * A), i.hemi[v] = X, v++;
      }
    }
    w > 0 && (e.isWebGL2 || a.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : a.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g;
    const O = i.hash;
    (O.directionalLength !== p || O.pointLength !== f || O.spotLength !== _ || O.rectAreaLength !== w || O.hemiLength !== v || O.numDirectionalShadows !== M || O.numPointShadows !== S || O.numSpotShadows !== L || O.numSpotMaps !== P) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = w, i.point.length = f, i.hemi.length = v, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = L, i.spotShadowMap.length = L, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = L + P - x, i.spotLightMap.length = P, i.numSpotLightShadowsWithMaps = x, O.directionalLength = p, O.pointLength = f, O.spotLength = _, O.rectAreaLength = w, O.hemiLength = v, O.numDirectionalShadows = M, O.numPointShadows = S, O.numSpotShadows = L, O.numSpotMaps = P, i.version = Ep++);
  }
  function c(h, u) {
    let d = 0, m = 0, g = 0, p = 0, f = 0;
    const _ = u.matrixWorldInverse;
    for (let w = 0, v = h.length; w < v; w++) {
      const M = h[w];
      if (M.isDirectionalLight) {
        const S = i.directional[d];
        S.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(_), d++;
      } else if (M.isSpotLight) {
        const S = i.spot[g];
        S.position.setFromMatrixPosition(M.matrixWorld), S.position.applyMatrix4(_), S.direction.setFromMatrixPosition(M.matrixWorld), s.setFromMatrixPosition(M.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(_), g++;
      } else if (M.isRectAreaLight) {
        const S = i.rectArea[p];
        S.position.setFromMatrixPosition(M.matrixWorld), S.position.applyMatrix4(_), o.identity(), r.copy(M.matrixWorld), r.premultiply(_), o.extractRotation(r), S.halfWidth.set(M.width * 0.5, 0, 0), S.halfHeight.set(0, M.height * 0.5, 0), S.halfWidth.applyMatrix4(o), S.halfHeight.applyMatrix4(o), p++;
      } else if (M.isPointLight) {
        const S = i.point[m];
        S.position.setFromMatrixPosition(M.matrixWorld), S.position.applyMatrix4(_), m++;
      } else if (M.isHemisphereLight) {
        const S = i.hemi[f];
        S.direction.setFromMatrixPosition(M.matrixWorld), S.direction.transformDirection(_), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function sa(a, e) {
  const t = new Cp(a, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function r(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: r,
    pushShadow: o
  };
}
function Lp(a, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, r = 0) {
    const o = t.get(s);
    let l;
    return o === void 0 ? (l = new sa(a, e), t.set(s, [l])) : r >= o.length ? (l = new sa(a, e), o.push(l)) : l = o[r], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Rp extends Ht {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ac, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Pp extends Ht {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new C(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Dp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ip = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Np(a, e, t) {
  let n = new Ur();
  const i = new _e(), s = new _e(), r = new We(), o = new Rp({ depthPacking: Cc }), l = new Pp(), c = {}, h = t.maxTextureSize, u = { 0: bt, 1: dn, 2: Ss }, d = new pn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new _e() },
      radius: { value: 4 }
    },
    vertexShader: Dp,
    fragmentShader: Ip
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new St();
  g.setAttribute(
    "position",
    new yt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new at(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Xa, this.render = function(M, S, L) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || M.length === 0) return;
    const P = a.getRenderTarget(), x = a.getActiveCubeFace(), A = a.getActiveMipmapLevel(), O = a.state;
    O.setBlending(un), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    for (let q = 0, Z = M.length; q < Z; q++) {
      const F = M[q], N = F.shadow;
      if (N === void 0) {
        console.warn("THREE.WebGLShadowMap:", F, "has no shadow.");
        continue;
      }
      if (N.autoUpdate === !1 && N.needsUpdate === !1) continue;
      i.copy(N.mapSize);
      const B = N.getFrameExtents();
      if (i.multiply(B), s.copy(N.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / B.x), i.x = s.x * B.x, N.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / B.y), i.y = s.y * B.y, N.mapSize.y = s.y)), N.map === null) {
        const J = this.type !== Pi ? { minFilter: ot, magFilter: ot } : {};
        N.map = new On(i.x, i.y, J), N.map.texture.name = F.name + ".shadowMap", N.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(N.map), a.clear();
      const K = N.getViewportCount();
      for (let J = 0; J < K; J++) {
        const X = N.getViewport(J);
        r.set(
          s.x * X.x,
          s.y * X.y,
          s.x * X.z,
          s.y * X.w
        ), O.viewport(r), N.updateMatrices(F, J), n = N.getFrustum(), v(S, L, N.camera, F, this.type);
      }
      N.isPointLightShadow !== !0 && this.type === Pi && _(N, L), N.needsUpdate = !1;
    }
    f.needsUpdate = !1, a.setRenderTarget(P, x, A);
  };
  function _(M, S) {
    const L = e.update(p);
    d.defines.VSM_SAMPLES !== M.blurSamples && (d.defines.VSM_SAMPLES = M.blurSamples, m.defines.VSM_SAMPLES = M.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), M.mapPass === null && (M.mapPass = new On(i.x, i.y)), d.uniforms.shadow_pass.value = M.map.texture, d.uniforms.resolution.value = M.mapSize, d.uniforms.radius.value = M.radius, a.setRenderTarget(M.mapPass), a.clear(), a.renderBufferDirect(S, null, L, d, p, null), m.uniforms.shadow_pass.value = M.mapPass.texture, m.uniforms.resolution.value = M.mapSize, m.uniforms.radius.value = M.radius, a.setRenderTarget(M.map), a.clear(), a.renderBufferDirect(S, null, L, m, p, null);
  }
  function w(M, S, L, P, x, A) {
    let O = null;
    const q = L.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (q !== void 0)
      O = q;
    else if (O = L.isPointLight === !0 ? l : o, a.localClippingEnabled && S.clipShadows === !0 && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0 || S.displacementMap && S.displacementScale !== 0 || S.alphaMap && S.alphaTest > 0 || S.map && S.alphaTest > 0) {
      const Z = O.uuid, F = S.uuid;
      let N = c[Z];
      N === void 0 && (N = {}, c[Z] = N);
      let B = N[F];
      B === void 0 && (B = O.clone(), N[F] = B), O = B;
    }
    return O.visible = S.visible, O.wireframe = S.wireframe, A === Pi ? O.side = S.shadowSide !== null ? S.shadowSide : S.side : O.side = S.shadowSide !== null ? S.shadowSide : u[S.side], O.alphaMap = S.alphaMap, O.alphaTest = S.alphaTest, O.map = S.map, O.clipShadows = S.clipShadows, O.clippingPlanes = S.clippingPlanes, O.clipIntersection = S.clipIntersection, O.displacementMap = S.displacementMap, O.displacementScale = S.displacementScale, O.displacementBias = S.displacementBias, O.wireframeLinewidth = S.wireframeLinewidth, O.linewidth = S.linewidth, L.isPointLight === !0 && O.isMeshDistanceMaterial === !0 && (O.referencePosition.setFromMatrixPosition(L.matrixWorld), O.nearDistance = P, O.farDistance = x), O;
  }
  function v(M, S, L, P, x) {
    if (M.visible === !1) return;
    if (M.layers.test(S.layers) && (M.isMesh || M.isLine || M.isPoints) && (M.castShadow || M.receiveShadow && x === Pi) && (!M.frustumCulled || n.intersectsObject(M))) {
      M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, M.matrixWorld);
      const q = e.update(M), Z = M.material;
      if (Array.isArray(Z)) {
        const F = q.groups;
        for (let N = 0, B = F.length; N < B; N++) {
          const K = F[N], J = Z[K.materialIndex];
          if (J && J.visible) {
            const X = w(M, J, P, L.near, L.far, x);
            a.renderBufferDirect(L, null, q, X, M, K);
          }
        }
      } else if (Z.visible) {
        const F = w(M, Z, P, L.near, L.far, x);
        a.renderBufferDirect(L, null, q, F, M, null);
      }
    }
    const O = M.children;
    for (let q = 0, Z = O.length; q < Z; q++)
      v(O[q], S, L, P, x);
  }
}
function Op(a, e, t) {
  const n = t.isWebGL2;
  function i() {
    let R = !1;
    const V = new We();
    let $ = null;
    const ce = new We(0, 0, 0, 0);
    return {
      setMask: function(me) {
        $ !== me && !R && (a.colorMask(me, me, me, me), $ = me);
      },
      setLocked: function(me) {
        R = me;
      },
      setClear: function(me, ze, it, ht, mn) {
        mn === !0 && (me *= ht, ze *= ht, it *= ht), V.set(me, ze, it, ht), ce.equals(V) === !1 && (a.clearColor(me, ze, it, ht), ce.copy(V));
      },
      reset: function() {
        R = !1, $ = null, ce.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let R = !1, V = null, $ = null, ce = null;
    return {
      setTest: function(me) {
        me ? Ce(2929) : de(2929);
      },
      setMask: function(me) {
        V !== me && !R && (a.depthMask(me), V = me);
      },
      setFunc: function(me) {
        if ($ !== me) {
          switch (me) {
            case Zl:
              a.depthFunc(512);
              break;
            case $l:
              a.depthFunc(519);
              break;
            case Jl:
              a.depthFunc(513);
              break;
            case yr:
              a.depthFunc(515);
              break;
            case Ql:
              a.depthFunc(514);
              break;
            case ec:
              a.depthFunc(518);
              break;
            case tc:
              a.depthFunc(516);
              break;
            case nc:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          $ = me;
        }
      },
      setLocked: function(me) {
        R = me;
      },
      setClear: function(me) {
        ce !== me && (a.clearDepth(me), ce = me);
      },
      reset: function() {
        R = !1, V = null, $ = null, ce = null;
      }
    };
  }
  function r() {
    let R = !1, V = null, $ = null, ce = null, me = null, ze = null, it = null, ht = null, mn = null;
    return {
      setTest: function(je) {
        R || (je ? Ce(2960) : de(2960));
      },
      setMask: function(je) {
        V !== je && !R && (a.stencilMask(je), V = je);
      },
      setFunc: function(je, jt, Rt) {
        ($ !== je || ce !== jt || me !== Rt) && (a.stencilFunc(je, jt, Rt), $ = je, ce = jt, me = Rt);
      },
      setOp: function(je, jt, Rt) {
        (ze !== je || it !== jt || ht !== Rt) && (a.stencilOp(je, jt, Rt), ze = je, it = jt, ht = Rt);
      },
      setLocked: function(je) {
        R = je;
      },
      setClear: function(je) {
        mn !== je && (a.clearStencil(je), mn = je);
      },
      reset: function() {
        R = !1, V = null, $ = null, ce = null, me = null, ze = null, it = null, ht = null, mn = null;
      }
    };
  }
  const o = new i(), l = new s(), c = new r(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, w = null, v = null, M = null, S = null, L = null, P = null, x = null, A = !1, O = null, q = null, Z = null, F = null, N = null;
  const B = a.getParameter(35661);
  let K = !1, J = 0;
  const X = a.getParameter(7938);
  X.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(X)[1]), K = J >= 1) : X.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), K = J >= 2);
  let ee = null, Y = {};
  const H = a.getParameter(3088), z = a.getParameter(2978), se = new We().fromArray(H), te = new We().fromArray(z);
  function re(R, V, $) {
    const ce = new Uint8Array(4), me = a.createTexture();
    a.bindTexture(R, me), a.texParameteri(R, 10241, 9728), a.texParameteri(R, 10240, 9728);
    for (let ze = 0; ze < $; ze++)
      a.texImage2D(V + ze, 0, 6408, 1, 1, 0, 6408, 5121, ce);
    return me;
  }
  const W = {};
  W[3553] = re(3553, 3553, 1), W[34067] = re(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ce(2929), l.setFunc(yr), Je(!1), pt(Kr), Ce(2884), nt(un);
  function Ce(R) {
    d[R] !== !0 && (a.enable(R), d[R] = !0);
  }
  function de(R) {
    d[R] !== !1 && (a.disable(R), d[R] = !1);
  }
  function xe(R, V) {
    return m[R] !== V ? (a.bindFramebuffer(R, V), m[R] = V, n && (R === 36009 && (m[36160] = V), R === 36160 && (m[36009] = V)), !0) : !1;
  }
  function ue(R, V) {
    let $ = p, ce = !1;
    if (R)
      if ($ = g.get(V), $ === void 0 && ($ = [], g.set(V, $)), R.isWebGLMultipleRenderTargets) {
        const me = R.texture;
        if ($.length !== me.length || $[0] !== 36064) {
          for (let ze = 0, it = me.length; ze < it; ze++)
            $[ze] = 36064 + ze;
          $.length = me.length, ce = !0;
        }
      } else
        $[0] !== 36064 && ($[0] = 36064, ce = !0);
    else
      $[0] !== 1029 && ($[0] = 1029, ce = !0);
    ce && (t.isWebGL2 ? a.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function Fe(R) {
    return f !== R ? (a.useProgram(R), f = R, !0) : !1;
  }
  const Se = {
    [ti]: 32774,
    [kl]: 32778,
    [Bl]: 32779
  };
  if (n)
    Se[Jr] = 32775, Se[Qr] = 32776;
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && (Se[Jr] = R.MIN_EXT, Se[Qr] = R.MAX_EXT);
  }
  const ve = {
    [Vl]: 0,
    [Gl]: 1,
    [Hl]: 768,
    [qa]: 770,
    [Kl]: 776,
    [ql]: 774,
    [jl]: 772,
    [Wl]: 769,
    [Ya]: 771,
    [Yl]: 775,
    [Xl]: 773
  };
  function nt(R, V, $, ce, me, ze, it, ht) {
    if (R === un) {
      _ === !0 && (de(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Ce(3042), _ = !0), R !== zl) {
      if (R !== w || ht !== A) {
        if ((v !== ti || L !== ti) && (a.blendEquation(32774), v = ti, L = ti), ht)
          switch (R) {
            case ii:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case vr:
              a.blendFunc(1, 1);
              break;
            case Zr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case $r:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case ii:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case vr:
              a.blendFunc(770, 1);
              break;
            case Zr:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case $r:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        M = null, S = null, P = null, x = null, w = R, A = ht;
      }
      return;
    }
    me = me || V, ze = ze || $, it = it || ce, (V !== v || me !== L) && (a.blendEquationSeparate(Se[V], Se[me]), v = V, L = me), ($ !== M || ce !== S || ze !== P || it !== x) && (a.blendFuncSeparate(ve[$], ve[ce], ve[ze], ve[it]), M = $, S = ce, P = ze, x = it), w = R, A = !1;
  }
  function $e(R, V) {
    R.side === Ss ? de(2884) : Ce(2884);
    let $ = R.side === bt;
    V && ($ = !$), Je($), R.blending === ii && R.transparent === !1 ? nt(un) : nt(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.premultipliedAlpha), l.setFunc(R.depthFunc), l.setTest(R.depthTest), l.setMask(R.depthWrite), o.setMask(R.colorWrite);
    const ce = R.stencilWrite;
    c.setTest(ce), ce && (c.setMask(R.stencilWriteMask), c.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), c.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), ke(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? Ce(32926) : de(32926);
  }
  function Je(R) {
    O !== R && (R ? a.frontFace(2304) : a.frontFace(2305), O = R);
  }
  function pt(R) {
    R !== Ol ? (Ce(2884), R !== q && (R === Kr ? a.cullFace(1029) : R === Fl ? a.cullFace(1028) : a.cullFace(1032))) : de(2884), q = R;
  }
  function qe(R) {
    R !== Z && (K && a.lineWidth(R), Z = R);
  }
  function ke(R, V, $) {
    R ? (Ce(32823), (F !== V || N !== $) && (a.polygonOffset(V, $), F = V, N = $)) : de(32823);
  }
  function Lt(R) {
    R ? Ce(3089) : de(3089);
  }
  function Mt(R) {
    R === void 0 && (R = 33984 + B - 1), ee !== R && (a.activeTexture(R), ee = R);
  }
  function T(R, V, $) {
    $ === void 0 && (ee === null ? $ = 33984 + B - 1 : $ = ee);
    let ce = Y[$];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, Y[$] = ce), (ce.type !== R || ce.texture !== V) && (ee !== $ && (a.activeTexture($), ee = $), a.bindTexture(R, V || W[R]), ce.type = R, ce.texture = V);
  }
  function y() {
    const R = Y[ee];
    R !== void 0 && R.type !== void 0 && (a.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function k() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Q() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ne() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function oe() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ye() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function E() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function D() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function le() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function he() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ae() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function pe(R) {
    se.equals(R) === !1 && (a.scissor(R.x, R.y, R.z, R.w), se.copy(R));
  }
  function fe(R) {
    te.equals(R) === !1 && (a.viewport(R.x, R.y, R.z, R.w), te.copy(R));
  }
  function Le(R, V) {
    let $ = u.get(V);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), u.set(V, $));
    let ce = $.get(R);
    ce === void 0 && (ce = a.getUniformBlockIndex(V, R.name), $.set(R, ce));
  }
  function Re(R, V) {
    const ce = u.get(V).get(R);
    h.get(V) !== ce && (a.uniformBlockBinding(V, ce, R.__bindingPointIndex), h.set(V, ce));
  }
  function Ge() {
    a.disable(3042), a.disable(2884), a.disable(2929), a.disable(32823), a.disable(3089), a.disable(2960), a.disable(32926), a.blendEquation(32774), a.blendFunc(1, 0), a.blendFuncSeparate(1, 0, 1, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(513), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(519, 0, 4294967295), a.stencilOp(7680, 7680, 7680), a.clearStencil(0), a.cullFace(1029), a.frontFace(2305), a.polygonOffset(0, 0), a.activeTexture(33984), a.bindFramebuffer(36160, null), n === !0 && (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), d = {}, ee = null, Y = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, w = null, v = null, M = null, S = null, L = null, P = null, x = null, A = !1, O = null, q = null, Z = null, F = null, N = null, se.set(0, 0, a.canvas.width, a.canvas.height), te.set(0, 0, a.canvas.width, a.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: Ce,
    disable: de,
    bindFramebuffer: xe,
    drawBuffers: ue,
    useProgram: Fe,
    setBlending: nt,
    setMaterial: $e,
    setFlipSided: Je,
    setCullFace: pt,
    setLineWidth: qe,
    setPolygonOffset: ke,
    setScissorTest: Lt,
    activeTexture: Mt,
    bindTexture: T,
    unbindTexture: y,
    compressedTexImage2D: k,
    compressedTexImage3D: Q,
    texImage2D: he,
    texImage3D: ae,
    updateUBOMapping: Le,
    uniformBlockBinding: Re,
    texStorage2D: D,
    texStorage3D: le,
    texSubImage2D: ne,
    texSubImage3D: oe,
    compressedTexSubImage2D: ye,
    compressedTexSubImage3D: E,
    scissor: pe,
    viewport: fe,
    reset: Ge
  };
}
function Fp(a, e, t, n, i, s, r) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, h = i.maxTextureSize, u = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function w(T, y) {
    return _ ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, y)
    ) : ki("canvas");
  }
  function v(T, y, k, Q) {
    let ne = 1;
    if ((T.width > Q || T.height > Q) && (ne = Q / Math.max(T.width, T.height)), ne < 1 || y === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const oe = y ? bs : Math.floor, ye = oe(ne * T.width), E = oe(ne * T.height);
        p === void 0 && (p = w(ye, E));
        const D = k ? w(ye, E) : p;
        return D.width = ye, D.height = E, D.getContext("2d").drawImage(T, 0, 0, ye, E), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + ye + "x" + E + ")."), D;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function M(T) {
    return Er(T.width) && Er(T.height);
  }
  function S(T) {
    return o ? !1 : T.wrapS !== It || T.wrapT !== It || T.minFilter !== ot && T.minFilter !== dt;
  }
  function L(T, y) {
    return T.generateMipmaps && y && T.minFilter !== ot && T.minFilter !== dt;
  }
  function P(T) {
    a.generateMipmap(T);
  }
  function x(T, y, k, Q, ne = !1) {
    if (o === !1) return y;
    if (T !== null) {
      if (a[T] !== void 0) return a[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let oe = y;
    return y === 6403 && (k === 5126 && (oe = 33326), k === 5131 && (oe = 33325), k === 5121 && (oe = 33321)), y === 33319 && (k === 5126 && (oe = 33328), k === 5131 && (oe = 33327), k === 5121 && (oe = 33323)), y === 6408 && (k === 5126 && (oe = 34836), k === 5131 && (oe = 34842), k === 5121 && (oe = Q === Ue && ne === !1 ? 35907 : 32856), k === 32819 && (oe = 32854), k === 32820 && (oe = 32855)), (oe === 33325 || oe === 33326 || oe === 33327 || oe === 33328 || oe === 34842 || oe === 34836) && e.get("EXT_color_buffer_float"), oe;
  }
  function A(T, y, k) {
    return L(T, k) === !0 || T.isFramebufferTexture && T.minFilter !== ot && T.minFilter !== dt ? Math.log2(Math.max(y.width, y.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? y.mipmaps.length : 1;
  }
  function O(T) {
    return T === ot || T === Sr || T === xs ? 9728 : 9729;
  }
  function q(T) {
    const y = T.target;
    y.removeEventListener("dispose", q), F(y), y.isVideoTexture && g.delete(y);
  }
  function Z(T) {
    const y = T.target;
    y.removeEventListener("dispose", Z), B(y);
  }
  function F(T) {
    const y = n.get(T);
    if (y.__webglInit === void 0) return;
    const k = T.source, Q = f.get(k);
    if (Q) {
      const ne = Q[y.__cacheKey];
      ne.usedTimes--, ne.usedTimes === 0 && N(T), Object.keys(Q).length === 0 && f.delete(k);
    }
    n.remove(T);
  }
  function N(T) {
    const y = n.get(T);
    a.deleteTexture(y.__webglTexture);
    const k = T.source, Q = f.get(k);
    delete Q[y.__cacheKey], r.memory.textures--;
  }
  function B(T) {
    const y = T.texture, k = n.get(T), Q = n.get(y);
    if (Q.__webglTexture !== void 0 && (a.deleteTexture(Q.__webglTexture), r.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let ne = 0; ne < 6; ne++)
        a.deleteFramebuffer(k.__webglFramebuffer[ne]), k.__webglDepthbuffer && a.deleteRenderbuffer(k.__webglDepthbuffer[ne]);
    else {
      if (a.deleteFramebuffer(k.__webglFramebuffer), k.__webglDepthbuffer && a.deleteRenderbuffer(k.__webglDepthbuffer), k.__webglMultisampledFramebuffer && a.deleteFramebuffer(k.__webglMultisampledFramebuffer), k.__webglColorRenderbuffer)
        for (let ne = 0; ne < k.__webglColorRenderbuffer.length; ne++)
          k.__webglColorRenderbuffer[ne] && a.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);
      k.__webglDepthRenderbuffer && a.deleteRenderbuffer(k.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let ne = 0, oe = y.length; ne < oe; ne++) {
        const ye = n.get(y[ne]);
        ye.__webglTexture && (a.deleteTexture(ye.__webglTexture), r.memory.textures--), n.remove(y[ne]);
      }
    n.remove(y), n.remove(T);
  }
  let K = 0;
  function J() {
    K = 0;
  }
  function X() {
    const T = K;
    return T >= l && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + l), K += 1, T;
  }
  function ee(T) {
    const y = [];
    return y.push(T.wrapS), y.push(T.wrapT), y.push(T.wrapR || 0), y.push(T.magFilter), y.push(T.minFilter), y.push(T.anisotropy), y.push(T.internalFormat), y.push(T.format), y.push(T.type), y.push(T.generateMipmaps), y.push(T.premultiplyAlpha), y.push(T.flipY), y.push(T.unpackAlignment), y.push(T.encoding), y.join();
  }
  function Y(T, y) {
    const k = n.get(T);
    if (T.isVideoTexture && Lt(T), T.isRenderTargetTexture === !1 && T.version > 0 && k.__version !== T.version) {
      const Q = T.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        de(k, T, y);
        return;
      }
    }
    t.bindTexture(3553, k.__webglTexture, 33984 + y);
  }
  function H(T, y) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      de(k, T, y);
      return;
    }
    t.bindTexture(35866, k.__webglTexture, 33984 + y);
  }
  function z(T, y) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      de(k, T, y);
      return;
    }
    t.bindTexture(32879, k.__webglTexture, 33984 + y);
  }
  function se(T, y) {
    const k = n.get(T);
    if (T.version > 0 && k.__version !== T.version) {
      xe(k, T, y);
      return;
    }
    t.bindTexture(34067, k.__webglTexture, 33984 + y);
  }
  const te = {
    [li]: 10497,
    [It]: 33071,
    [Ms]: 33648
  }, re = {
    [ot]: 9728,
    [Sr]: 9984,
    [xs]: 9986,
    [dt]: 9729,
    [$a]: 9985,
    [Dn]: 9987
  };
  function W(T, y, k) {
    if (k ? (a.texParameteri(T, 10242, te[y.wrapS]), a.texParameteri(T, 10243, te[y.wrapT]), (T === 32879 || T === 35866) && a.texParameteri(T, 32882, te[y.wrapR]), a.texParameteri(T, 10240, re[y.magFilter]), a.texParameteri(T, 10241, re[y.minFilter])) : (a.texParameteri(T, 10242, 33071), a.texParameteri(T, 10243, 33071), (T === 32879 || T === 35866) && a.texParameteri(T, 32882, 33071), (y.wrapS !== It || y.wrapT !== It) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(T, 10240, O(y.magFilter)), a.texParameteri(T, 10241, O(y.minFilter)), y.minFilter !== ot && y.minFilter !== dt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (y.magFilter === ot || y.minFilter !== xs && y.minFilter !== Dn || y.type === hn && e.has("OES_texture_float_linear") === !1 || o === !1 && y.type === Oi && e.has("OES_texture_half_float_linear") === !1) return;
      (y.anisotropy > 1 || n.get(y).__currentAnisotropy) && (a.texParameterf(T, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, i.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy);
    }
  }
  function Ce(T, y) {
    let k = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, y.addEventListener("dispose", q));
    const Q = y.source;
    let ne = f.get(Q);
    ne === void 0 && (ne = {}, f.set(Q, ne));
    const oe = ee(y);
    if (oe !== T.__cacheKey) {
      ne[oe] === void 0 && (ne[oe] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, r.memory.textures++, k = !0), ne[oe].usedTimes++;
      const ye = ne[T.__cacheKey];
      ye !== void 0 && (ne[T.__cacheKey].usedTimes--, ye.usedTimes === 0 && N(y)), T.__cacheKey = oe, T.__webglTexture = ne[oe].texture;
    }
    return k;
  }
  function de(T, y, k) {
    let Q = 3553;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (Q = 35866), y.isData3DTexture && (Q = 32879);
    const ne = Ce(T, y), oe = y.source;
    t.bindTexture(Q, T.__webglTexture, 33984 + k);
    const ye = n.get(oe);
    if (oe.version !== ye.__version || ne === !0) {
      t.activeTexture(33984 + k), a.pixelStorei(37440, y.flipY), a.pixelStorei(37441, y.premultiplyAlpha), a.pixelStorei(3317, y.unpackAlignment), a.pixelStorei(37443, 0);
      const E = S(y) && M(y.image) === !1;
      let D = v(y.image, E, !1, h);
      D = Mt(y, D);
      const le = M(D) || o, he = s.convert(y.format, y.encoding);
      let ae = s.convert(y.type), pe = x(y.internalFormat, he, ae, y.encoding, y.isVideoTexture);
      W(Q, y, le);
      let fe;
      const Le = y.mipmaps, Re = o && y.isVideoTexture !== !0, Ge = ye.__version === void 0 || ne === !0, R = A(y, D, le);
      if (y.isDepthTexture)
        pe = 6402, o ? y.type === hn ? pe = 36012 : y.type === An ? pe = 33190 : y.type === si ? pe = 35056 : pe = 33189 : y.type === hn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), y.format === Ln && pe === 6402 && y.type !== Ja && y.type !== An && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), y.type = An, ae = s.convert(y.type)), y.format === ci && pe === 6402 && (pe = 34041, y.type !== si && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), y.type = si, ae = s.convert(y.type))), Ge && (Re ? t.texStorage2D(3553, 1, pe, D.width, D.height) : t.texImage2D(3553, 0, pe, D.width, D.height, 0, he, ae, null));
      else if (y.isDataTexture)
        if (Le.length > 0 && le) {
          Re && Ge && t.texStorage2D(3553, R, pe, Le[0].width, Le[0].height);
          for (let V = 0, $ = Le.length; V < $; V++)
            fe = Le[V], Re ? t.texSubImage2D(3553, V, 0, 0, fe.width, fe.height, he, ae, fe.data) : t.texImage2D(3553, V, pe, fe.width, fe.height, 0, he, ae, fe.data);
          y.generateMipmaps = !1;
        } else
          Re ? (Ge && t.texStorage2D(3553, R, pe, D.width, D.height), t.texSubImage2D(3553, 0, 0, 0, D.width, D.height, he, ae, D.data)) : t.texImage2D(3553, 0, pe, D.width, D.height, 0, he, ae, D.data);
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          Re && Ge && t.texStorage3D(35866, R, pe, Le[0].width, Le[0].height, D.depth);
          for (let V = 0, $ = Le.length; V < $; V++)
            fe = Le[V], y.format !== Nt ? he !== null ? Re ? t.compressedTexSubImage3D(35866, V, 0, 0, 0, fe.width, fe.height, D.depth, he, fe.data, 0, 0) : t.compressedTexImage3D(35866, V, pe, fe.width, fe.height, D.depth, 0, fe.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re ? t.texSubImage3D(35866, V, 0, 0, 0, fe.width, fe.height, D.depth, he, ae, fe.data) : t.texImage3D(35866, V, pe, fe.width, fe.height, D.depth, 0, he, ae, fe.data);
        } else {
          Re && Ge && t.texStorage2D(3553, R, pe, Le[0].width, Le[0].height);
          for (let V = 0, $ = Le.length; V < $; V++)
            fe = Le[V], y.format !== Nt ? he !== null ? Re ? t.compressedTexSubImage2D(3553, V, 0, 0, fe.width, fe.height, he, fe.data) : t.compressedTexImage2D(3553, V, pe, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re ? t.texSubImage2D(3553, V, 0, 0, fe.width, fe.height, he, ae, fe.data) : t.texImage2D(3553, V, pe, fe.width, fe.height, 0, he, ae, fe.data);
        }
      else if (y.isDataArrayTexture)
        Re ? (Ge && t.texStorage3D(35866, R, pe, D.width, D.height, D.depth), t.texSubImage3D(35866, 0, 0, 0, 0, D.width, D.height, D.depth, he, ae, D.data)) : t.texImage3D(35866, 0, pe, D.width, D.height, D.depth, 0, he, ae, D.data);
      else if (y.isData3DTexture)
        Re ? (Ge && t.texStorage3D(32879, R, pe, D.width, D.height, D.depth), t.texSubImage3D(32879, 0, 0, 0, 0, D.width, D.height, D.depth, he, ae, D.data)) : t.texImage3D(32879, 0, pe, D.width, D.height, D.depth, 0, he, ae, D.data);
      else if (y.isFramebufferTexture) {
        if (Ge)
          if (Re)
            t.texStorage2D(3553, R, pe, D.width, D.height);
          else {
            let V = D.width, $ = D.height;
            for (let ce = 0; ce < R; ce++)
              t.texImage2D(3553, ce, pe, V, $, 0, he, ae, null), V >>= 1, $ >>= 1;
          }
      } else if (Le.length > 0 && le) {
        Re && Ge && t.texStorage2D(3553, R, pe, Le[0].width, Le[0].height);
        for (let V = 0, $ = Le.length; V < $; V++)
          fe = Le[V], Re ? t.texSubImage2D(3553, V, 0, 0, he, ae, fe) : t.texImage2D(3553, V, pe, he, ae, fe);
        y.generateMipmaps = !1;
      } else
        Re ? (Ge && t.texStorage2D(3553, R, pe, D.width, D.height), t.texSubImage2D(3553, 0, 0, 0, he, ae, D)) : t.texImage2D(3553, 0, pe, he, ae, D);
      L(y, le) && P(Q), ye.__version = oe.version, y.onUpdate && y.onUpdate(y);
    }
    T.__version = y.version;
  }
  function xe(T, y, k) {
    if (y.image.length !== 6) return;
    const Q = Ce(T, y), ne = y.source;
    t.bindTexture(34067, T.__webglTexture, 33984 + k);
    const oe = n.get(ne);
    if (ne.version !== oe.__version || Q === !0) {
      t.activeTexture(33984 + k), a.pixelStorei(37440, y.flipY), a.pixelStorei(37441, y.premultiplyAlpha), a.pixelStorei(3317, y.unpackAlignment), a.pixelStorei(37443, 0);
      const ye = y.isCompressedTexture || y.image[0].isCompressedTexture, E = y.image[0] && y.image[0].isDataTexture, D = [];
      for (let V = 0; V < 6; V++)
        !ye && !E ? D[V] = v(y.image[V], !1, !0, c) : D[V] = E ? y.image[V].image : y.image[V], D[V] = Mt(y, D[V]);
      const le = D[0], he = M(le) || o, ae = s.convert(y.format, y.encoding), pe = s.convert(y.type), fe = x(y.internalFormat, ae, pe, y.encoding), Le = o && y.isVideoTexture !== !0, Re = oe.__version === void 0 || Q === !0;
      let Ge = A(y, le, he);
      W(34067, y, he);
      let R;
      if (ye) {
        Le && Re && t.texStorage2D(34067, Ge, fe, le.width, le.height);
        for (let V = 0; V < 6; V++) {
          R = D[V].mipmaps;
          for (let $ = 0; $ < R.length; $++) {
            const ce = R[$];
            y.format !== Nt ? ae !== null ? Le ? t.compressedTexSubImage2D(34069 + V, $, 0, 0, ce.width, ce.height, ae, ce.data) : t.compressedTexImage2D(34069 + V, $, fe, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? t.texSubImage2D(34069 + V, $, 0, 0, ce.width, ce.height, ae, pe, ce.data) : t.texImage2D(34069 + V, $, fe, ce.width, ce.height, 0, ae, pe, ce.data);
          }
        }
      } else {
        R = y.mipmaps, Le && Re && (R.length > 0 && Ge++, t.texStorage2D(34067, Ge, fe, D[0].width, D[0].height));
        for (let V = 0; V < 6; V++)
          if (E) {
            Le ? t.texSubImage2D(34069 + V, 0, 0, 0, D[V].width, D[V].height, ae, pe, D[V].data) : t.texImage2D(34069 + V, 0, fe, D[V].width, D[V].height, 0, ae, pe, D[V].data);
            for (let $ = 0; $ < R.length; $++) {
              const me = R[$].image[V].image;
              Le ? t.texSubImage2D(34069 + V, $ + 1, 0, 0, me.width, me.height, ae, pe, me.data) : t.texImage2D(34069 + V, $ + 1, fe, me.width, me.height, 0, ae, pe, me.data);
            }
          } else {
            Le ? t.texSubImage2D(34069 + V, 0, 0, 0, ae, pe, D[V]) : t.texImage2D(34069 + V, 0, fe, ae, pe, D[V]);
            for (let $ = 0; $ < R.length; $++) {
              const ce = R[$];
              Le ? t.texSubImage2D(34069 + V, $ + 1, 0, 0, ae, pe, ce.image[V]) : t.texImage2D(34069 + V, $ + 1, fe, ae, pe, ce.image[V]);
            }
          }
      }
      L(y, he) && P(34067), oe.__version = ne.version, y.onUpdate && y.onUpdate(y);
    }
    T.__version = y.version;
  }
  function ue(T, y, k, Q, ne) {
    const oe = s.convert(k.format, k.encoding), ye = s.convert(k.type), E = x(k.internalFormat, oe, ye, k.encoding);
    n.get(y).__hasExternalTextures || (ne === 32879 || ne === 35866 ? t.texImage3D(ne, 0, E, y.width, y.height, y.depth, 0, oe, ye, null) : t.texImage2D(ne, 0, E, y.width, y.height, 0, oe, ye, null)), t.bindFramebuffer(36160, T), ke(y) ? d.framebufferTexture2DMultisampleEXT(36160, Q, ne, n.get(k).__webglTexture, 0, qe(y)) : (ne === 3553 || ne >= 34069 && ne <= 34074) && a.framebufferTexture2D(36160, Q, ne, n.get(k).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Fe(T, y, k) {
    if (a.bindRenderbuffer(36161, T), y.depthBuffer && !y.stencilBuffer) {
      let Q = 33189;
      if (k || ke(y)) {
        const ne = y.depthTexture;
        ne && ne.isDepthTexture && (ne.type === hn ? Q = 36012 : ne.type === An && (Q = 33190));
        const oe = qe(y);
        ke(y) ? d.renderbufferStorageMultisampleEXT(36161, oe, Q, y.width, y.height) : a.renderbufferStorageMultisample(36161, oe, Q, y.width, y.height);
      } else
        a.renderbufferStorage(36161, Q, y.width, y.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, T);
    } else if (y.depthBuffer && y.stencilBuffer) {
      const Q = qe(y);
      k && ke(y) === !1 ? a.renderbufferStorageMultisample(36161, Q, 35056, y.width, y.height) : ke(y) ? d.renderbufferStorageMultisampleEXT(36161, Q, 35056, y.width, y.height) : a.renderbufferStorage(36161, 34041, y.width, y.height), a.framebufferRenderbuffer(36160, 33306, 36161, T);
    } else {
      const Q = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
      for (let ne = 0; ne < Q.length; ne++) {
        const oe = Q[ne], ye = s.convert(oe.format, oe.encoding), E = s.convert(oe.type), D = x(oe.internalFormat, ye, E, oe.encoding), le = qe(y);
        k && ke(y) === !1 ? a.renderbufferStorageMultisample(36161, le, D, y.width, y.height) : ke(y) ? d.renderbufferStorageMultisampleEXT(36161, le, D, y.width, y.height) : a.renderbufferStorage(36161, D, y.width, y.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function Se(T, y) {
    if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, T), !(y.depthTexture && y.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), Y(y.depthTexture, 0);
    const Q = n.get(y.depthTexture).__webglTexture, ne = qe(y);
    if (y.depthTexture.format === Ln)
      ke(y) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, ne) : a.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (y.depthTexture.format === ci)
      ke(y) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, ne) : a.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ve(T) {
    const y = n.get(T), k = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !y.__autoAllocateDepthBuffer) {
      if (k) throw new Error("target.depthTexture not supported in Cube render targets");
      Se(y.__webglFramebuffer, T);
    } else if (k) {
      y.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, y.__webglFramebuffer[Q]), y.__webglDepthbuffer[Q] = a.createRenderbuffer(), Fe(y.__webglDepthbuffer[Q], T, !1);
    } else
      t.bindFramebuffer(36160, y.__webglFramebuffer), y.__webglDepthbuffer = a.createRenderbuffer(), Fe(y.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(36160, null);
  }
  function nt(T, y, k) {
    const Q = n.get(T);
    y !== void 0 && ue(Q.__webglFramebuffer, T, T.texture, 36064, 3553), k !== void 0 && ve(T);
  }
  function $e(T) {
    const y = T.texture, k = n.get(T), Q = n.get(y);
    T.addEventListener("dispose", Z), T.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = a.createTexture()), Q.__version = y.version, r.memory.textures++);
    const ne = T.isWebGLCubeRenderTarget === !0, oe = T.isWebGLMultipleRenderTargets === !0, ye = M(T) || o;
    if (ne) {
      k.__webglFramebuffer = [];
      for (let E = 0; E < 6; E++)
        k.__webglFramebuffer[E] = a.createFramebuffer();
    } else {
      if (k.__webglFramebuffer = a.createFramebuffer(), oe)
        if (i.drawBuffers) {
          const E = T.texture;
          for (let D = 0, le = E.length; D < le; D++) {
            const he = n.get(E[D]);
            he.__webglTexture === void 0 && (he.__webglTexture = a.createTexture(), r.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && T.samples > 0 && ke(T) === !1) {
        const E = oe ? y : [y];
        k.__webglMultisampledFramebuffer = a.createFramebuffer(), k.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, k.__webglMultisampledFramebuffer);
        for (let D = 0; D < E.length; D++) {
          const le = E[D];
          k.__webglColorRenderbuffer[D] = a.createRenderbuffer(), a.bindRenderbuffer(36161, k.__webglColorRenderbuffer[D]);
          const he = s.convert(le.format, le.encoding), ae = s.convert(le.type), pe = x(le.internalFormat, he, ae, le.encoding, T.isXRRenderTarget === !0), fe = qe(T);
          a.renderbufferStorageMultisample(36161, fe, pe, T.width, T.height), a.framebufferRenderbuffer(36160, 36064 + D, 36161, k.__webglColorRenderbuffer[D]);
        }
        a.bindRenderbuffer(36161, null), T.depthBuffer && (k.__webglDepthRenderbuffer = a.createRenderbuffer(), Fe(k.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ne) {
      t.bindTexture(34067, Q.__webglTexture), W(34067, y, ye);
      for (let E = 0; E < 6; E++)
        ue(k.__webglFramebuffer[E], T, y, 36064, 34069 + E);
      L(y, ye) && P(34067), t.unbindTexture();
    } else if (oe) {
      const E = T.texture;
      for (let D = 0, le = E.length; D < le; D++) {
        const he = E[D], ae = n.get(he);
        t.bindTexture(3553, ae.__webglTexture), W(3553, he, ye), ue(k.__webglFramebuffer, T, he, 36064 + D, 3553), L(he, ye) && P(3553);
      }
      t.unbindTexture();
    } else {
      let E = 3553;
      (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (o ? E = T.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(E, Q.__webglTexture), W(E, y, ye), ue(k.__webglFramebuffer, T, y, 36064, E), L(y, ye) && P(E), t.unbindTexture();
    }
    T.depthBuffer && ve(T);
  }
  function Je(T) {
    const y = M(T) || o, k = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let Q = 0, ne = k.length; Q < ne; Q++) {
      const oe = k[Q];
      if (L(oe, y)) {
        const ye = T.isWebGLCubeRenderTarget ? 34067 : 3553, E = n.get(oe).__webglTexture;
        t.bindTexture(ye, E), P(ye), t.unbindTexture();
      }
    }
  }
  function pt(T) {
    if (o && T.samples > 0 && ke(T) === !1) {
      const y = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], k = T.width, Q = T.height;
      let ne = 16384;
      const oe = [], ye = T.stencilBuffer ? 33306 : 36096, E = n.get(T), D = T.isWebGLMultipleRenderTargets === !0;
      if (D)
        for (let le = 0; le < y.length; le++)
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + le, 36161, null), t.bindFramebuffer(36160, E.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, E.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, E.__webglFramebuffer);
      for (let le = 0; le < y.length; le++) {
        oe.push(36064 + le), T.depthBuffer && oe.push(ye);
        const he = E.__ignoreDepthValues !== void 0 ? E.__ignoreDepthValues : !1;
        if (he === !1 && (T.depthBuffer && (ne |= 256), T.stencilBuffer && (ne |= 1024)), D && a.framebufferRenderbuffer(36008, 36064, 36161, E.__webglColorRenderbuffer[le]), he === !0 && (a.invalidateFramebuffer(36008, [ye]), a.invalidateFramebuffer(36009, [ye])), D) {
          const ae = n.get(y[le]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, ae, 0);
        }
        a.blitFramebuffer(0, 0, k, Q, 0, 0, k, Q, ne, 9728), m && a.invalidateFramebuffer(36008, oe);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), D)
        for (let le = 0; le < y.length; le++) {
          t.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + le, 36161, E.__webglColorRenderbuffer[le]);
          const he = n.get(y[le]).__webglTexture;
          t.bindFramebuffer(36160, E.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + le, 3553, he, 0);
        }
      t.bindFramebuffer(36009, E.__webglMultisampledFramebuffer);
    }
  }
  function qe(T) {
    return Math.min(u, T.samples);
  }
  function ke(T) {
    const y = n.get(T);
    return o && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1;
  }
  function Lt(T) {
    const y = r.render.frame;
    g.get(T) !== y && (g.set(T, y), T.update());
  }
  function Mt(T, y) {
    const k = T.encoding, Q = T.format, ne = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || T.format === Tr || k !== Nn && (k === Ue ? o === !1 ? e.has("EXT_sRGB") === !0 && Q === Nt ? (T.format = Tr, T.minFilter = dt, T.generateMipmaps = !1) : y = sl.sRGBToLinear(y) : (Q !== Nt || ne !== In) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", k)), y;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = J, this.setTexture2D = Y, this.setTexture2DArray = H, this.setTexture3D = z, this.setTextureCube = se, this.rebindTextures = nt, this.setupRenderTarget = $e, this.updateRenderTargetMipmap = Je, this.updateMultisampleRenderTarget = pt, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = ke;
}
function Up(a, e, t) {
  const n = t.isWebGL2;
  function i(s, r = null) {
    let o;
    if (s === In) return 5121;
    if (s === fc) return 32819;
    if (s === pc) return 32820;
    if (s === hc) return 5120;
    if (s === uc) return 5122;
    if (s === Ja) return 5123;
    if (s === dc) return 5124;
    if (s === An) return 5125;
    if (s === hn) return 5126;
    if (s === Oi)
      return n ? 5131 : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === mc) return 6406;
    if (s === Nt) return 6408;
    if (s === _c) return 6409;
    if (s === xc) return 6410;
    if (s === Ln) return 6402;
    if (s === ci) return 34041;
    if (s === gc)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === Tr)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === vc) return 6403;
    if (s === yc) return 36244;
    if (s === Mc) return 33319;
    if (s === bc) return 33320;
    if (s === Sc) return 36249;
    if (s === Us || s === zs || s === ks || s === Bs)
      if (r === Ue)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === Us) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === zs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === ks) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === Bs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === Us) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === zs) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === ks) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === Bs) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === eo || s === to || s === no || s === io)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === eo) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === to) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === no) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === io) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === wc)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === so || s === ro)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === so) return r === Ue ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === ro) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === oo || s === ao || s === lo || s === co || s === ho || s === uo || s === fo || s === po || s === mo || s === go || s === _o || s === xo || s === vo || s === yo)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === oo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === ao) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === lo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === co) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === ho) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === uo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === fo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === po) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === mo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === go) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === _o) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === xo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === vo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === yo) return r === Ue ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Mo)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === Mo) return r === Ue ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === si ? n ? 34042 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : a[s] !== void 0 ? a[s] : null;
  }
  return { convert: i };
}
class zp extends vt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Cn extends Ve {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const kp = { type: "move" };
class dr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Cn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Cn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Cn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, r = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        r = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n), _ = this._getHandJoint(c, p);
          f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = f.radius), _.visible = f !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(kp)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = r !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Cn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Bp extends ct {
  constructor(e, t, n, i, s, r, o, l, c, h) {
    if (h = h !== void 0 ? h : Ln, h !== Ln && h !== ci)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Ln && (n = An), n === void 0 && h === ci && (n = si), super(null, i, s, r, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : ot, this.minFilter = l !== void 0 ? l : ot, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Vp extends Un {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, r = null, o = "local-floor", l = null, c = null, h = null, u = null, d = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const _ = [], w = [], v = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), S = new vt();
    S.layers.enable(1), S.viewport = new We();
    const L = new vt();
    L.layers.enable(2), L.viewport = new We();
    const P = [S, L], x = new zp();
    x.layers.enable(1), x.layers.enable(2);
    let A = null, O = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(H) {
      let z = _[H];
      return z === void 0 && (z = new dr(), _[H] = z), z.getTargetRaySpace();
    }, this.getControllerGrip = function(H) {
      let z = _[H];
      return z === void 0 && (z = new dr(), _[H] = z), z.getGripSpace();
    }, this.getHand = function(H) {
      let z = _[H];
      return z === void 0 && (z = new dr(), _[H] = z), z.getHandSpace();
    };
    function q(H) {
      const z = w.indexOf(H.inputSource);
      if (z === -1)
        return;
      const se = _[z];
      se !== void 0 && se.dispatchEvent({ type: H.type, data: H.inputSource });
    }
    function Z() {
      i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", Z), i.removeEventListener("inputsourceschange", F);
      for (let H = 0; H < _.length; H++) {
        const z = w[H];
        z !== null && (w[H] = null, _[H].disconnect(z));
      }
      A = null, O = null, e.setRenderTarget(p), d = null, u = null, h = null, i = null, f = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(H) {
      s = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(H) {
      o = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || r;
    }, this.setReferenceSpace = function(H) {
      l = H;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(H) {
      if (i = H, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", Z), i.addEventListener("inputsourceschange", F), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const z = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, z), i.updateRenderState({ baseLayer: d }), f = new On(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: Nt,
              type: In,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let z = null, se = null, te = null;
          g.depth && (te = g.stencil ? 35056 : 33190, z = g.stencil ? ci : Ln, se = g.stencil ? si : An);
          const re = {
            colorFormat: 32856,
            depthFormat: te,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), u = h.createProjectionLayer(re), i.updateRenderState({ layers: [u] }), f = new On(
            u.textureWidth,
            u.textureHeight,
            {
              format: Nt,
              type: In,
              depthTexture: new Bp(u.textureWidth, u.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, z),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const W = e.properties.get(f);
          W.__ignoreDepthValues = u.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), l = null, r = await i.requestReferenceSpace(o), Y.setContext(i), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function F(H) {
      for (let z = 0; z < H.removed.length; z++) {
        const se = H.removed[z], te = w.indexOf(se);
        te >= 0 && (w[te] = null, _[te].disconnect(se));
      }
      for (let z = 0; z < H.added.length; z++) {
        const se = H.added[z];
        let te = w.indexOf(se);
        if (te === -1) {
          for (let W = 0; W < _.length; W++)
            if (W >= w.length) {
              w.push(se), te = W;
              break;
            } else if (w[W] === null) {
              w[W] = se, te = W;
              break;
            }
          if (te === -1) break;
        }
        const re = _[te];
        re && re.connect(se);
      }
    }
    const N = new C(), B = new C();
    function K(H, z, se) {
      N.setFromMatrixPosition(z.matrixWorld), B.setFromMatrixPosition(se.matrixWorld);
      const te = N.distanceTo(B), re = z.projectionMatrix.elements, W = se.projectionMatrix.elements, Ce = re[14] / (re[10] - 1), de = re[14] / (re[10] + 1), xe = (re[9] + 1) / re[5], ue = (re[9] - 1) / re[5], Fe = (re[8] - 1) / re[0], Se = (W[8] + 1) / W[0], ve = Ce * Fe, nt = Ce * Se, $e = te / (-Fe + Se), Je = $e * -Fe;
      z.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(Je), H.translateZ($e), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const pt = Ce + $e, qe = de + $e, ke = ve - Je, Lt = nt + (te - Je), Mt = xe * de / qe * pt, T = ue * de / qe * pt;
      H.projectionMatrix.makePerspective(ke, Lt, Mt, T, pt, qe);
    }
    function J(H, z) {
      z === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(z.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function(H) {
      if (i === null) return;
      x.near = L.near = S.near = H.near, x.far = L.far = S.far = H.far, (A !== x.near || O !== x.far) && (i.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), A = x.near, O = x.far);
      const z = H.parent, se = x.cameras;
      J(x, z);
      for (let re = 0; re < se.length; re++)
        J(se[re], z);
      x.matrixWorld.decompose(x.position, x.quaternion, x.scale), H.matrix.copy(x.matrix), H.matrix.decompose(H.position, H.quaternion, H.scale);
      const te = H.children;
      for (let re = 0, W = te.length; re < W; re++)
        te[re].updateMatrixWorld(!0);
      se.length === 2 ? K(x, S, L) : x.projectionMatrix.copy(S.projectionMatrix);
    }, this.getCamera = function() {
      return x;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(H) {
      u !== null && (u.fixedFoveation = H), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = H);
    }, this.getPlanes = function() {
      return v;
    };
    let X = null;
    function ee(H, z) {
      if (c = z.getViewerPose(l || r), m = z, c !== null) {
        const se = c.views;
        d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
        let te = !1;
        se.length !== x.cameras.length && (x.cameras.length = 0, te = !0);
        for (let re = 0; re < se.length; re++) {
          const W = se[re];
          let Ce = null;
          if (d !== null)
            Ce = d.getViewport(W);
          else {
            const xe = h.getViewSubImage(u, W);
            Ce = xe.viewport, re === 0 && (e.setRenderTargetTextures(
              f,
              xe.colorTexture,
              u.ignoreDepthValues ? void 0 : xe.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let de = P[re];
          de === void 0 && (de = new vt(), de.layers.enable(re), de.viewport = new We(), P[re] = de), de.matrix.fromArray(W.transform.matrix), de.projectionMatrix.fromArray(W.projectionMatrix), de.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), re === 0 && x.matrix.copy(de.matrix), te === !0 && x.cameras.push(de);
        }
      }
      for (let se = 0; se < _.length; se++) {
        const te = w[se], re = _[se];
        te !== null && re !== void 0 && re.update(te, z, l || r);
      }
      if (X && X(H, z), z.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: z.detectedPlanes });
        let se = null;
        for (const te of v)
          z.detectedPlanes.has(te) || (se === null && (se = []), se.push(te));
        if (se !== null)
          for (const te of se)
            v.delete(te), M.delete(te), n.dispatchEvent({ type: "planeremoved", data: te });
        for (const te of z.detectedPlanes)
          if (!v.has(te))
            v.add(te), M.set(te, z.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: te });
          else {
            const re = M.get(te);
            te.lastChangedTime > re && (M.set(te, te.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: te }));
          }
      }
      m = null;
    }
    const Y = new ul();
    Y.setAnimationLoop(ee), this.setAnimationLoop = function(H) {
      X = H;
    }, this.dispose = function() {
    };
  }
}
function Gp(a, e) {
  function t(p, f) {
    f.color.getRGB(p.fogColor.value, cl(a)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, _, w, v) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), h(p, f)) : f.isMeshPhongMaterial ? (i(p, f), c(p, f)) : f.isMeshStandardMaterial ? (i(p, f), u(p, f), f.isMeshPhysicalMaterial && d(p, f, v)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && r(p, f)) : f.isPointsMaterial ? o(p, f, _, w) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === bt && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === bt && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const _ = e.get(f).envMap;
    if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const M = a.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * M;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let w;
    f.map ? w = f.map : f.specularMap ? w = f.specularMap : f.displacementMap ? w = f.displacementMap : f.normalMap ? w = f.normalMap : f.bumpMap ? w = f.bumpMap : f.roughnessMap ? w = f.roughnessMap : f.metalnessMap ? w = f.metalnessMap : f.alphaMap ? w = f.alphaMap : f.emissiveMap ? w = f.emissiveMap : f.clearcoatMap ? w = f.clearcoatMap : f.clearcoatNormalMap ? w = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? w = f.clearcoatRoughnessMap : f.iridescenceMap ? w = f.iridescenceMap : f.iridescenceThicknessMap ? w = f.iridescenceThicknessMap : f.specularIntensityMap ? w = f.specularIntensityMap : f.specularColorMap ? w = f.specularColorMap : f.transmissionMap ? w = f.transmissionMap : f.thicknessMap ? w = f.thicknessMap : f.sheenColorMap ? w = f.sheenColorMap : f.sheenRoughnessMap && (w = f.sheenRoughnessMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uvTransform.value.copy(w.matrix));
    let v;
    f.aoMap ? v = f.aoMap : f.lightMap && (v = f.lightMap), v !== void 0 && (v.isWebGLRenderTarget && (v = v.texture), v.matrixAutoUpdate === !0 && v.updateMatrix(), p.uv2Transform.value.copy(v.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function r(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function o(p, f, _, w) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * _, p.scale.value = w * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let v;
    f.map ? v = f.map : f.alphaMap && (v = f.alphaMap), v !== void 0 && (v.matrixAutoUpdate === !0 && v.updateMatrix(), p.uvTransform.value.copy(v.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let _;
    f.map ? _ = f.map : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function c(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function u(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function d(p, f, _) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === bt && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition), p.nearDistance.value = f.nearDistance, p.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Hp(a, e, t, n) {
  let i = {}, s = {}, r = [];
  const o = t.isWebGL2 ? a.getParameter(35375) : 0;
  function l(w, v) {
    const M = v.program;
    n.uniformBlockBinding(w, M);
  }
  function c(w, v) {
    let M = i[w.id];
    M === void 0 && (g(w), M = h(w), i[w.id] = M, w.addEventListener("dispose", f));
    const S = v.program;
    n.updateUBOMapping(w, S);
    const L = e.render.frame;
    s[w.id] !== L && (d(w), s[w.id] = L);
  }
  function h(w) {
    const v = u();
    w.__bindingPointIndex = v;
    const M = a.createBuffer(), S = w.__size, L = w.usage;
    return a.bindBuffer(35345, M), a.bufferData(35345, S, L), a.bindBuffer(35345, null), a.bindBufferBase(35345, v, M), M;
  }
  function u() {
    for (let w = 0; w < o; w++)
      if (r.indexOf(w) === -1)
        return r.push(w), w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(w) {
    const v = i[w.id], M = w.uniforms, S = w.__cache;
    a.bindBuffer(35345, v);
    for (let L = 0, P = M.length; L < P; L++) {
      const x = M[L];
      if (m(x, L, S) === !0) {
        const A = x.__offset, O = Array.isArray(x.value) ? x.value : [x.value];
        let q = 0;
        for (let Z = 0; Z < O.length; Z++) {
          const F = O[Z], N = p(F);
          typeof F == "number" ? (x.__data[0] = F, a.bufferSubData(35345, A + q, x.__data)) : F.isMatrix3 ? (x.__data[0] = F.elements[0], x.__data[1] = F.elements[1], x.__data[2] = F.elements[2], x.__data[3] = F.elements[0], x.__data[4] = F.elements[3], x.__data[5] = F.elements[4], x.__data[6] = F.elements[5], x.__data[7] = F.elements[0], x.__data[8] = F.elements[6], x.__data[9] = F.elements[7], x.__data[10] = F.elements[8], x.__data[11] = F.elements[0]) : (F.toArray(x.__data, q), q += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        a.bufferSubData(35345, A, x.__data);
      }
    }
    a.bindBuffer(35345, null);
  }
  function m(w, v, M) {
    const S = w.value;
    if (M[v] === void 0) {
      if (typeof S == "number")
        M[v] = S;
      else {
        const L = Array.isArray(S) ? S : [S], P = [];
        for (let x = 0; x < L.length; x++)
          P.push(L[x].clone());
        M[v] = P;
      }
      return !0;
    } else if (typeof S == "number") {
      if (M[v] !== S)
        return M[v] = S, !0;
    } else {
      const L = Array.isArray(M[v]) ? M[v] : [M[v]], P = Array.isArray(S) ? S : [S];
      for (let x = 0; x < L.length; x++) {
        const A = L[x];
        if (A.equals(P[x]) === !1)
          return A.copy(P[x]), !0;
      }
    }
    return !1;
  }
  function g(w) {
    const v = w.uniforms;
    let M = 0;
    const S = 16;
    let L = 0;
    for (let P = 0, x = v.length; P < x; P++) {
      const A = v[P], O = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, q = Array.isArray(A.value) ? A.value : [A.value];
      for (let Z = 0, F = q.length; Z < F; Z++) {
        const N = q[Z], B = p(N);
        O.boundary += B.boundary, O.storage += B.storage;
      }
      if (A.__data = new Float32Array(O.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = M, P > 0) {
        L = M % S;
        const Z = S - L;
        L !== 0 && Z - O.boundary < 0 && (M += S - L, A.__offset = M);
      }
      M += O.storage;
    }
    return L = M % S, L > 0 && (M += S - L), w.__size = M, w.__cache = {}, this;
  }
  function p(w) {
    const v = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof w == "number" ? (v.boundary = 4, v.storage = 4) : w.isVector2 ? (v.boundary = 8, v.storage = 8) : w.isVector3 || w.isColor ? (v.boundary = 16, v.storage = 12) : w.isVector4 ? (v.boundary = 16, v.storage = 16) : w.isMatrix3 ? (v.boundary = 48, v.storage = 48) : w.isMatrix4 ? (v.boundary = 64, v.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), v;
  }
  function f(w) {
    const v = w.target;
    v.removeEventListener("dispose", f);
    const M = r.indexOf(v.__bindingPointIndex);
    r.splice(M, 1), a.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function _() {
    for (const w in i)
      a.deleteBuffer(i[w]);
    r = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: _
  };
}
function Wp() {
  const a = ki("canvas");
  return a.style.display = "block", a;
}
function gl(a = {}) {
  this.isWebGLRenderer = !0;
  const e = a.canvas !== void 0 ? a.canvas : Wp(), t = a.context !== void 0 ? a.context : null, n = a.depth !== void 0 ? a.depth : !0, i = a.stencil !== void 0 ? a.stencil : !0, s = a.antialias !== void 0 ? a.antialias : !1, r = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0, o = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1, l = a.powerPreference !== void 0 ? a.powerPreference : "default", c = a.failIfMajorPerformanceCaveat !== void 0 ? a.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = a.alpha !== void 0 ? a.alpha : !1;
  let u = null, d = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Nn, this.physicallyCorrectLights = !1, this.toneMapping = tn, this.toneMappingExposure = 1;
  const p = this;
  let f = !1, _ = 0, w = 0, v = null, M = -1, S = null;
  const L = new We(), P = new We();
  let x = null, A = e.width, O = e.height, q = 1, Z = null, F = null;
  const N = new We(0, 0, A, O), B = new We(0, 0, A, O);
  let K = !1;
  const J = new Ur();
  let X = !1, ee = !1, Y = null;
  const H = new be(), z = new _e(), se = new C(), te = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return v === null ? q : 1;
  }
  let W = t;
  function Ce(b, U) {
    for (let G = 0; G < b.length; G++) {
      const I = b[G], j = e.getContext(I, U);
      if (j !== null) return j;
    }
    return null;
  }
  try {
    const b = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: r,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ir}`), e.addEventListener("webglcontextlost", pe, !1), e.addEventListener("webglcontextrestored", fe, !1), e.addEventListener("webglcontextcreationerror", Le, !1), W === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && U.shift(), W = Ce(U, b), W === null)
        throw Ce(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    W.getShaderPrecisionFormat === void 0 && (W.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (b) {
    throw console.error("THREE.WebGLRenderer: " + b.message), b;
  }
  let de, xe, ue, Fe, Se, ve, nt, $e, Je, pt, qe, ke, Lt, Mt, T, y, k, Q, ne, oe, ye, E, D, le;
  function he() {
    de = new ef(W), xe = new Yd(W, de, a), de.init(xe), E = new Up(W, de, xe), ue = new Op(W, de, xe), Fe = new sf(), Se = new Mp(), ve = new Fp(W, de, ue, Se, xe, E, Fe), nt = new Zd(p), $e = new Qd(p), Je = new dh(W, xe), D = new Xd(W, de, Je, xe), pt = new tf(W, Je, Fe, D), qe = new lf(W, pt, Je, Fe), ne = new af(W, xe, ve), y = new Kd(Se), ke = new yp(p, nt, $e, de, xe, D, y), Lt = new Gp(p, Se), Mt = new Sp(), T = new Lp(de, xe), Q = new jd(p, nt, $e, ue, qe, h, r), k = new Np(p, qe, xe), le = new Hp(W, Fe, xe, ue), oe = new qd(W, de, Fe, xe), ye = new nf(W, de, Fe, xe), Fe.programs = ke.programs, p.capabilities = xe, p.extensions = de, p.properties = Se, p.renderLists = Mt, p.shadowMap = k, p.state = ue, p.info = Fe;
  }
  he();
  const ae = new Vp(p, W);
  this.xr = ae, this.getContext = function() {
    return W;
  }, this.getContextAttributes = function() {
    return W.getContextAttributes();
  }, this.forceContextLoss = function() {
    const b = de.get("WEBGL_lose_context");
    b && b.loseContext();
  }, this.forceContextRestore = function() {
    const b = de.get("WEBGL_lose_context");
    b && b.restoreContext();
  }, this.getPixelRatio = function() {
    return q;
  }, this.setPixelRatio = function(b) {
    b !== void 0 && (q = b, this.setSize(A, O, !1));
  }, this.getSize = function(b) {
    return b.set(A, O);
  }, this.setSize = function(b, U, G) {
    if (ae.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    A = b, O = U, e.width = Math.floor(b * q), e.height = Math.floor(U * q), G !== !1 && (e.style.width = b + "px", e.style.height = U + "px"), this.setViewport(0, 0, b, U);
  }, this.getDrawingBufferSize = function(b) {
    return b.set(A * q, O * q).floor();
  }, this.setDrawingBufferSize = function(b, U, G) {
    A = b, O = U, q = G, e.width = Math.floor(b * G), e.height = Math.floor(U * G), this.setViewport(0, 0, b, U);
  }, this.getCurrentViewport = function(b) {
    return b.copy(L);
  }, this.getViewport = function(b) {
    return b.copy(N);
  }, this.setViewport = function(b, U, G, I) {
    b.isVector4 ? N.set(b.x, b.y, b.z, b.w) : N.set(b, U, G, I), ue.viewport(L.copy(N).multiplyScalar(q).floor());
  }, this.getScissor = function(b) {
    return b.copy(B);
  }, this.setScissor = function(b, U, G, I) {
    b.isVector4 ? B.set(b.x, b.y, b.z, b.w) : B.set(b, U, G, I), ue.scissor(P.copy(B).multiplyScalar(q).floor());
  }, this.getScissorTest = function() {
    return K;
  }, this.setScissorTest = function(b) {
    ue.setScissorTest(K = b);
  }, this.setOpaqueSort = function(b) {
    Z = b;
  }, this.setTransparentSort = function(b) {
    F = b;
  }, this.getClearColor = function(b) {
    return b.copy(Q.getClearColor());
  }, this.setClearColor = function() {
    Q.setClearColor.apply(Q, arguments);
  }, this.getClearAlpha = function() {
    return Q.getClearAlpha();
  }, this.setClearAlpha = function() {
    Q.setClearAlpha.apply(Q, arguments);
  }, this.clear = function(b = !0, U = !0, G = !0) {
    let I = 0;
    b && (I |= 16384), U && (I |= 256), G && (I |= 1024), W.clear(I);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", pe, !1), e.removeEventListener("webglcontextrestored", fe, !1), e.removeEventListener("webglcontextcreationerror", Le, !1), Mt.dispose(), T.dispose(), Se.dispose(), nt.dispose(), $e.dispose(), qe.dispose(), D.dispose(), le.dispose(), ke.dispose(), ae.dispose(), ae.removeEventListener("sessionstart", ce), ae.removeEventListener("sessionend", me), Y && (Y.dispose(), Y = null), ze.stop();
  };
  function pe(b) {
    b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function fe() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const b = Fe.autoReset, U = k.enabled, G = k.autoUpdate, I = k.needsUpdate, j = k.type;
    he(), Fe.autoReset = b, k.enabled = U, k.autoUpdate = G, k.needsUpdate = I, k.type = j;
  }
  function Le(b) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", b.statusMessage);
  }
  function Re(b) {
    const U = b.target;
    U.removeEventListener("dispose", Re), Ge(U);
  }
  function Ge(b) {
    R(b), Se.remove(b);
  }
  function R(b) {
    const U = Se.get(b).programs;
    U !== void 0 && (U.forEach(function(G) {
      ke.releaseProgram(G);
    }), b.isShaderMaterial && ke.releaseShaderCache(b));
  }
  this.renderBufferDirect = function(b, U, G, I, j, ge) {
    U === null && (U = te);
    const Me = j.isMesh && j.matrixWorld.determinant() < 0, Ee = Pl(b, U, G, I, j);
    ue.setMaterial(I, Me);
    let Ae = G.index, Oe = 1;
    I.wireframe === !0 && (Ae = pt.getWireframeAttribute(G), Oe = 2);
    const Pe = G.drawRange, De = G.attributes.position;
    let Ye = Pe.start * Oe, wt = (Pe.start + Pe.count) * Oe;
    ge !== null && (Ye = Math.max(Ye, ge.start * Oe), wt = Math.min(wt, (ge.start + ge.count) * Oe)), Ae !== null ? (Ye = Math.max(Ye, 0), wt = Math.min(wt, Ae.count)) : De != null && (Ye = Math.max(Ye, 0), wt = Math.min(wt, De.count));
    const Xt = wt - Ye;
    if (Xt < 0 || Xt === 1 / 0) return;
    D.setup(j, I, Ee, G, Ae);
    let gn, Ke = oe;
    if (Ae !== null && (gn = Je.get(Ae), Ke = ye, Ke.setIndex(gn)), j.isMesh)
      I.wireframe === !0 ? (ue.setLineWidth(I.wireframeLinewidth * re()), Ke.setMode(1)) : Ke.setMode(4);
    else if (j.isLine) {
      let Ie = I.linewidth;
      Ie === void 0 && (Ie = 1), ue.setLineWidth(Ie * re()), j.isLineSegments ? Ke.setMode(1) : j.isLineLoop ? Ke.setMode(2) : Ke.setMode(3);
    } else j.isPoints ? Ke.setMode(0) : j.isSprite && Ke.setMode(4);
    if (j.isInstancedMesh)
      Ke.renderInstances(Ye, Xt, j.count);
    else if (G.isInstancedBufferGeometry) {
      const Ie = G._maxInstanceCount !== void 0 ? G._maxInstanceCount : 1 / 0, Is = Math.min(G.instanceCount, Ie);
      Ke.renderInstances(Ye, Xt, Is);
    } else
      Ke.render(Ye, Xt);
  }, this.compile = function(b, U) {
    function G(I, j, ge) {
      I.transparent === !0 && I.side === Xi ? (I.side = bt, I.needsUpdate = !0, Rt(I, j, ge), I.side = dn, I.needsUpdate = !0, Rt(I, j, ge), I.side = Xi) : Rt(I, j, ge);
    }
    d = T.get(b), d.init(), g.push(d), b.traverseVisible(function(I) {
      I.isLight && I.layers.test(U.layers) && (d.pushLight(I), I.castShadow && d.pushShadow(I));
    }), d.setupLights(p.physicallyCorrectLights), b.traverse(function(I) {
      const j = I.material;
      if (j)
        if (Array.isArray(j))
          for (let ge = 0; ge < j.length; ge++) {
            const Me = j[ge];
            G(Me, b, I);
          }
        else
          G(j, b, I);
    }), g.pop(), d = null;
  };
  let V = null;
  function $(b) {
    V && V(b);
  }
  function ce() {
    ze.stop();
  }
  function me() {
    ze.start();
  }
  const ze = new ul();
  ze.setAnimationLoop($), typeof self < "u" && ze.setContext(self), this.setAnimationLoop = function(b) {
    V = b, ae.setAnimationLoop(b), b === null ? ze.stop() : ze.start();
  }, ae.addEventListener("sessionstart", ce), ae.addEventListener("sessionend", me), this.render = function(b, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0) return;
    b.matrixWorldAutoUpdate === !0 && b.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), ae.enabled === !0 && ae.isPresenting === !0 && (ae.cameraAutoUpdate === !0 && ae.updateCamera(U), U = ae.getCamera()), b.isScene === !0 && b.onBeforeRender(p, b, U, v), d = T.get(b, g.length), d.init(), g.push(d), H.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), J.setFromProjectionMatrix(H), ee = this.localClippingEnabled, X = y.init(this.clippingPlanes, ee, U), u = Mt.get(b, m.length), u.init(), m.push(u), it(b, U, 0, p.sortObjects), u.finish(), p.sortObjects === !0 && u.sort(Z, F), X === !0 && y.beginShadows();
    const G = d.state.shadowsArray;
    if (k.render(G, b, U), X === !0 && y.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(u, b), d.setupLights(p.physicallyCorrectLights), U.isArrayCamera) {
      const I = U.cameras;
      for (let j = 0, ge = I.length; j < ge; j++) {
        const Me = I[j];
        ht(u, b, Me, Me.viewport);
      }
    } else
      ht(u, b, U);
    v !== null && (ve.updateMultisampleRenderTarget(v), ve.updateRenderTargetMipmap(v)), b.isScene === !0 && b.onAfterRender(p, b, U), D.resetDefaultState(), M = -1, S = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, m.pop(), m.length > 0 ? u = m[m.length - 1] : u = null;
  };
  function it(b, U, G, I) {
    if (b.visible === !1) return;
    if (b.layers.test(U.layers)) {
      if (b.isGroup)
        G = b.renderOrder;
      else if (b.isLOD)
        b.autoUpdate === !0 && b.update(U);
      else if (b.isLight)
        d.pushLight(b), b.castShadow && d.pushShadow(b);
      else if (b.isSprite) {
        if (!b.frustumCulled || J.intersectsSprite(b)) {
          I && se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);
          const Me = qe.update(b), Ee = b.material;
          Ee.visible && u.push(b, Me, Ee, G, se.z, null);
        }
      } else if ((b.isMesh || b.isLine || b.isPoints) && (b.isSkinnedMesh && b.skeleton.frame !== Fe.render.frame && (b.skeleton.update(), b.skeleton.frame = Fe.render.frame), !b.frustumCulled || J.intersectsObject(b))) {
        I && se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);
        const Me = qe.update(b), Ee = b.material;
        if (Array.isArray(Ee)) {
          const Ae = Me.groups;
          for (let Oe = 0, Pe = Ae.length; Oe < Pe; Oe++) {
            const De = Ae[Oe], Ye = Ee[De.materialIndex];
            Ye && Ye.visible && u.push(b, Me, Ye, G, se.z, De);
          }
        } else Ee.visible && u.push(b, Me, Ee, G, se.z, null);
      }
    }
    const ge = b.children;
    for (let Me = 0, Ee = ge.length; Me < Ee; Me++)
      it(ge[Me], U, G, I);
  }
  function ht(b, U, G, I) {
    const j = b.opaque, ge = b.transmissive, Me = b.transparent;
    d.setupLightsView(G), ge.length > 0 && mn(j, U, G), I && ue.viewport(L.copy(I)), j.length > 0 && je(j, U, G), ge.length > 0 && je(ge, U, G), Me.length > 0 && je(Me, U, G), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function mn(b, U, G) {
    const I = xe.isWebGL2;
    Y === null && (Y = new On(1, 1, {
      generateMipmaps: !0,
      type: de.has("EXT_color_buffer_half_float") ? Oi : In,
      minFilter: Dn,
      samples: I && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(z), I ? Y.setSize(z.x, z.y) : Y.setSize(bs(z.x), bs(z.y));
    const j = p.getRenderTarget();
    p.setRenderTarget(Y), p.clear();
    const ge = p.toneMapping;
    p.toneMapping = tn, je(b, U, G), p.toneMapping = ge, ve.updateMultisampleRenderTarget(Y), ve.updateRenderTargetMipmap(Y), p.setRenderTarget(j);
  }
  function je(b, U, G) {
    const I = U.isScene === !0 ? U.overrideMaterial : null;
    for (let j = 0, ge = b.length; j < ge; j++) {
      const Me = b[j], Ee = Me.object, Ae = Me.geometry, Oe = I === null ? Me.material : I, Pe = Me.group;
      Ee.layers.test(G.layers) && jt(Ee, U, G, Ae, Oe, Pe);
    }
  }
  function jt(b, U, G, I, j, ge) {
    b.onBeforeRender(p, U, G, I, j, ge), b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), j.onBeforeRender(p, U, G, I, b, ge), j.transparent === !0 && j.side === Xi ? (j.side = bt, j.needsUpdate = !0, p.renderBufferDirect(G, U, I, j, b, ge), j.side = dn, j.needsUpdate = !0, p.renderBufferDirect(G, U, I, j, b, ge), j.side = Xi) : p.renderBufferDirect(G, U, I, j, b, ge), b.onAfterRender(p, U, G, I, j, ge);
  }
  function Rt(b, U, G) {
    U.isScene !== !0 && (U = te);
    const I = Se.get(b), j = d.state.lights, ge = d.state.shadowsArray, Me = j.state.version, Ee = ke.getParameters(b, j.state, ge, U, G), Ae = ke.getProgramCacheKey(Ee);
    let Oe = I.programs;
    I.environment = b.isMeshStandardMaterial ? U.environment : null, I.fog = U.fog, I.envMap = (b.isMeshStandardMaterial ? $e : nt).get(b.envMap || I.environment), Oe === void 0 && (b.addEventListener("dispose", Re), Oe = /* @__PURE__ */ new Map(), I.programs = Oe);
    let Pe = Oe.get(Ae);
    if (Pe !== void 0) {
      if (I.currentProgram === Pe && I.lightsStateVersion === Me)
        return Xr(b, Ee), Pe;
    } else
      Ee.uniforms = ke.getUniforms(b), b.onBuild(G, Ee, p), b.onBeforeCompile(Ee, p), Pe = ke.acquireProgram(Ee, Ae), Oe.set(Ae, Pe), I.uniforms = Ee.uniforms;
    const De = I.uniforms;
    (!b.isShaderMaterial && !b.isRawShaderMaterial || b.clipping === !0) && (De.clippingPlanes = y.uniform), Xr(b, Ee), I.needsLights = Il(b), I.lightsStateVersion = Me, I.needsLights && (De.ambientLightColor.value = j.state.ambient, De.lightProbe.value = j.state.probe, De.directionalLights.value = j.state.directional, De.directionalLightShadows.value = j.state.directionalShadow, De.spotLights.value = j.state.spot, De.spotLightShadows.value = j.state.spotShadow, De.rectAreaLights.value = j.state.rectArea, De.ltc_1.value = j.state.rectAreaLTC1, De.ltc_2.value = j.state.rectAreaLTC2, De.pointLights.value = j.state.point, De.pointLightShadows.value = j.state.pointShadow, De.hemisphereLights.value = j.state.hemi, De.directionalShadowMap.value = j.state.directionalShadowMap, De.directionalShadowMatrix.value = j.state.directionalShadowMatrix, De.spotShadowMap.value = j.state.spotShadowMap, De.spotLightMatrix.value = j.state.spotLightMatrix, De.spotLightMap.value = j.state.spotLightMap, De.pointShadowMap.value = j.state.pointShadowMap, De.pointShadowMatrix.value = j.state.pointShadowMatrix);
    const Ye = Pe.getUniforms(), wt = ys.seqWithValue(Ye.seq, De);
    return I.currentProgram = Pe, I.uniformsList = wt, Pe;
  }
  function Xr(b, U) {
    const G = Se.get(b);
    G.outputEncoding = U.outputEncoding, G.instancing = U.instancing, G.skinning = U.skinning, G.morphTargets = U.morphTargets, G.morphNormals = U.morphNormals, G.morphColors = U.morphColors, G.morphTargetsCount = U.morphTargetsCount, G.numClippingPlanes = U.numClippingPlanes, G.numIntersection = U.numClipIntersection, G.vertexAlphas = U.vertexAlphas, G.vertexTangents = U.vertexTangents, G.toneMapping = U.toneMapping;
  }
  function Pl(b, U, G, I, j) {
    U.isScene !== !0 && (U = te), ve.resetTextureUnits();
    const ge = U.fog, Me = I.isMeshStandardMaterial ? U.environment : null, Ee = v === null ? p.outputEncoding : v.isXRRenderTarget === !0 ? v.texture.encoding : Nn, Ae = (I.isMeshStandardMaterial ? $e : nt).get(I.envMap || Me), Oe = I.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, Pe = !!I.normalMap && !!G.attributes.tangent, De = !!G.morphAttributes.position, Ye = !!G.morphAttributes.normal, wt = !!G.morphAttributes.color, Xt = I.toneMapped ? p.toneMapping : tn, gn = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, Ke = gn !== void 0 ? gn.length : 0, Ie = Se.get(I), Is = d.state.lights;
    if (X === !0 && (ee === !0 || b !== S)) {
      const Tt = b === S && I.id === M;
      y.setState(I, b, Tt);
    }
    let st = !1;
    I.version === Ie.__version ? (Ie.needsLights && Ie.lightsStateVersion !== Is.state.version || Ie.outputEncoding !== Ee || j.isInstancedMesh && Ie.instancing === !1 || !j.isInstancedMesh && Ie.instancing === !0 || j.isSkinnedMesh && Ie.skinning === !1 || !j.isSkinnedMesh && Ie.skinning === !0 || Ie.envMap !== Ae || I.fog === !0 && Ie.fog !== ge || Ie.numClippingPlanes !== void 0 && (Ie.numClippingPlanes !== y.numPlanes || Ie.numIntersection !== y.numIntersection) || Ie.vertexAlphas !== Oe || Ie.vertexTangents !== Pe || Ie.morphTargets !== De || Ie.morphNormals !== Ye || Ie.morphColors !== wt || Ie.toneMapping !== Xt || xe.isWebGL2 === !0 && Ie.morphTargetsCount !== Ke) && (st = !0) : (st = !0, Ie.__version = I.version);
    let _n = Ie.currentProgram;
    st === !0 && (_n = Rt(I, U, j));
    let qr = !1, vi = !1, Ns = !1;
    const mt = _n.getUniforms(), xn = Ie.uniforms;
    if (ue.useProgram(_n.program) && (qr = !0, vi = !0, Ns = !0), I.id !== M && (M = I.id, vi = !0), qr || S !== b) {
      if (mt.setValue(W, "projectionMatrix", b.projectionMatrix), xe.logarithmicDepthBuffer && mt.setValue(
        W,
        "logDepthBufFC",
        2 / (Math.log(b.far + 1) / Math.LN2)
      ), S !== b && (S = b, vi = !0, Ns = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
        const Tt = mt.map.cameraPosition;
        Tt !== void 0 && Tt.setValue(
          W,
          se.setFromMatrixPosition(b.matrixWorld)
        );
      }
      (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && mt.setValue(W, "isOrthographic", b.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || j.isSkinnedMesh) && mt.setValue(W, "viewMatrix", b.matrixWorldInverse);
    }
    if (j.isSkinnedMesh) {
      mt.setOptional(W, j, "bindMatrix"), mt.setOptional(W, j, "bindMatrixInverse");
      const Tt = j.skeleton;
      Tt && (xe.floatVertexTextures ? (Tt.boneTexture === null && Tt.computeBoneTexture(), mt.setValue(W, "boneTexture", Tt.boneTexture, ve), mt.setValue(W, "boneTextureSize", Tt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Os = G.morphAttributes;
    if ((Os.position !== void 0 || Os.normal !== void 0 || Os.color !== void 0 && xe.isWebGL2 === !0) && ne.update(j, G, I, _n), (vi || Ie.receiveShadow !== j.receiveShadow) && (Ie.receiveShadow = j.receiveShadow, mt.setValue(W, "receiveShadow", j.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (xn.envMap.value = Ae, xn.flipEnvMap.value = Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1), vi && (mt.setValue(W, "toneMappingExposure", p.toneMappingExposure), Ie.needsLights && Dl(xn, Ns), ge && I.fog === !0 && Lt.refreshFogUniforms(xn, ge), Lt.refreshMaterialUniforms(xn, I, q, O, Y), ys.upload(W, Ie.uniformsList, xn, ve)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (ys.upload(W, Ie.uniformsList, xn, ve), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && mt.setValue(W, "center", j.center), mt.setValue(W, "modelViewMatrix", j.modelViewMatrix), mt.setValue(W, "normalMatrix", j.normalMatrix), mt.setValue(W, "modelMatrix", j.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
      const Tt = I.uniformsGroups;
      for (let Fs = 0, Nl = Tt.length; Fs < Nl; Fs++)
        if (xe.isWebGL2) {
          const Yr = Tt[Fs];
          le.update(Yr, _n), le.bind(Yr, _n);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return _n;
  }
  function Dl(b, U) {
    b.ambientLightColor.needsUpdate = U, b.lightProbe.needsUpdate = U, b.directionalLights.needsUpdate = U, b.directionalLightShadows.needsUpdate = U, b.pointLights.needsUpdate = U, b.pointLightShadows.needsUpdate = U, b.spotLights.needsUpdate = U, b.spotLightShadows.needsUpdate = U, b.rectAreaLights.needsUpdate = U, b.hemisphereLights.needsUpdate = U;
  }
  function Il(b) {
    return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || b.isShaderMaterial && b.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return w;
  }, this.getRenderTarget = function() {
    return v;
  }, this.setRenderTargetTextures = function(b, U, G) {
    Se.get(b.texture).__webglTexture = U, Se.get(b.depthTexture).__webglTexture = G;
    const I = Se.get(b);
    I.__hasExternalTextures = !0, I.__hasExternalTextures && (I.__autoAllocateDepthBuffer = G === void 0, I.__autoAllocateDepthBuffer || de.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(b, U) {
    const G = Se.get(b);
    G.__webglFramebuffer = U, G.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(b, U = 0, G = 0) {
    v = b, _ = U, w = G;
    let I = !0, j = null, ge = !1, Me = !1;
    if (b) {
      const Ae = Se.get(b);
      Ae.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), I = !1) : Ae.__webglFramebuffer === void 0 ? ve.setupRenderTarget(b) : Ae.__hasExternalTextures && ve.rebindTextures(b, Se.get(b.texture).__webglTexture, Se.get(b.depthTexture).__webglTexture);
      const Oe = b.texture;
      (Oe.isData3DTexture || Oe.isDataArrayTexture || Oe.isCompressedArrayTexture) && (Me = !0);
      const Pe = Se.get(b).__webglFramebuffer;
      b.isWebGLCubeRenderTarget ? (j = Pe[U], ge = !0) : xe.isWebGL2 && b.samples > 0 && ve.useMultisampledRTT(b) === !1 ? j = Se.get(b).__webglMultisampledFramebuffer : j = Pe, L.copy(b.viewport), P.copy(b.scissor), x = b.scissorTest;
    } else
      L.copy(N).multiplyScalar(q).floor(), P.copy(B).multiplyScalar(q).floor(), x = K;
    if (ue.bindFramebuffer(36160, j) && xe.drawBuffers && I && ue.drawBuffers(b, j), ue.viewport(L), ue.scissor(P), ue.setScissorTest(x), ge) {
      const Ae = Se.get(b.texture);
      W.framebufferTexture2D(36160, 36064, 34069 + U, Ae.__webglTexture, G);
    } else if (Me) {
      const Ae = Se.get(b.texture), Oe = U || 0;
      W.framebufferTextureLayer(36160, 36064, Ae.__webglTexture, G || 0, Oe);
    }
    M = -1;
  }, this.readRenderTargetPixels = function(b, U, G, I, j, ge, Me) {
    if (!(b && b.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Ee = Se.get(b).__webglFramebuffer;
    if (b.isWebGLCubeRenderTarget && Me !== void 0 && (Ee = Ee[Me]), Ee) {
      ue.bindFramebuffer(36160, Ee);
      try {
        const Ae = b.texture, Oe = Ae.format, Pe = Ae.type;
        if (Oe !== Nt && E.convert(Oe) !== W.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const De = Pe === Oi && (de.has("EXT_color_buffer_half_float") || xe.isWebGL2 && de.has("EXT_color_buffer_float"));
        if (Pe !== In && E.convert(Pe) !== W.getParameter(35738) && // Edge and Chrome Mac < 52 (#9513)
        !(Pe === hn && (xe.isWebGL2 || de.has("OES_texture_float") || de.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !De) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        U >= 0 && U <= b.width - I && G >= 0 && G <= b.height - j && W.readPixels(U, G, I, j, E.convert(Oe), E.convert(Pe), ge);
      } finally {
        const Ae = v !== null ? Se.get(v).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Ae);
      }
    }
  }, this.copyFramebufferToTexture = function(b, U, G = 0) {
    const I = Math.pow(2, -G), j = Math.floor(U.image.width * I), ge = Math.floor(U.image.height * I);
    ve.setTexture2D(U, 0), W.copyTexSubImage2D(3553, G, 0, 0, b.x, b.y, j, ge), ue.unbindTexture();
  }, this.copyTextureToTexture = function(b, U, G, I = 0) {
    const j = U.image.width, ge = U.image.height, Me = E.convert(G.format), Ee = E.convert(G.type);
    ve.setTexture2D(G, 0), W.pixelStorei(37440, G.flipY), W.pixelStorei(37441, G.premultiplyAlpha), W.pixelStorei(3317, G.unpackAlignment), U.isDataTexture ? W.texSubImage2D(3553, I, b.x, b.y, j, ge, Me, Ee, U.image.data) : U.isCompressedTexture ? W.compressedTexSubImage2D(3553, I, b.x, b.y, U.mipmaps[0].width, U.mipmaps[0].height, Me, U.mipmaps[0].data) : W.texSubImage2D(3553, I, b.x, b.y, Me, Ee, U.image), I === 0 && G.generateMipmaps && W.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(b, U, G, I, j = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const ge = b.max.x - b.min.x + 1, Me = b.max.y - b.min.y + 1, Ee = b.max.z - b.min.z + 1, Ae = E.convert(I.format), Oe = E.convert(I.type);
    let Pe;
    if (I.isData3DTexture)
      ve.setTexture3D(I, 0), Pe = 32879;
    else if (I.isDataArrayTexture)
      ve.setTexture2DArray(I, 0), Pe = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    W.pixelStorei(37440, I.flipY), W.pixelStorei(37441, I.premultiplyAlpha), W.pixelStorei(3317, I.unpackAlignment);
    const De = W.getParameter(3314), Ye = W.getParameter(32878), wt = W.getParameter(3316), Xt = W.getParameter(3315), gn = W.getParameter(32877), Ke = G.isCompressedTexture ? G.mipmaps[0] : G.image;
    W.pixelStorei(3314, Ke.width), W.pixelStorei(32878, Ke.height), W.pixelStorei(3316, b.min.x), W.pixelStorei(3315, b.min.y), W.pixelStorei(32877, b.min.z), G.isDataTexture || G.isData3DTexture ? W.texSubImage3D(Pe, j, U.x, U.y, U.z, ge, Me, Ee, Ae, Oe, Ke.data) : G.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), W.compressedTexSubImage3D(Pe, j, U.x, U.y, U.z, ge, Me, Ee, Ae, Ke.data)) : W.texSubImage3D(Pe, j, U.x, U.y, U.z, ge, Me, Ee, Ae, Oe, Ke), W.pixelStorei(3314, De), W.pixelStorei(32878, Ye), W.pixelStorei(3316, wt), W.pixelStorei(3315, Xt), W.pixelStorei(32877, gn), j === 0 && I.generateMipmaps && W.generateMipmap(Pe), ue.unbindTexture();
  }, this.initTexture = function(b) {
    b.isCubeTexture ? ve.setTextureCube(b, 0) : b.isData3DTexture ? ve.setTexture3D(b, 0) : b.isDataArrayTexture || b.isCompressedArrayTexture ? ve.setTexture2DArray(b, 0) : ve.setTexture2D(b, 0), ue.unbindTexture();
  }, this.resetState = function() {
    _ = 0, w = 0, v = null, ue.reset(), D.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class jp extends gl {
}
jp.prototype.isWebGL1Renderer = !0;
class Xp extends Ve {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  // @deprecated
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class qp {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = wr, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = kt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = kt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = kt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const _t = /* @__PURE__ */ new C();
class Vr {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyMatrix4(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.applyNormalMatrix(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      _t.fromBufferAttribute(this, t), _t.transformDirection(e), this.setXYZ(t, _t.x, _t.y, _t.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = He(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = en(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = en(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = He(t, this.array), n = He(n, this.array), i = He(i, this.array), s = He(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new yt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Vr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const ra = /* @__PURE__ */ new C(), oa = /* @__PURE__ */ new We(), aa = /* @__PURE__ */ new We(), Yp = /* @__PURE__ */ new C(), la = /* @__PURE__ */ new be();
class Kp extends at {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new be(), this.bindMatrixInverse = new be();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new We(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    oa.fromBufferAttribute(i.attributes.skinIndex, e), aa.fromBufferAttribute(i.attributes.skinWeight, e), ra.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = aa.getComponent(s);
      if (r !== 0) {
        const o = oa.getComponent(s);
        la.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Yp.copy(ra).applyMatrix4(la), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class _l extends Ve {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Zp extends ct {
  constructor(e = null, t = 1, n = 1, i, s, r, o, l, c = ot, h = ot, u, d) {
    super(null, r, o, l, c, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const ca = /* @__PURE__ */ new be(), $p = /* @__PURE__ */ new be();
class Gr {
  constructor(e = [], t = []) {
    this.uuid = kt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new be());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new be();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s] ? e[s].matrixWorld : $p;
      ca.multiplyMatrices(o, t[s]), ca.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Gr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = tl(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Zp(t, e, e, Nt, hn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let r = t[s];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new _l()), this.bones.push(r), this.boneInverses.push(new be().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class ha extends yt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ua = /* @__PURE__ */ new be(), da = /* @__PURE__ */ new be(), us = [], Jp = /* @__PURE__ */ new be(), Ai = /* @__PURE__ */ new at();
class xl extends at {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ha(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Jp);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ai.geometry = this.geometry, Ai.material = this.material, Ai.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, ua), da.multiplyMatrices(n, ua), Ai.matrixWorld = da, Ai.raycast(e, us);
        for (let r = 0, o = us.length; r < o; r++) {
          const l = us[r];
          l.instanceId = s, l.object = this, t.push(l);
        }
        us.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ha(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class As extends Ht {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new we(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const fa = /* @__PURE__ */ new C(), pa = /* @__PURE__ */ new C(), ma = /* @__PURE__ */ new be(), fr = /* @__PURE__ */ new Ts(), ds = /* @__PURE__ */ new pi();
class Wi extends Ve {
  constructor(e = new St(), t = new As()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        fa.fromBufferAttribute(t, i - 1), pa.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += fa.distanceTo(pa);
      e.setAttribute("lineDistance", new lt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ds.copy(n.boundingSphere), ds.applyMatrix4(i), ds.radius += s, e.ray.intersectsSphere(ds) === !1) return;
    ma.copy(i).invert(), fr.copy(e.ray).applyMatrix4(ma);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new C(), h = new C(), u = new C(), d = new C(), m = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, r.start), w = Math.min(g.count, r.start + r.count);
      for (let v = _, M = w - 1; v < M; v += m) {
        const S = g.getX(v), L = g.getX(v + 1);
        if (c.fromBufferAttribute(f, S), h.fromBufferAttribute(f, L), fr.distanceSqToSegment(c, h, d, u) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(d);
        x < e.near || x > e.far || t.push({
          distance: x,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: v,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const _ = Math.max(0, r.start), w = Math.min(f.count, r.start + r.count);
      for (let v = _, M = w - 1; v < M; v += m) {
        if (c.fromBufferAttribute(f, v), h.fromBufferAttribute(f, v + 1), fr.distanceSqToSegment(c, h, d, u) > l) continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near || L > e.far || t.push({
          distance: L,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: v,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const ga = /* @__PURE__ */ new C(), _a = /* @__PURE__ */ new C();
class Qp extends Wi {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ga.fromBufferAttribute(t, i), _a.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ga.distanceTo(_a);
      e.setAttribute("lineDistance", new lt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class em extends Wi {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class vl extends Ht {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new we(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const xa = /* @__PURE__ */ new be(), Cr = /* @__PURE__ */ new Ts(), fs = /* @__PURE__ */ new pi(), ps = /* @__PURE__ */ new C();
class tm extends Ve {
  constructor(e = new St(), t = new vl()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), fs.copy(n.boundingSphere), fs.applyMatrix4(i), fs.radius += s, e.ray.intersectsSphere(fs) === !1) return;
    xa.copy(i).invert(), Cr.copy(e.ray).applyMatrix4(xa);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, r.start), m = Math.min(c.count, r.start + r.count);
      for (let g = d, p = m; g < p; g++) {
        const f = c.getX(g);
        ps.fromBufferAttribute(u, f), va(ps, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, r.start), m = Math.min(u.count, r.start + r.count);
      for (let g = d, p = m; g < p; g++)
        ps.fromBufferAttribute(u, g), va(ps, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function va(a, e, t, n, i, s, r) {
  const o = Cr.distanceSqToPoint(a);
  if (o < t) {
    const l = new C();
    Cr.closestPointToPoint(a, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: r
    });
  }
}
class Cs extends St {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, r = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: r
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], l = [], c = [], h = [];
    let u = e;
    const d = (t - e) / i, m = new C(), g = new _e();
    for (let p = 0; p <= i; p++) {
      for (let f = 0; f <= n; f++) {
        const _ = s + f / n * r;
        m.x = u * Math.cos(_), m.y = u * Math.sin(_), l.push(m.x, m.y, m.z), c.push(0, 0, 1), g.x = (m.x / t + 1) / 2, g.y = (m.y / t + 1) / 2, h.push(g.x, g.y);
      }
      u += d;
    }
    for (let p = 0; p < i; p++) {
      const f = p * (n + 1);
      for (let _ = 0; _ < n; _++) {
        const w = _ + f, v = w, M = w + n + 1, S = w + n + 2, L = w + 1;
        o.push(v, M, L), o.push(M, S, L);
      }
    }
    this.setIndex(o), this.setAttribute("position", new lt(l, 3)), this.setAttribute("normal", new lt(c, 3)), this.setAttribute("uv", new lt(h, 2));
  }
  static fromJSON(e) {
    return new Cs(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class Ls extends St {
  constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, r = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: r,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(r + o, Math.PI);
    let c = 0;
    const h = [], u = new C(), d = new C(), m = [], g = [], p = [], f = [];
    for (let _ = 0; _ <= n; _++) {
      const w = [], v = _ / n;
      let M = 0;
      _ == 0 && r == 0 ? M = 0.5 / t : _ == n && l == Math.PI && (M = -0.5 / t);
      for (let S = 0; S <= t; S++) {
        const L = S / t;
        u.x = -e * Math.cos(i + L * s) * Math.sin(r + v * o), u.y = e * Math.cos(r + v * o), u.z = e * Math.sin(i + L * s) * Math.sin(r + v * o), g.push(u.x, u.y, u.z), d.copy(u).normalize(), p.push(d.x, d.y, d.z), f.push(L + M, 1 - v), w.push(c++);
      }
      h.push(w);
    }
    for (let _ = 0; _ < n; _++)
      for (let w = 0; w < t; w++) {
        const v = h[_][w + 1], M = h[_][w], S = h[_ + 1][w], L = h[_ + 1][w + 1];
        (_ !== 0 || r > 0) && m.push(v, M, L), (_ !== n - 1 || l < Math.PI) && m.push(M, S, L);
      }
    this.setIndex(m), this.setAttribute("position", new lt(g, 3)), this.setAttribute("normal", new lt(p, 3)), this.setAttribute("uv", new lt(f, 2));
  }
  static fromJSON(e) {
    return new Ls(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Rs extends Ht {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new we(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new we(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = el, this.normalScale = new _e(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class zn extends Rs {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new _e(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ft(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new we(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new we(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new we(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function an(a, e, t) {
  return yl(a) ? new a.constructor(a.subarray(e, t !== void 0 ? t : a.length)) : a.slice(e, t);
}
function ms(a, e, t) {
  return !a || // let 'undefined' and 'null' pass
  !t && a.constructor === e ? a : typeof e.BYTES_PER_ELEMENT == "number" ? new e(a) : Array.prototype.slice.call(a);
}
function yl(a) {
  return ArrayBuffer.isView(a) && !(a instanceof DataView);
}
function nm(a) {
  function e(i, s) {
    return a[i] - a[s];
  }
  const t = a.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function ya(a, e, t) {
  const n = a.length, i = new a.constructor(n);
  for (let s = 0, r = 0; r !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[r++] = a[o + l];
  }
  return i;
}
function Ml(a, e, t, n) {
  let i = 1, s = a[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = a[i++];
  if (s === void 0) return;
  let r = s[n];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = a[i++];
      while (s !== void 0);
    else if (r.toArray !== void 0)
      do
        r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = a[i++];
      while (s !== void 0);
    else
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = a[i++];
      while (s !== void 0);
}
class ji {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let r;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break e;
            }
            r = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            r = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < r; ) {
          const o = n + r >>> 1;
          e < t[o] ? r = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let r = 0; r !== i; ++r)
      t[r] = n[s + r];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class im extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: bo,
      endingEnd: bo
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, r = e + 1, o = i[s], l = i[r];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case So:
          s = e, o = 2 * t - n;
          break;
        case wo:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case So:
          r = e, l = 2 * n - t;
          break;
        case wo:
          r = 1, l = n + i[1] - i[0];
          break;
        default:
          r = e - 1, l = t;
      }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = r * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), p = g * g, f = p * g, _ = -d * f + 2 * d * p - d * g, w = (1 + d) * f + (-1.5 - 2 * d) * p + (-0.5 + d) * g + 1, v = (-1 - m) * f + (1.5 + m) * p + 0.5 * g, M = m * f - m * p;
    for (let S = 0; S !== o; ++S)
      s[S] = _ * r[h + S] + w * r[c + S] + v * r[l + S] + M * r[u + S];
    return s;
  }
}
class sm extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      s[d] = r[c + d] * u + r[l + d] * h;
    return s;
  }
}
class rm extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Wt {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ms(t, this.TimeBufferType), this.values = ms(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ms(e.times, Array),
        values: ms(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new rm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new sm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new im(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Fi:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case hi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Vs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Fi;
      case this.InterpolantFactoryMethodLinear:
        return hi;
      case this.InterpolantFactoryMethodSmooth:
        return Vs;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, r = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; r !== -1 && n[r] > t; )
      --r;
    if (++r, s !== 0 || r !== i) {
      s >= r && (r = Math.max(r, 1), s = r - 1);
      const o = this.getValueSize();
      this.times = an(n, s, r), this.values = an(this.values, s * o, r * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let r = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (r !== null && r > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, r), e = !1;
        break;
      }
      r = l;
    }
    if (i !== void 0 && yl(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = an(this.times), t = an(this.values), n = this.getValueSize(), i = this.getInterpolation() === Vs, s = e.length - 1;
    let r = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const u = o * n, d = u - n, m = u + n;
          for (let g = 0; g !== n; ++g) {
            const p = t[u + g];
            if (p !== t[d + g] || p !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== r) {
          e[r] = e[o];
          const u = o * n, d = r * n;
          for (let m = 0; m !== n; ++m)
            t[d + m] = t[u + m];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let o = s * n, l = r * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++r;
    }
    return r !== e.length ? (this.times = an(e, 0, r), this.values = an(t, 0, r * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = an(this.times, 0), t = an(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Wt.prototype.TimeBufferType = Float32Array;
Wt.prototype.ValueBufferType = Float32Array;
Wt.prototype.DefaultInterpolation = hi;
class gi extends Wt {
}
gi.prototype.ValueTypeName = "bool";
gi.prototype.ValueBufferType = Array;
gi.prototype.DefaultInterpolation = Fi;
gi.prototype.InterpolantFactoryMethodLinear = void 0;
gi.prototype.InterpolantFactoryMethodSmooth = void 0;
class bl extends Wt {
}
bl.prototype.ValueTypeName = "color";
class Bi extends Wt {
}
Bi.prototype.ValueTypeName = "number";
class om extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4)
      Bt.slerpFlat(s, 0, r, c - o, r, c, l);
    return s;
  }
}
class Fn extends Wt {
  InterpolantFactoryMethodLinear(e) {
    return new om(this.times, this.values, this.getValueSize(), e);
  }
}
Fn.prototype.ValueTypeName = "quaternion";
Fn.prototype.DefaultInterpolation = hi;
Fn.prototype.InterpolantFactoryMethodSmooth = void 0;
class _i extends Wt {
}
_i.prototype.ValueTypeName = "string";
_i.prototype.ValueBufferType = Array;
_i.prototype.DefaultInterpolation = Fi;
_i.prototype.InterpolantFactoryMethodLinear = void 0;
_i.prototype.InterpolantFactoryMethodSmooth = void 0;
class Vi extends Wt {
}
Vi.prototype.ValueTypeName = "vector";
class am {
  constructor(e, t = -1, n, i = Tc) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = kt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(cm(n[r]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, r = n.length; s !== r; ++s)
      t.push(Wt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, r = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const h = nm(l);
      l = ya(l, 1, h), c = ya(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), r.push(
        new Bi(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, r);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const r = [];
    for (const o in i)
      r.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return r;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, m, g, p) {
      if (m.length !== 0) {
        const f = [], _ = [];
        Ml(m, f, _, g), f.length !== 0 && p.push(new u(d, f, _));
      }
    }, i = [], s = e.name || "default", r = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let p = 0; p < d[g].morphTargets.length; p++)
                m[d[g].morphTargets[p]] = -1;
          for (const p in m) {
            const f = [], _ = [];
            for (let w = 0; w !== d[g].morphTargets.length; ++w) {
              const v = d[g];
              f.push(v.time), _.push(v.morphTarget === p ? 1 : 0);
            }
            i.push(new Bi(".morphTargetInfluence[" + p + "]", f, _));
          }
          l = m.length * r;
        } else {
          const m = ".bones[" + t[u].name + "]";
          n(
            Vi,
            m + ".position",
            d,
            "pos",
            i
          ), n(
            Fn,
            m + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Vi,
            m + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function lm(a) {
  switch (a.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Bi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Vi;
    case "color":
      return bl;
    case "quaternion":
      return Fn;
    case "bool":
    case "boolean":
      return gi;
    case "string":
      return _i;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
}
function cm(a) {
  if (a.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = lm(a.type);
  if (a.times === void 0) {
    const t = [], n = [];
    Ml(a.keys, t, n, "value"), a.times = t, a.values = n;
  }
  return e.parse !== void 0 ? e.parse(a) : new e(a.name, a.times, a.values, a.interpolation);
}
const di = {
  enabled: !1,
  files: {},
  add: function(a, e) {
    this.enabled !== !1 && (this.files[a] = e);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class hm {
  constructor(e, t, n) {
    const i = this;
    let s = !1, r = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, r, o), s = !0;
    }, this.itemEnd = function(h) {
      r++, i.onProgress !== void 0 && i.onProgress(h, r, o), r === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const m = c[u], g = c[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const um = /* @__PURE__ */ new hm();
class xi {
  constructor(e) {
    this.manager = e !== void 0 ? e : um, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Jt = {};
class dm extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Sl extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = di.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Jt[e] !== void 0) {
      Jt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Jt[e] = [], Jt[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const r = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, l = this.responseType;
    fetch(r).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const h = Jt[e], u = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let p = 0;
        const f = new ReadableStream({
          start(_) {
            w();
            function w() {
              u.read().then(({ done: v, value: M }) => {
                if (v)
                  _.close();
                else {
                  p += M.byteLength;
                  const S = new ProgressEvent("progress", { lengthComputable: g, loaded: p, total: m });
                  for (let L = 0, P = h.length; L < P; L++) {
                    const x = h[L];
                    x.onProgress && x.onProgress(S);
                  }
                  _.enqueue(M), w();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new dm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      di.add(e, c);
      const h = Jt[e];
      delete Jt[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const h = Jt[e];
      if (h === void 0)
        throw this.manager.itemError(e), c;
      delete Jt[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onError && m.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class wl extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = di.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const o = ki("img");
    function l() {
      h(), di.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class fm extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new Fr(), r = new wl(this.manager);
    r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
    let o = 0;
    function l(c) {
      r.load(e[c], function(h) {
        s.images[c] = h, o++, o === 6 && (s.needsUpdate = !0, t && t(s));
      }, void 0, i);
    }
    for (let c = 0; c < e.length; ++c)
      l(c);
    return s;
  }
}
class Lr extends xi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ct(), r = new wl(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Ps extends Ve {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new we(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class pm extends Ps {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.groundColor = new we(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const pr = /* @__PURE__ */ new be(), Ma = /* @__PURE__ */ new C(), ba = /* @__PURE__ */ new C();
class Hr {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new _e(512, 512), this.map = null, this.mapPass = null, this.matrix = new be(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ur(), this._frameExtents = new _e(1, 1), this._viewportCount = 1, this._viewports = [
      new We(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Ma.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ma), ba.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ba), t.updateMatrixWorld(), pr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(pr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(pr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class mm extends Hr {
  constructor() {
    super(new vt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = zi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class gm extends Ps {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new mm();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Sa = /* @__PURE__ */ new be(), Ci = /* @__PURE__ */ new C(), mr = /* @__PURE__ */ new C();
class _m extends Hr {
  constructor() {
    super(new vt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new _e(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new We(2, 1, 1, 1),
      // negative X
      new We(0, 1, 1, 1),
      // positive Z
      new We(3, 1, 1, 1),
      // negative Z
      new We(1, 1, 1, 1),
      // positive Y
      new We(3, 0, 1, 1),
      // negative Y
      new We(1, 0, 1, 1)
    ], this._cubeDirections = [
      new C(1, 0, 0),
      new C(-1, 0, 0),
      new C(0, 0, 1),
      new C(0, 0, -1),
      new C(0, 1, 0),
      new C(0, -1, 0)
    ], this._cubeUps = [
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 1, 0),
      new C(0, 0, 1),
      new C(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ci.setFromMatrixPosition(e.matrixWorld), n.position.copy(Ci), mr.copy(n.position), mr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(mr), n.updateMatrixWorld(), i.makeTranslation(-Ci.x, -Ci.y, -Ci.z), Sa.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Sa);
  }
}
class xm extends Ps {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new _m();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class vm extends Hr {
  constructor() {
    super(new kr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Tl extends Ps {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ve.DefaultUp), this.updateMatrix(), this.target = new Ve(), this.shadow = new vm();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Pn {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class ym extends xi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = di.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      di.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
let gs;
class Mm {
  static getContext() {
    return gs === void 0 && (gs = new (window.AudioContext || window.webkitAudioContext)()), gs;
  }
  static setContext(e) {
    gs = e;
  }
}
class El {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = wa(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = wa();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function wa() {
  return (typeof performance > "u" ? Date : performance).now();
}
const bn = /* @__PURE__ */ new C(), Ta = /* @__PURE__ */ new Bt(), bm = /* @__PURE__ */ new C(), Sn = /* @__PURE__ */ new C();
class Sm extends Ve {
  constructor() {
    super(), this.type = "AudioListener", this.context = Mm.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new El();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(bn, Ta, bm), Sn.set(0, 0, -1).applyQuaternion(Ta), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(bn.x, i), t.positionY.linearRampToValueAtTime(bn.y, i), t.positionZ.linearRampToValueAtTime(bn.z, i), t.forwardX.linearRampToValueAtTime(Sn.x, i), t.forwardY.linearRampToValueAtTime(Sn.y, i), t.forwardZ.linearRampToValueAtTime(Sn.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else
      t.setPosition(bn.x, bn.y, bn.z), t.setOrientation(Sn.x, Sn.y, Sn.z, n.x, n.y, n.z);
  }
}
const Wr = "\\[\\]\\.:\\/", wm = new RegExp("[" + Wr + "]", "g"), jr = "[^" + Wr + "]", Tm = "[^" + Wr.replace("\\.", "") + "]", Em = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", jr), Am = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Tm), Cm = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", jr), Lm = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", jr), Rm = new RegExp(
  "^" + Em + Am + Cm + Lm + "$"
), Pm = ["material", "materials", "bones", "map"];
class Dm {
  constructor(e, t, n) {
    const i = n || Be.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Be {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Be.parseTrackName(t), this.node = Be.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Be.Composite(e, t, n) : new Be(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(wm, "");
  }
  static parseTrackName(e) {
    const t = Rm.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Pm.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let r = 0; r < s.length; r++) {
          const o = s[r];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Be.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const r = e[i];
    if (r === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s;
    } else r.fromArray !== void 0 && r.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (l = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Be.Composite = Dm;
Be.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Be.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Be.prototype.GetterByBindingType = [
  Be.prototype._getValue_direct,
  Be.prototype._getValue_array,
  Be.prototype._getValue_arrayElement,
  Be.prototype._getValue_toArray
];
Be.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    Be.prototype._setValue_direct,
    Be.prototype._setValue_direct_setNeedsUpdate,
    Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    Be.prototype._setValue_array,
    Be.prototype._setValue_array_setNeedsUpdate,
    Be.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    Be.prototype._setValue_arrayElement,
    Be.prototype._setValue_arrayElement_setNeedsUpdate,
    Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    Be.prototype._setValue_fromArray,
    Be.prototype._setValue_fromArray_setNeedsUpdate,
    Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Ds {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Ts(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Or(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, n = []) {
    return Rr(e, this, n, t), n.sort(Ea), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, s = e.length; i < s; i++)
      Rr(e[i], this, n, t);
    return n.sort(Ea), n;
  }
}
function Ea(a, e) {
  return a.distance - e.distance;
}
function Rr(a, e, t, n) {
  if (a.layers.test(e.layers) && a.raycast(e, t), n === !0) {
    const i = a.children;
    for (let s = 0, r = i.length; s < r; s++)
      Rr(i[s], e, t, !0);
  }
}
class Aa {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(ft(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ir
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ir);
function Ca(a, e, t) {
  return (1 - t) * a + t * e;
}
class Im {
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
    const t = ~~Ca(this.world.camera.near, this.world.camera.far, 0.5), n = new fn(t, t, t), i = new at(
      n,
      e.map((s) => new zt({ map: new Lr().load(s), side: bt }))
    );
    this.world.scene.add(i);
  }
  buildSceneBackground(e) {
    const n = new fm().load(e);
    n.transformUv(new _e(100, 0.5)), this.world.scene.background = n;
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
    const n = new Lr().load(e);
    n.magFilter = dt, n.minFilter = dt;
    const i = new pn({
      // fragmentShader: shader.fragmentShader,
      // vertexShader: shader.vertexShader,
      // uniforms: shader.uniforms,
      // depthWrite: false,
      side: bt
    }), s = ~~Ca(this.world.camera.near, this.world.camera.far, 0.5), r = new fn(s, s, s);
    this.bgMesh = new at(r, i), this.world.scene.add(this.bgMesh);
  }
}
class Nm {
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
  on(e, t, n, i = {}) {
    this.initEvent(t), this.lookup[t][e.id] = { object: e, callback: n, options: i }, this.lookupChildren[t].push(e), e.userData.selectable = !0, t === "click" && (this.on(e, "down", () => {
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
      const i = this.lookup?.[t]?.[e.id];
      i && (i.callback && i.callback({ type: t, target: e, intersection: n }), this.currentTargets[t] = e, i.options?.once === !0 && this.off(e, t), t === "up" && i.options?.isClick === !0 && this.world.mouse.mouseUp.distanceTo(this.world.mouse.mouseDown) < this.maxClickDistance && this.currentTargets.down === e && this.trigger(e, "click", n), t === "move" && this.currentTargets.enter !== e && (this.currentTargets.enter && (this.trigger(this.currentTargets.enter, "leave", n), this.currentTargets.enter = void 0), this.trigger(e, "enter", n)));
    } else
      t === "move" && this.currentTargets.enter && (this.trigger(
        this.currentTargets.enter,
        "leave"
        /* LEAVE */
      ), this.currentTargets.enter = void 0);
  }
}
const La = new be(), Ra = new C();
class Pa {
  constructor(e, t, n, i, s) {
    this.controller = t, this.handModel = e, this.envMap = null;
    let r;
    !s || !s.primitive || s.primitive === "sphere" ? r = new Ls(1, 10, 10) : s.primitive === "box" && (r = new fn(1, 1, 1));
    const o = new Rs();
    this.handMesh = new xl(r, o, 30), this.handMesh.instanceMatrix.setUsage(Pc), this.handMesh.castShadow = !0, this.handMesh.receiveShadow = !0, this.handModel.add(this.handMesh), this.joints = [
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
    for (let i = 0; i < this.joints.length; i++) {
      const s = t[this.joints[i]];
      s.visible && (Ra.setScalar(s.jointRadius || 8e-3), La.compose(s.position, s.quaternion, Ra), this.handMesh.setMatrixAt(i, La), n++);
    }
    this.handMesh.count = n, this.handMesh.instanceMatrix.needsUpdate = !0;
  }
}
class Al extends xi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new km(t);
    }), this.register(function(t) {
      return new Xm(t);
    }), this.register(function(t) {
      return new qm(t);
    }), this.register(function(t) {
      return new Vm(t);
    }), this.register(function(t) {
      return new Gm(t);
    }), this.register(function(t) {
      return new Hm(t);
    }), this.register(function(t) {
      return new Wm(t);
    }), this.register(function(t) {
      return new zm(t);
    }), this.register(function(t) {
      return new jm(t);
    }), this.register(function(t) {
      return new Bm(t);
    }), this.register(function(t) {
      return new Fm(t);
    }), this.register(function(t) {
      return new Ym(t);
    }), this.register(function(t) {
      return new Km(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = Pn.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new Sl(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, r, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
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
  parse(e, t, n, i) {
    let s;
    const r = {}, o = {};
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (Pn.decodeText(new Uint8Array(e, 0, 4)) === Cl) {
        try {
          r[Ne.KHR_BINARY_GLTF] = new Zm(e);
        } catch (h) {
          i && i(h);
          return;
        }
        s = JSON.parse(r[Ne.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(Pn.decodeText(new Uint8Array(e)));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new cg(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const h = this.pluginCallbacks[c](l);
      o[h.name] = h, r[h.name] = !0;
    }
    if (s.extensionsUsed)
      for (let c = 0; c < s.extensionsUsed.length; ++c) {
        const h = s.extensionsUsed[c], u = s.extensionsRequired || [];
        switch (h) {
          case Ne.KHR_MATERIALS_UNLIT:
            r[h] = new Um();
            break;
          case Ne.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new $m(s, this.dracoLoader);
            break;
          case Ne.KHR_TEXTURE_TRANSFORM:
            r[h] = new Jm();
            break;
          case Ne.KHR_MESH_QUANTIZATION:
            r[h] = new Qm();
            break;
          default:
            u.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    l.setExtensions(r), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Om() {
  let a = {};
  return {
    get: function(e) {
      return a[e];
    },
    add: function(e, t) {
      a[e] = t;
    },
    remove: function(e) {
      delete a[e];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const Ne = {
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
class Fm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new we(16777215);
    l.color !== void 0 && h.fromArray(l.color);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Tl(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new xm(h), c.distance = u;
        break;
      case "spot":
        c = new gm(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, cn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Um {
  constructor() {
    this.name = Ne.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return zt;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new we(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Ue));
    }
    return Promise.all(i);
  }
}
class zm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class km {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new _e(o, o);
    }
    return Promise.all(s);
  }
}
class Bm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Vm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new we(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = i.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Ue)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Gm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s);
  }
}
class Hm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new we(o[0], o[1], o[2]), Promise.all(s);
  }
}
class Wm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class jm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : zn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new we(o[0], o[1], o[2]), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, Ue)), Promise.all(s);
  }
}
class Xm {
  constructor(e) {
    this.parser = e, this.name = Ne.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class qm {
  constructor(e) {
    this.parser = e, this.name = Ne.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], o = i.images[r.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, r.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
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
class Ym {
  constructor(e) {
    this.name = Ne.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : r.ready.then(function() {
          const m = new ArrayBuffer(h * u);
          return r.decodeGltfBuffer(new Uint8Array(m), h, u, d, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
class Km {
  constructor(e) {
    this.name = Ne.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== Dt.TRIANGLES && c.mode !== Dt.TRIANGLE_STRIP && c.mode !== Dt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in r)
      o.push(this.parser.getDependency("accessor", r[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, m = [];
      for (const g of u) {
        const p = new be(), f = new C(), _ = new Bt(), w = new C(1, 1, 1), v = new xl(g.geometry, g.material, d);
        for (let M = 0; M < d; M++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, M), l.ROTATION && _.fromBufferAttribute(l.ROTATION, M), l.SCALE && w.fromBufferAttribute(l.SCALE, M), v.setMatrixAt(M, p.compose(f, _, w));
        for (const M in l)
          M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && g.geometry.setAttribute(M, l[M]);
        Ve.prototype.copy.call(v, g), v.frustumCulled = !1, this.parser.assignFinalMaterial(v), m.push(v);
      }
      return h.isGroup ? (h.clear(), h.add(...m), h) : m[0];
    }));
  }
}
const Cl = "glTF", Li = 12, Da = { JSON: 1313821514, BIN: 5130562 };
class Zm {
  constructor(e) {
    this.name = Ne.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Li);
    if (this.header = {
      magic: Pn.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Cl)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Li, i = new DataView(e, Li);
    let s = 0;
    for (; s < n; ) {
      const r = i.getUint32(s, !0);
      s += 4;
      const o = i.getUint32(s, !0);
      if (s += 4, o === Da.JSON) {
        const l = new Uint8Array(e, Li + s, r);
        this.content = Pn.decodeText(l);
      } else if (o === Da.BIN) {
        const l = Li + s;
        this.body = e.slice(l, l + r);
      }
      s += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class $m {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ne.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in r) {
      const u = Pr[h] || h.toLowerCase();
      o[u] = r[h];
    }
    for (const h in e.attributes) {
      const u = Pr[h] || h.toLowerCase();
      if (r[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], m = ri[d.componentType];
        c[u] = m.name, l[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u) {
        i.decodeDracoFile(h, function(d) {
          for (const m in d.attributes) {
            const g = d.attributes[m], p = l[m];
            p !== void 0 && (g.normalized = p);
          }
          u(d);
        }, o, c);
      });
    });
  }
}
class Jm {
  constructor() {
    this.name = Ne.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Qm {
  constructor() {
    this.name = Ne.KHR_MESH_QUANTIZATION;
  }
}
class Ll extends ji {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      t[r] = n[s + r];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, m = d * u, g = e * c, p = g - c, f = -2 * m + 3 * d, _ = m - d, w = 1 - f, v = _ - d + u;
    for (let M = 0; M !== o; M++) {
      const S = r[p + M + o], L = r[p + M + l] * h, P = r[g + M + o], x = r[g + M] * h;
      s[M] = w * S + v * L + f * P + _ * x;
    }
    return s;
  }
}
const eg = new Bt();
class tg extends Ll {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return eg.fromArray(s).normalize().toArray(s), s;
  }
}
const Dt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, ri = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ia = {
  9728: ot,
  9729: dt,
  9984: Sr,
  9985: $a,
  9986: xs,
  9987: Dn
}, Na = {
  33071: It,
  33648: Ms,
  10497: li
}, gr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Pr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, ln = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, ng = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: hi,
  STEP: Fi
}, _r = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function ig(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new Rs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: dn
  })), a.DefaultMaterial;
}
function Ri(a, e, t) {
  for (const n in t.extensions)
    a[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function cn(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function sg(a, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(a);
  const r = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : a.attributes.position;
      r.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : a.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : a.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (a.morphAttributes.position = h), i && (a.morphAttributes.normal = u), s && (a.morphAttributes.color = d), a.morphTargetsRelative = !0, a;
  });
}
function rg(a, e) {
  if (a.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        a.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function og(a) {
  const e = a.extensions && a.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Oa(e.attributes) : t = a.indices + ":" + Oa(a.attributes) + ":" + a.mode, t;
}
function Oa(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + a[t[n]] + ";";
  return e;
}
function Dr(a) {
  switch (a) {
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
function ag(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const lg = new be();
class cg {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Om(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Lr(this.options.manager) : this.textureLoader = new ym(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Sl(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Ri(s, o, i), cn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let o = 0, l = r.length; o < l; o++)
        e[r[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
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
    const i = n.clone(), s = (r, o) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(o, l);
      for (const [c, h] of r.children.entries())
        s(h, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
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
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, r) {
        return n.getDependency(e, r);
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
      return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, r) {
      n.load(Pn.resolveURL(t.uri, i.path), s, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const r = gr[i.type], o = ri[i.componentType], l = i.normalized === !0, c = new o(i.count * r);
      return Promise.resolve(new yt(c, r, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
      const o = r[0], l = gr[i.type], c = ri[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let p, f;
      if (m && m !== u) {
        const _ = Math.floor(d / m), w = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + _ + ":" + i.count;
        let v = t.cache.get(w);
        v || (p = new c(o, _ * m, i.count * m / h), v = new qp(p, m / h), t.cache.add(w, v)), f = new Vr(v, l, d % m / h, g);
      } else
        o === null ? p = new c(i.count * l) : p = new c(o, d, i.count * l), f = new yt(p, l, g);
      if (i.sparse !== void 0) {
        const _ = gr.SCALAR, w = ri[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, S = new w(r[1], v, i.sparse.count * _), L = new c(r[2], M, i.sparse.count * l);
        o !== null && (f = new yt(f.array.slice(), f.itemSize, f.normalized));
        for (let P = 0, x = S.length; P < x; P++) {
          const A = S[P];
          if (f.setX(A, L[P * l]), l >= 2 && f.setY(A, L[P * l + 1]), l >= 3 && f.setZ(A, L[P * l + 2]), l >= 4 && f.setW(A, L[P * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, r = t.images[s];
    let o = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, r = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = r.name || o.name || "";
      const d = (s.samplers || {})[r.sampler] || {};
      return h.magFilter = Ia[d.magFilter] || dt, h.minFilter = Ia[d.minFilter] || Dn, h.wrapS = Na[d.wrapS] || li, h.wrapT = Na[d.wrapT] || li, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const r = i.images[e], o = self.URL || self.webkitURL;
    let l = r.uri || "", c = !1;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(u) {
        c = !0;
        const d = new Blob([u], { type: r.mimeType });
        return l = o.createObjectURL(d), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, m) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(p) {
          const f = new ct(p);
          f.needsUpdate = !0, d(f);
        }), t.load(Pn.resolveURL(u, s.path), g, void 0, m);
      });
    }).then(function(u) {
      return c === !0 && o.revokeObjectURL(l), u.userData.mimeType = r.mimeType || ag(r.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r) return null;
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), s.extensions[Ne.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Ne.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(r);
          r = s.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), s.associations.set(r, l);
        }
      }
      return i !== void 0 && (r.encoding = i), e[t] = r, r;
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
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new vl(), Ht.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new As(), Ht.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(o, l)), n = l;
    }
    if (i || s || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), r && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return Rs;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let r;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[Ne.KHR_MATERIALS_UNLIT]) {
      const u = i[Ne.KHR_MATERIALS_UNLIT];
      r = u.getMaterialType(), c.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new we(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.fromArray(d), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, Ue)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = Ss);
    const h = s.alphaMode || _r.OPAQUE;
    if (h === _r.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === _r.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && r !== zt && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new _e(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    return s.occlusionTexture !== void 0 && r !== zt && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== zt && (o.emissive = new we().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && r !== zt && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, Ue)), Promise.all(c).then(function() {
      const u = new r(o);
      return s.name && (u.name = s.name), cn(u, s), t.associations.set(u, { materials: e }), s.extensions && Ri(i, u, s), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Be.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
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
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return Fa(l, o, t);
      });
    }
    const r = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = og(c), u = i[h];
      if (u)
        r.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Ne.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = Fa(new St(), c, t), i[h] = { primitive: c, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], r = s.primitives, o = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const h = r[l].material === void 0 ? ig(this.cache) : this.getDependency("material", r[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let m = 0, g = h.length; m < g; m++) {
        const p = h[m], f = r[m];
        let _;
        const w = c[m];
        if (f.mode === Dt.TRIANGLES || f.mode === Dt.TRIANGLE_STRIP || f.mode === Dt.TRIANGLE_FAN || f.mode === void 0)
          _ = s.isSkinnedMesh === !0 ? new Kp(p, w) : new at(p, w), _.isSkinnedMesh === !0 && !_.geometry.attributes.skinWeight.normalized && _.normalizeSkinWeights(), f.mode === Dt.TRIANGLE_STRIP ? _.geometry = Ua(_.geometry, Ec) : f.mode === Dt.TRIANGLE_FAN && (_.geometry = Ua(_.geometry, Qa));
        else if (f.mode === Dt.LINES)
          _ = new Qp(p, w);
        else if (f.mode === Dt.LINE_STRIP)
          _ = new Wi(p, w);
        else if (f.mode === Dt.LINE_LOOP)
          _ = new em(p, w);
        else if (f.mode === Dt.POINTS)
          _ = new tm(p, w);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && rg(_, s), _.name = t.createUniqueName(s.name || "mesh_" + e), cn(_, s), f.extensions && Ri(i, _, f), t.assignFinalMaterial(_), u.push(_);
      }
      for (let m = 0, g = u.length; m < g; m++)
        t.associations.set(u[m], {
          meshes: e,
          primitives: m
        });
      if (u.length === 1)
        return u[0];
      const d = new Cn();
      t.associations.set(d, { meshes: e });
      for (let m = 0, g = u.length; m < g; m++)
        d.add(u[m]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new vt(jc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new kr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), cn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this.getDependency("node", t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), r = i, o = [], l = [];
      for (let c = 0, h = r.length; c < h; c++) {
        const u = r[c];
        if (u) {
          o.push(u);
          const d = new be();
          s !== null && d.fromArray(s.array, c * 16), l.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Gr(o, l);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], s = [], r = [], o = [], l = [];
    for (let c = 0, h = n.channels.length; c < h; c++) {
      const u = n.channels[c], d = n.samplers[u.sampler], m = u.target, g = m.node, p = n.parameters !== void 0 ? n.parameters[d.input] : d.input, f = n.parameters !== void 0 ? n.parameters[d.output] : d.output;
      i.push(this.getDependency("node", g)), s.push(this.getDependency("accessor", p)), r.push(this.getDependency("accessor", f)), o.push(d), l.push(m);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(r),
      Promise.all(o),
      Promise.all(l)
    ]).then(function(c) {
      const h = c[0], u = c[1], d = c[2], m = c[3], g = c[4], p = [];
      for (let _ = 0, w = h.length; _ < w; _++) {
        const v = h[_], M = u[_], S = d[_], L = m[_], P = g[_];
        if (v === void 0) continue;
        v.updateMatrix();
        let x;
        switch (ln[P.path]) {
          case ln.weights:
            x = Bi;
            break;
          case ln.rotation:
            x = Fn;
            break;
          case ln.position:
          case ln.scale:
          default:
            x = Vi;
            break;
        }
        const A = v.name ? v.name : v.uuid, O = L.interpolation !== void 0 ? ng[L.interpolation] : hi, q = [];
        ln[P.path] === ln.weights ? v.traverse(function(F) {
          F.morphTargetInfluences && q.push(F.name ? F.name : F.uuid);
        }) : q.push(A);
        let Z = S.array;
        if (S.normalized) {
          const F = Dr(Z.constructor), N = new Float32Array(Z.length);
          for (let B = 0, K = Z.length; B < K; B++)
            N[B] = Z[B] * F;
          Z = N;
        }
        for (let F = 0, N = q.length; F < N; F++) {
          const B = new x(
            q[F] + "." + ln[P.path],
            M.array,
            Z,
            O
          );
          L.interpolation === "CUBICSPLINE" && (B.createInterpolant = function(J) {
            const X = this instanceof Fn ? tg : Ll;
            return new X(this.times, this.values, this.getValueSize() / 3, J);
          }, B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), p.push(B);
        }
      }
      const f = n.name ? n.name : "animation_" + e;
      return new am(f, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const r = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, s = t.nodes[e], r = s.name ? i.createUniqueName(s.name) : "";
    return (function() {
      const o = [], l = i._invokeOne(function(d) {
        return d.createNodeMesh && d.createNodeMesh(e);
      });
      l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(d) {
        return i._getNodeRef(i.cameraCache, s.camera, d);
      })), i._invokeAll(function(d) {
        return d.createNodeAttachment && d.createNodeAttachment(e);
      }).forEach(function(d) {
        o.push(d);
      });
      const c = [], h = s.children || [];
      for (let d = 0, m = h.length; d < m; d++)
        c.push(i.getDependency("node", h[d]));
      const u = s.skin === void 0 ? Promise.resolve(null) : i.getDependency("skin", s.skin);
      return Promise.all([
        Promise.all(o),
        Promise.all(c),
        u
      ]);
    })().then(function(o) {
      const l = o[0], c = o[1], h = o[2];
      let u;
      if (s.isBone === !0 ? u = new _l() : l.length > 1 ? u = new Cn() : l.length === 1 ? u = l[0] : u = new Ve(), u !== l[0])
        for (let d = 0, m = l.length; d < m; d++)
          u.add(l[d]);
      if (s.name && (u.userData.name = s.name, u.name = r), cn(u, s), s.extensions && Ri(n, u, s), s.matrix !== void 0) {
        const d = new be();
        d.fromArray(s.matrix), u.applyMatrix4(d);
      } else
        s.translation !== void 0 && u.position.fromArray(s.translation), s.rotation !== void 0 && u.quaternion.fromArray(s.rotation), s.scale !== void 0 && u.scale.fromArray(s.scale);
      i.associations.has(u) || i.associations.set(u, {}), i.associations.get(u).nodes = e, h !== null && u.traverse(function(d) {
        d.isSkinnedMesh && d.bind(h, lg);
      });
      for (let d = 0, m = c.length; d < m; d++)
        u.add(c[d]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Cn();
    n.name && (s.name = i.createUniqueName(n.name)), cn(s, n), n.extensions && Ri(t, s, n);
    const r = n.nodes || [], o = [];
    for (let l = 0, c = r.length; l < c; l++)
      o.push(i.getDependency("node", r[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++)
        s.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, m] of i.associations)
          (d instanceof Ht || d instanceof ct) && u.set(d, m);
        return h.traverse((d) => {
          const m = i.associations.get(d);
          m != null && u.set(d, m);
        }), u;
      };
      return i.associations = c(s), s;
    });
  }
}
function hg(a, e, t) {
  const n = e.attributes, i = new fi();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new C(l[0], l[1], l[2]),
        new C(c[0], c[1], c[2])
      ), o.normalized) {
        const h = Dr(ri[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new C(), l = new C();
    for (let c = 0, h = s.length; c < h; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], m = d.min, g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) {
            const p = Dr(ri[d.componentType]);
            l.multiplyScalar(p);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  a.boundingBox = i;
  const r = new pi();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, a.boundingSphere = r;
}
function Fa(a, e, t) {
  const n = e.attributes, i = [];
  function s(r, o) {
    return t.getDependency("accessor", r).then(function(l) {
      a.setAttribute(o, l);
    });
  }
  for (const r in n) {
    const o = Pr[r] || r.toLowerCase();
    o in a.attributes || i.push(s(n[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    i.push(r);
  }
  return cn(a, e), hg(a, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? sg(a, e.targets, t) : a;
  });
}
function Ua(a, e) {
  let t = a.getIndex();
  if (t === null) {
    const r = [], o = a.getAttribute("position");
    if (o !== void 0) {
      for (let l = 0; l < o.count; l++)
        r.push(l);
      a.setIndex(r), t = a.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
  }
  const n = t.count - 2, i = [];
  if (e === Qa)
    for (let r = 1; r <= n; r++)
      i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
  else
    for (let r = 0; r < n; r++)
      r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const s = a.clone();
  return s.setIndex(i), s;
}
const ug = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/";
class dg {
  constructor(e, t, n, i, s = null) {
    this.controller = t, this.handModel = e, this.bones = [], s === null && (s = new Al(), s.setPath(n || ug)), s.load(`${i}.glb`, (r) => {
      const o = r.scene.children[0];
      this.handModel.add(o);
      const l = o.getObjectByProperty("type", "SkinnedMesh");
      l.frustumCulled = !1, l.castShadow = !0, l.receiveShadow = !0, [
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
        const u = o.getObjectByName(h);
        u !== void 0 ? u.jointName = h : console.warn(`Couldn't find ${h} in ${i} hand mesh`), this.bones.push(u);
      });
    });
  }
  updateMesh() {
    const e = this.controller.joints;
    for (let t = 0; t < this.bones.length; t++) {
      const n = this.bones[t];
      if (n) {
        const i = e[n.jointName];
        if (i.visible) {
          const s = i.position;
          n.position.copy(s), n.quaternion.copy(i.quaternion);
        }
      }
    }
  }
}
class fg extends Ve {
  constructor(e) {
    super(), this.controller = e, this.motionController = null, this.envMap = null, this.mesh = null;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.motionController && this.motionController.updateMesh();
  }
}
class pg {
  constructor() {
    this.path = null;
  }
  setPath(e) {
    return this.path = e, this;
  }
  createHandModel(e, t) {
    const n = new fg(e);
    return e.addEventListener("connected", (i) => {
      const s = i.data;
      s.hand && !n.motionController && (n.xrInputSource = s, t === void 0 || t === "spheres" ? n.motionController = new Pa(n, e, this.path, s.handedness, { primitive: "sphere" }) : t === "boxes" ? n.motionController = new Pa(n, e, this.path, s.handedness, { primitive: "box" }) : t === "mesh" && (n.motionController = new dg(n, e, this.path, s.handedness))), e.visible = !0;
    }), e.addEventListener("disconnected", () => {
      e.visible = !1;
    }), n;
  }
}
const mg = new pg(), za = new be();
class ka {
  constructor(e, t, n) {
    this.raycaster = new Ds(), this.grip = new (void 0)(), this.isSelecting = !1, this.tmpVector1 = new C(), this.tmpVector2 = new C(), this.grabbing = !1, this.connected = !1, this.self = this, this.lastPosition = new C(), this.moveVector = new C(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.onSelectStart = this.onSelectStart.bind(this), this.onSelectEnd = this.onSelectEnd.bind(this), this._onMove = this._onMove.bind(this), this.onConnected = this.onConnected.bind(this), this.onDisconnected = this.onDisconnected.bind(this), this.controller = t.xr.getHand(e), this.controller.userData.built = !1, this.controller.addEventListener("connected", this.onConnected), this.controller.addEventListener("disconnected", this.onDisconnected), this.controller.add(mg.createHandModel(this.controller)), this.scene = n;
  }
  buildController(e) {
    let t, n;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return console.log("add line to hand"), t = new St(), t.setAttribute("position", new lt([0, 0, 0, 0, 0, -1], 3)), t.setAttribute("color", new lt([0.5, 0.5, 0.5, 0, 0, 0], 3)), n = new As({ vertexColors: !0, blending: vr }), new Wi(t, n);
      case "gaze":
        return t = new Cs(0.02, 0.04, 32).translate(0, 0, -1), n = new zt({ opacity: 0.5, transparent: !0 }), new at(t, n);
    }
  }
  getSelectedObject(e) {
    const t = this.getPart(_s.INDEX.JOINT1);
    if (t) {
      za.identity().extractRotation(t.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(t.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(za);
      let n = e.children.length, i, s;
      for (; n--; )
        if (i = e.children[n], i.userData.selectable === !0 && (s = this.raycaster.intersectObject(i, !1), s.length > 0))
          return i;
    }
    return null;
  }
  collideObject(e, t) {
    console.log("collide", e?.children.length);
    const n = e?.children?.length ?? 0;
    for (let i = 0; i < n; i++) {
      const s = e.children[i];
      if (s.userData.selectable === !0 && s instanceof at && t.getWorldPosition(this.tmpVector1).distanceTo(s.getWorldPosition(this.tmpVector2)) < s.geometry.boundingSphere.radius * s.scale.x)
        return console.log("found mesh"), s;
    }
    return null;
  }
  onConnected(e) {
    Object.keys(this.controller?.joints ?? {}).length > 5 && (console.log("hand", this.controllerIndex, "connected"), this.connected = !0, this.controller.addEventListener("selectstart", this.onSelectStart), this.controller.addEventListener("selectend", this.onSelectEnd), this.controller.addEventListener("move", this._onMove), this.controller.userData.built === !1 && (console.log("joints", Object.keys(this.controller.joints)), _s.INDEX.JOINT1 in this.controller.joints && (this.getPart(_s.INDEX.JOINT1)?.add(this.buildController(e.data)), this.controller.userData.built = !0, this.lastPosition.copy(this.controller.position))));
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
    this.controller.userData.selectPosition = this.getPart(_s.INDEX.TIP)?.position.clone(), this.controller.userData.selectVelocity = new C(), this.isSelecting = !0;
  }
  onSelectEnd() {
    this.isSelecting = !1;
  }
  getPart(e) {
    return this.controller.joints[e];
  }
}
const _s = {
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
class gg {
  constructor(e, t) {
    this.raycaster = new Ds(), this.mouse = { x: -9999999999, y: -9999999999 }, this.mouseMove = new _e(), this.mouseDown = new _e(), this.mouseUp = new _e(), this.isDown = !1, this.target = null, this.onDown = () => {
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
    let i = null;
    return n.length > 0 && (i = n[0]), i;
  }
}
const Xe = {
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
async function Rl(a) {
  const e = await fetch(a);
  if (e.ok)
    return e.json();
  throw new Error(e.statusText);
}
async function _g(a) {
  if (!a)
    throw new Error("No basePath supplied");
  return await Rl(`${a}/profilesList.json`);
}
async function xg(a, e, t = null, n = !0) {
  if (!a)
    throw new Error("No xrInputSource supplied");
  if (!e)
    throw new Error("No basePath supplied");
  const i = await _g(e);
  let s;
  if (a.profiles.some((l) => {
    const c = i[l];
    return c && (s = {
      profileId: l,
      profilePath: `${e}/${c.path}`,
      deprecated: !!c.deprecated
    }), !!s;
  }), !s) {
    if (!t)
      throw new Error("No matching profile name found");
    const l = i[t];
    if (!l)
      throw new Error(`No matching profile name found and default profile "${t}" missing.`);
    s = {
      profileId: t,
      profilePath: `${e}/${l.path}`,
      deprecated: !!l.deprecated
    };
  }
  const r = await Rl(s.profilePath);
  let o;
  if (n) {
    let l;
    if (a.handedness === "any" ? l = r.layouts[Object.keys(r.layouts)[0]] : l = r.layouts[a.handedness], !l)
      throw new Error(
        `No matching handedness, ${a.handedness}, in profile ${s.profileId}`
      );
    l.assetPath && (o = s.profilePath.replace("profile.json", l.assetPath));
  }
  return { profile: r, assetPath: o };
}
const vg = {
  xAxis: 0,
  yAxis: 0,
  button: 0,
  state: Xe.ComponentState.DEFAULT
};
function yg(a = 0, e = 0) {
  let t = a, n = e;
  if (Math.sqrt(a * a + e * e) > 1) {
    const r = Math.atan2(e, a);
    t = Math.cos(r), n = Math.sin(r);
  }
  return {
    normalizedXAxis: t * 0.5 + 0.5,
    normalizedYAxis: n * 0.5 + 0.5
  };
}
class Mg {
  constructor(e) {
    this.componentProperty = e.componentProperty, this.states = e.states, this.valueNodeName = e.valueNodeName, this.valueNodeProperty = e.valueNodeProperty, this.valueNodeProperty === Xe.VisualResponseProperty.TRANSFORM && (this.minNodeName = e.minNodeName, this.maxNodeName = e.maxNodeName), this.value = 0, this.updateFromComponent(vg);
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
    state: i
  }) {
    const { normalizedXAxis: s, normalizedYAxis: r } = yg(e, t);
    switch (this.componentProperty) {
      case Xe.ComponentProperty.X_AXIS:
        this.value = this.states.includes(i) ? s : 0.5;
        break;
      case Xe.ComponentProperty.Y_AXIS:
        this.value = this.states.includes(i) ? r : 0.5;
        break;
      case Xe.ComponentProperty.BUTTON:
        this.value = this.states.includes(i) ? n : 0;
        break;
      case Xe.ComponentProperty.STATE:
        this.valueNodeProperty === Xe.VisualResponseProperty.VISIBILITY ? this.value = this.states.includes(i) : this.value = this.states.includes(i) ? 1 : 0;
        break;
      default:
        throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`);
    }
  }
}
class bg {
  /**
   * @param {Object} componentId - Id of the component
   * @param {Object} componentDescription - Description of the component to be created
   */
  constructor(e, t) {
    if (!e || !t || !t.visualResponses || !t.gamepadIndices || Object.keys(t.gamepadIndices).length === 0)
      throw new Error("Invalid arguments supplied");
    this.id = e, this.type = t.type, this.rootNodeName = t.rootNodeName, this.touchPointNodeName = t.touchPointNodeName, this.visualResponses = {}, Object.keys(t.visualResponses).forEach((n) => {
      const i = new Mg(t.visualResponses[n]);
      this.visualResponses[n] = i;
    }), this.gamepadIndices = Object.assign({}, t.gamepadIndices), this.values = {
      state: Xe.ComponentState.DEFAULT,
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
    if (this.values.state = Xe.ComponentState.DEFAULT, this.gamepadIndices.button !== void 0 && e.buttons.length > this.gamepadIndices.button) {
      const t = e.buttons[this.gamepadIndices.button];
      this.values.button = t.value, this.values.button = this.values.button < 0 ? 0 : this.values.button, this.values.button = this.values.button > 1 ? 1 : this.values.button, t.pressed || this.values.button === 1 ? this.values.state = Xe.ComponentState.PRESSED : (t.touched || this.values.button > Xe.ButtonTouchThreshold) && (this.values.state = Xe.ComponentState.TOUCHED);
    }
    this.gamepadIndices.xAxis !== void 0 && e.axes.length > this.gamepadIndices.xAxis && (this.values.xAxis = e.axes[this.gamepadIndices.xAxis], this.values.xAxis = this.values.xAxis < -1 ? -1 : this.values.xAxis, this.values.xAxis = this.values.xAxis > 1 ? 1 : this.values.xAxis, this.values.state === Xe.ComponentState.DEFAULT && Math.abs(this.values.xAxis) > Xe.AxisTouchThreshold && (this.values.state = Xe.ComponentState.TOUCHED)), this.gamepadIndices.yAxis !== void 0 && e.axes.length > this.gamepadIndices.yAxis && (this.values.yAxis = e.axes[this.gamepadIndices.yAxis], this.values.yAxis = this.values.yAxis < -1 ? -1 : this.values.yAxis, this.values.yAxis = this.values.yAxis > 1 ? 1 : this.values.yAxis, this.values.state === Xe.ComponentState.DEFAULT && Math.abs(this.values.yAxis) > Xe.AxisTouchThreshold && (this.values.state = Xe.ComponentState.TOUCHED)), Object.values(this.visualResponses).forEach((t) => {
      t.updateFromComponent(this.values);
    });
  }
}
class Sg {
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
    this.xrInputSource = e, this.assetUrl = n, this.id = t.profileId, this.layoutDescription = t.layouts[e.handedness], this.components = {}, Object.keys(this.layoutDescription.components).forEach((i) => {
      const s = this.layoutDescription.components[i];
      this.components[i] = new bg(i, s);
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
const wg = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles", Tg = "generic-trigger";
class Eg extends Ve {
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
        const { valueNode: i, minNode: s, maxNode: r, value: o, valueNodeProperty: l } = n;
        i && (l === Xe.VisualResponseProperty.VISIBILITY ? i.visible = o : l === Xe.VisualResponseProperty.TRANSFORM && (i.quaternion.slerpQuaternions(
          s.quaternion,
          r.quaternion,
          o
        ), i.position.lerpVectors(
          s.position,
          r.position,
          o
        )));
      });
    }));
  }
}
function Ag(a, e) {
  Object.values(a.components).forEach((t) => {
    const { type: n, touchPointNodeName: i, visualResponses: s } = t;
    if (n === Xe.ComponentType.TOUCHPAD)
      if (t.touchPointNode = e.getObjectByName(i), t.touchPointNode) {
        const r = new Ls(1e-3), o = new zt({ color: 255 }), l = new at(r, o);
        t.touchPointNode.add(l);
      } else
        console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);
    Object.values(s).forEach((r) => {
      const { valueNodeName: o, minNodeName: l, maxNodeName: c, valueNodeProperty: h } = r;
      if (h === Xe.VisualResponseProperty.TRANSFORM) {
        if (r.minNode = e.getObjectByName(l), r.maxNode = e.getObjectByName(c), !r.minNode) {
          console.warn(`Could not find ${l} in the model`);
          return;
        }
        if (!r.maxNode) {
          console.warn(`Could not find ${c} in the model`);
          return;
        }
      }
      r.valueNode = e.getObjectByName(o), r.valueNode || console.warn(`Could not find ${o} in the model`);
    });
  });
}
function Ba(a, e) {
  Ag(a.motionController, e), a.envMap && e.traverse((t) => {
    t.isMesh && (t.material.envMap = a.envMap, t.material.needsUpdate = !0);
  }), a.add(e);
}
class Cg {
  constructor(e = null) {
    this.gltfLoader = e, this.path = wg, this._assetCache = {}, this.gltfLoader || (this.gltfLoader = new Al());
  }
  createControllerModel(e) {
    const t = new Eg();
    let n = null;
    return e.addEventListener("connected", (i) => {
      const s = i.data;
      s.targetRayMode !== "tracked-pointer" || !s.gamepad || xg(s, this.path, Tg).then(({ profile: r, assetPath: o }) => {
        t.motionController = new Sg(
          s,
          r,
          o
        );
        const l = this._assetCache[t.motionController.assetUrl];
        if (l)
          n = l.scene.clone(), Ba(t, n);
        else {
          if (!this.gltfLoader)
            throw new Error("GLTFLoader not set.");
          this.gltfLoader.setPath(""), this.gltfLoader.load(
            t.motionController.assetUrl,
            (c) => {
              this._assetCache[t.motionController.assetUrl] = c, n = c.scene.clone(), Ba(t, n);
            },
            null,
            () => {
              throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`);
            }
          );
        }
      }).catch((r) => {
        console.warn(r);
      });
    }), e.addEventListener("disconnected", () => {
      t.motionController = null, t.remove(n), n = null;
    }), t;
  }
}
const Lg = new Cg(), Va = new be();
class Ga {
  constructor(e, t, n) {
    this.raycaster = new Ds(), this.isBuilt = !1, this.isConnected = !1, this.isSelecting = !1, this.userData = {}, this.lastPosition = new C(), this.moveVector = new C(), this.controllerIndex = e, this.getSelectedObject = this.getSelectedObject.bind(this), this.controller = t.xr.getController(e), this.controller.addEventListener("selectstart", this._onSelectStart.bind(this)), this.controller.addEventListener("selectend", this._onSelectEnd.bind(this)), this.controller.addEventListener("connected", this.onConnected.bind(this)), this.controller.addEventListener("disconnected", this.onDisconnected.bind(this)), this.grip = t.xr.getControllerGrip(e), this.grip.add(Lg.createControllerModel(this.grip)), n.add(this.controller), n.add(this.grip);
  }
  buildController(e) {
    let t, n;
    switch (e.targetRayMode) {
      case "tracked-pointer":
        return t = new St().setFromPoints([new C(0, 0, 0), new C(0, 0, -1), new C(0, 0.5, -1)]), t.setAttribute("color", new lt([0.5, 0.5, 0.5, 0, 0, 0], 3)), n = new As({
          vertexColors: !0,
          // blending: THREE.AdditiveBlending,
          color: 16737792
        }), new Wi(t, n);
      case "gaze":
        return t = new Cs(0.02, 0.04, 32).translate(0, 0, -1), n = new zt({ opacity: 0.5, transparent: !0 }), new at(t, n);
    }
  }
  getSelectedObject(e, t = !1) {
    Va.identity().extractRotation(this.controller.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.controller.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(Va);
    const i = this.raycaster.intersectObjects(e, t).filter((s) => s.object.userData.selectable === !0);
    return i.length > 0 ? i[0] : null;
  }
  on(e, t) {
    return this.controller.addEventListener(e, (n) => t({ ...n, ref: this })), this;
  }
  off(e, t) {
    return this.controller.removeEventListener(e, t), this;
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
const Ha = { type: "change" }, xr = { type: "start" }, Wa = { type: "end" };
class Rg extends Un {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: kn.ROTATE, MIDDLE: kn.DOLLY, RIGHT: kn.PAN }, this.touches = { ONE: Bn.ROTATE, TWO: Bn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return o.phi;
    }, this.getAzimuthalAngle = function() {
      return o.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(E) {
      E.addEventListener("keydown", Mt), this._domElementKeyEvents = E;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Ha), n.update(), s = i.NONE;
    }, this.update = (function() {
      const E = new C(), D = new Bt().setFromUnitVectors(e.up, new C(0, 1, 0)), le = D.clone().invert(), he = new C(), ae = new Bt(), pe = 2 * Math.PI;
      return function() {
        const Le = n.object.position;
        E.copy(Le).sub(n.target), E.applyQuaternion(D), o.setFromVector3(E), n.autoRotate && s === i.NONE && A(P()), n.enableDamping ? (o.theta += l.theta * n.dampingFactor, o.phi += l.phi * n.dampingFactor) : (o.theta += l.theta, o.phi += l.phi);
        let Re = n.minAzimuthAngle, Ge = n.maxAzimuthAngle;
        return isFinite(Re) && isFinite(Ge) && (Re < -Math.PI ? Re += pe : Re > Math.PI && (Re -= pe), Ge < -Math.PI ? Ge += pe : Ge > Math.PI && (Ge -= pe), Re <= Ge ? o.theta = Math.max(Re, Math.min(Ge, o.theta)) : o.theta = o.theta > (Re + Ge) / 2 ? Math.max(Re, o.theta) : Math.min(Ge, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= c, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), E.setFromSpherical(o), E.applyQuaternion(le), Le.copy(n.target).add(E), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), h.set(0, 0, 0)), c = 1, u || he.distanceToSquared(n.object.position) > r || 8 * (1 - ae.dot(n.object.quaternion)) > r ? (n.dispatchEvent(Ha), he.copy(n.object.position), ae.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    })(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", k), n.domElement.removeEventListener("pointerdown", nt), n.domElement.removeEventListener("pointercancel", pt), n.domElement.removeEventListener("wheel", Lt), n.domElement.removeEventListener("pointermove", $e), n.domElement.removeEventListener("pointerup", Je), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", Mt);
    };
    const n = this, i = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = i.NONE;
    const r = 1e-6, o = new Aa(), l = new Aa();
    let c = 1;
    const h = new C();
    let u = !1;
    const d = new _e(), m = new _e(), g = new _e(), p = new _e(), f = new _e(), _ = new _e(), w = new _e(), v = new _e(), M = new _e(), S = [], L = {};
    function P() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function x() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function A(E) {
      l.theta -= E;
    }
    function O(E) {
      l.phi -= E;
    }
    const q = (function() {
      const E = new C();
      return function(le, he) {
        E.setFromMatrixColumn(he, 0), E.multiplyScalar(-le), h.add(E);
      };
    })(), Z = (function() {
      const E = new C();
      return function(le, he) {
        n.screenSpacePanning === !0 ? E.setFromMatrixColumn(he, 1) : (E.setFromMatrixColumn(he, 0), E.crossVectors(n.object.up, E)), E.multiplyScalar(le), h.add(E);
      };
    })(), F = (function() {
      const E = new C();
      return function(le, he) {
        const ae = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const pe = n.object.position;
          E.copy(pe).sub(n.target);
          let fe = E.length();
          fe *= Math.tan(n.object.fov / 2 * Math.PI / 180), q(2 * le * fe / ae.clientHeight, n.object.matrix), Z(2 * he * fe / ae.clientHeight, n.object.matrix);
        } else n.object.isOrthographicCamera ? (q(le * (n.object.right - n.object.left) / n.object.zoom / ae.clientWidth, n.object.matrix), Z(he * (n.object.top - n.object.bottom) / n.object.zoom / ae.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    })();
    function N(E) {
      n.object.isPerspectiveCamera ? c /= E : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * E)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function B(E) {
      n.object.isPerspectiveCamera ? c *= E : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / E)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function K(E) {
      d.set(E.clientX, E.clientY);
    }
    function J(E) {
      w.set(E.clientX, E.clientY);
    }
    function X(E) {
      p.set(E.clientX, E.clientY);
    }
    function ee(E) {
      m.set(E.clientX, E.clientY), g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const D = n.domElement;
      A(2 * Math.PI * g.x / D.clientHeight), O(2 * Math.PI * g.y / D.clientHeight), d.copy(m), n.update();
    }
    function Y(E) {
      v.set(E.clientX, E.clientY), M.subVectors(v, w), M.y > 0 ? N(x()) : M.y < 0 && B(x()), w.copy(v), n.update();
    }
    function H(E) {
      f.set(E.clientX, E.clientY), _.subVectors(f, p).multiplyScalar(n.panSpeed), F(_.x, _.y), p.copy(f), n.update();
    }
    function z(E) {
      E.deltaY < 0 ? B(x()) : E.deltaY > 0 && N(x()), n.update();
    }
    function se(E) {
      let D = !1;
      switch (E.code) {
        case n.keys.UP:
          E.ctrlKey || E.metaKey || E.shiftKey ? O(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(0, n.keyPanSpeed), D = !0;
          break;
        case n.keys.BOTTOM:
          E.ctrlKey || E.metaKey || E.shiftKey ? O(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(0, -n.keyPanSpeed), D = !0;
          break;
        case n.keys.LEFT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(n.keyPanSpeed, 0), D = !0;
          break;
        case n.keys.RIGHT:
          E.ctrlKey || E.metaKey || E.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : F(-n.keyPanSpeed, 0), D = !0;
          break;
      }
      D && (E.preventDefault(), n.update());
    }
    function te() {
      if (S.length === 1)
        d.set(S[0].pageX, S[0].pageY);
      else {
        const E = 0.5 * (S[0].pageX + S[1].pageX), D = 0.5 * (S[0].pageY + S[1].pageY);
        d.set(E, D);
      }
    }
    function re() {
      if (S.length === 1)
        p.set(S[0].pageX, S[0].pageY);
      else {
        const E = 0.5 * (S[0].pageX + S[1].pageX), D = 0.5 * (S[0].pageY + S[1].pageY);
        p.set(E, D);
      }
    }
    function W() {
      const E = S[0].pageX - S[1].pageX, D = S[0].pageY - S[1].pageY, le = Math.sqrt(E * E + D * D);
      w.set(0, le);
    }
    function Ce() {
      n.enableZoom && W(), n.enablePan && re();
    }
    function de() {
      n.enableZoom && W(), n.enableRotate && te();
    }
    function xe(E) {
      if (S.length == 1)
        m.set(E.pageX, E.pageY);
      else {
        const le = ye(E), he = 0.5 * (E.pageX + le.x), ae = 0.5 * (E.pageY + le.y);
        m.set(he, ae);
      }
      g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const D = n.domElement;
      A(2 * Math.PI * g.x / D.clientHeight), O(2 * Math.PI * g.y / D.clientHeight), d.copy(m);
    }
    function ue(E) {
      if (S.length === 1)
        f.set(E.pageX, E.pageY);
      else {
        const D = ye(E), le = 0.5 * (E.pageX + D.x), he = 0.5 * (E.pageY + D.y);
        f.set(le, he);
      }
      _.subVectors(f, p).multiplyScalar(n.panSpeed), F(_.x, _.y), p.copy(f);
    }
    function Fe(E) {
      const D = ye(E), le = E.pageX - D.x, he = E.pageY - D.y, ae = Math.sqrt(le * le + he * he);
      v.set(0, ae), M.set(0, Math.pow(v.y / w.y, n.zoomSpeed)), N(M.y), w.copy(v);
    }
    function Se(E) {
      n.enableZoom && Fe(E), n.enablePan && ue(E);
    }
    function ve(E) {
      n.enableZoom && Fe(E), n.enableRotate && xe(E);
    }
    function nt(E) {
      n.enabled !== !1 && (S.length === 0 && (n.domElement.setPointerCapture(E.pointerId), n.domElement.addEventListener("pointermove", $e), n.domElement.addEventListener("pointerup", Je)), Q(E), E.pointerType === "touch" ? T(E) : qe(E));
    }
    function $e(E) {
      n.enabled !== !1 && (E.pointerType === "touch" ? y(E) : ke(E));
    }
    function Je(E) {
      ne(E), S.length === 0 && (n.domElement.releasePointerCapture(E.pointerId), n.domElement.removeEventListener("pointermove", $e), n.domElement.removeEventListener("pointerup", Je)), n.dispatchEvent(Wa), s = i.NONE;
    }
    function pt(E) {
      ne(E);
    }
    function qe(E) {
      let D;
      switch (E.button) {
        case 0:
          D = n.mouseButtons.LEFT;
          break;
        case 1:
          D = n.mouseButtons.MIDDLE;
          break;
        case 2:
          D = n.mouseButtons.RIGHT;
          break;
        default:
          D = -1;
      }
      switch (D) {
        case kn.DOLLY:
          if (n.enableZoom === !1) return;
          J(E), s = i.DOLLY;
          break;
        case kn.ROTATE:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enablePan === !1) return;
            X(E), s = i.PAN;
          } else {
            if (n.enableRotate === !1) return;
            K(E), s = i.ROTATE;
          }
          break;
        case kn.PAN:
          if (E.ctrlKey || E.metaKey || E.shiftKey) {
            if (n.enableRotate === !1) return;
            K(E), s = i.ROTATE;
          } else {
            if (n.enablePan === !1) return;
            X(E), s = i.PAN;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(xr);
    }
    function ke(E) {
      switch (s) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          ee(E);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          Y(E);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          H(E);
          break;
      }
    }
    function Lt(E) {
      n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE || (E.preventDefault(), n.dispatchEvent(xr), z(E), n.dispatchEvent(Wa));
    }
    function Mt(E) {
      n.enabled === !1 || n.enablePan === !1 || se(E);
    }
    function T(E) {
      switch (oe(E), S.length) {
        case 1:
          switch (n.touches.ONE) {
            case Bn.ROTATE:
              if (n.enableRotate === !1) return;
              te(), s = i.TOUCH_ROTATE;
              break;
            case Bn.PAN:
              if (n.enablePan === !1) return;
              re(), s = i.TOUCH_PAN;
              break;
            default:
              s = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Bn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ce(), s = i.TOUCH_DOLLY_PAN;
              break;
            case Bn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              de(), s = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = i.NONE;
          }
          break;
        default:
          s = i.NONE;
      }
      s !== i.NONE && n.dispatchEvent(xr);
    }
    function y(E) {
      switch (oe(E), s) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          xe(E), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ue(E), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Se(E), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          ve(E), n.update();
          break;
        default:
          s = i.NONE;
      }
    }
    function k(E) {
      n.enabled !== !1 && E.preventDefault();
    }
    function Q(E) {
      S.push(E);
    }
    function ne(E) {
      delete L[E.pointerId];
      for (let D = 0; D < S.length; D++)
        if (S[D].pointerId == E.pointerId) {
          S.splice(D, 1);
          return;
        }
    }
    function oe(E) {
      let D = L[E.pointerId];
      D === void 0 && (D = new _e(), L[E.pointerId] = D), D.set(E.pageX, E.pageY);
    }
    function ye(E) {
      const D = E.pointerId === S[0].pointerId ? S[1] : S[0];
      return L[D.pointerId];
    }
    n.domElement.addEventListener("contextmenu", k), n.domElement.addEventListener("pointerdown", nt), n.domElement.addEventListener("pointercancel", pt), n.domElement.addEventListener("wheel", Lt, { passive: !1 }), this.update();
  }
}
class Gi {
  static createButton(e) {
    const t = document.createElement("button");
    function n() {
      let l = null;
      async function c(u) {
        u.addEventListener("end", h), await e.xr.setSession(u), t.textContent = "EXIT VR", l = u;
      }
      function h() {
        l.removeEventListener("end", h), t.textContent = "ENTER VR", l = null;
      }
      t.style.display = "", t.style.cursor = "pointer", t.style.left = "calc(50% - 50px)", t.style.width = "100px", t.textContent = "ENTER VR", t.onmouseenter = function() {
        t.style.opacity = "1.0";
      }, t.onmouseleave = function() {
        t.style.opacity = "0.5";
      }, t.onclick = function() {
        if (l === null) {
          const u = { optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking", "layers"] };
          navigator.xr.requestSession("immersive-vr", u).then(c);
        } else
          l.end();
      };
    }
    function i() {
      t.style.display = "", t.style.cursor = "auto", t.style.left = "calc(50% - 75px)", t.style.width = "150px", t.onmouseenter = null, t.onmouseleave = null, t.onclick = null;
    }
    function s() {
      i(), t.textContent = "VR NOT SUPPORTED";
    }
    function r(l) {
      i(), console.warn("Exception when trying to call xr.isSessionSupported", l), t.textContent = "VR NOT ALLOWED";
    }
    function o(l) {
      l.style.position = "absolute", l.style.bottom = "20px", l.style.padding = "12px 6px", l.style.border = "1px solid #fff", l.style.borderRadius = "4px", l.style.background = "rgba(0,0,0,0.1)", l.style.color = "#fff", l.style.font = "normal 13px sans-serif", l.style.textAlign = "center", l.style.opacity = "0.5", l.style.outline = "none", l.style.zIndex = "999";
    }
    if ("xr" in navigator)
      return t.id = "VRButton", t.style.display = "none", o(t), navigator.xr.isSessionSupported("immersive-vr").then(function(l) {
        l ? n() : s(), l && Gi.xrSessionIsGranted && t.click();
      }).catch(r), t;
    {
      const l = document.createElement("a");
      return window.isSecureContext === !1 ? (l.href = document.location.href.replace(/^http:/, "https:"), l.innerHTML = "WEBXR NEEDS HTTPS") : (l.href = "https://immersiveweb.dev/", l.innerHTML = "WEBXR NOT AVAILABLE"), l.style.left = "calc(50% - 90px)", l.style.width = "180px", l.style.textDecoration = "none", o(l), l;
    }
  }
  static xrSessionIsGranted = !1;
  static registerSessionGrantedListener() {
    if ("xr" in navigator) {
      if (/WebXRViewer\//i.test(navigator.userAgent)) return;
      navigator.xr.addEventListener("sessiongranted", () => {
        Gi.xrSessionIsGranted = !0;
      });
    }
  }
}
Gi.registerSessionGrantedListener();
const ja = new be();
class Og {
  constructor() {
    this.clock = new El(), this.tmpPosition = new C(), this.sessionActive = !1, this.raycaster = new Ds(), this.VRSessionActive = !1, this.mouseInitialized = !1, this.globalForces = new C(0, -0.1, 0), this.friction = 0.95, this.controllersInitialized = !1, this.handsInitialized = !1, this.orbitControlsActive = !1, this.keyInfo = {
      ArrowRight: { isDown: !1, downTime: 0, speed: 0 },
      ArrowLeft: { isDown: !1, downTime: 0, speed: 0 },
      ArrowUp: { isDown: !1, downTime: 0, speed: 0 },
      ArrowDown: { isDown: !1, downTime: 0, speed: 0 }
    }, this.beforeRender = (t) => {
    }, this.direction = new C(), this.getCameraObject = this.getCameraObject.bind(this), this.container = document.createElement("div"), document.body.appendChild(this.container), this.scene = new Xp(), this.scene.background = new we(1118481), this.background = new Im(this), this.camera = new vt(50, window.innerWidth / window.innerHeight, 0.1, 2e3), this.camera.position.set(0, 1.6, 0), this.audioListener = new Sm(), this.camera.add(this.audioListener), this.dolly = new Ve(), this.dolly.add(this.camera), this.scene.add(this.dolly), this.dummyCam = new Ve(), this.camera.add(this.dummyCam), this.scene.add(new pm(6316128, 4210752));
    const e = new Tl(16777215);
    e.position.set(1, 1, 1).normalize(), this.scene.add(e), e.shadow.mapSize.width = 512, e.shadow.mapSize.height = 512, e.shadow.camera.near = 0.5, e.shadow.camera.far = 1500, this.renderer = new gl({ antialias: !0 }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.outputEncoding = Ue, this.renderer.xr.enabled = !0, this.container.appendChild(this.renderer.domElement), this.renderer.xr.addEventListener("sessionstart", this.onSessionStart.bind(this)), this.renderer.xr.addEventListener("sessionend", this.onSessionEnd.bind(this)), this.rightHand = new ka(1, this.renderer, this.dolly), this.leftHand = new ka(0, this.renderer, this.dolly), this.rightController = new Ga(1, this.renderer, this.dolly), this.leftController = new Ga(0, this.renderer, this.dolly), this.eventManager = new Nm(this), window.addEventListener("resize", this.onWindowResize.bind(this)), this.onWindowResize(), document.body.appendChild(Gi.createButton(this.renderer)), this.render(), this.startAnimate();
  }
  set gravity(e) {
    this.globalForces.setY(e);
  }
  get gravity() {
    return this.globalForces.y;
  }
  initOrbitControls() {
    this.orbitControlsActive || (this.orbitControlsActive = !0, this.controls = new Rg(this.camera, this.renderer.domElement), this.controls.update());
  }
  initMouse() {
    this.mouseInitialized || (this.mouseInitialized = !0, this.mouse = new gg(this.renderer.domElement, this.camera), this.eventManager.initMouse(this.mouse));
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
      ja.identity().extractRotation(this.camera.matrixWorld), this.raycaster.ray.origin.setFromMatrixPosition(this.camera.matrixWorld), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(ja);
      let t = e.children.length, n, i;
      for (; t--; )
        if (n = e.children[t], n.userData.selectable === !0 && (i = this.raycaster.intersectObject(n, !1), i.length > 0))
          return n;
    }
    return null;
  }
  lookAt(e) {
    const t = new C();
    e.getWorldPosition(t), this.camera.lookAt(t);
  }
  onSessionStart() {
    this._session = this.renderer.xr.getSession(), console.log("onSessionStart"), this.controls.enabled = !1, this.VRSessionActive = !0, this.endAnimate(), this.renderer.setAnimationLoop(this.render.bind(this));
  }
  onSessionEnd() {
    console.log("onSessionEnd"), this._session = null, this.controls.enabled = !0, this.VRSessionActive = !1, this.startAnimate(), this.renderer.setAnimationLoop(null);
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
  onWindowResize() {
    const e = window.innerWidth, t = window.innerHeight;
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
export {
  Im as XRBackground,
  Nm as XREventManager,
  ka as XRHand,
  _s as XRHandParts,
  gg as XRMouse,
  Ga as XRRemote,
  Og as XRWorld,
  Ng as clamp,
  Dg as interpolate,
  Pg as rad,
  Ig as rand
};
//# sourceMappingURL=index.js.map
