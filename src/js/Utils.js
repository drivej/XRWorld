export var rad = Math.PI / 180;
export var _rad = 180 / Math.PI;

/**
 * @param {number} n1
 * @param {number} n2
 * @param {number} p
 */
export function interpolate(n1, n2, p) {
  return n1 + (n2 - n1) * p;
}

/**
 * @param {number} n1
 * @param {number} n2
 * @param {boolean | undefined} [rnd]
 */
export function rand(n1, n2, rnd) {
  if (!n2) {
    n2 = n1;
    n1 = 0;
  }
  let n = n1 + Math.random() * (n2 - n1);
  return rnd ? (n + 0.5) | 0 : n;
}

/**
 * @param {number} n
 * @param {number} mn
 * @param {number} mx
 */
export function clamp(n, mn, mx) {
  if (mn < mx) {
    return Math.max(mn, Math.min(mx, n));
  } else {
    return Math.max(mx, Math.min(mn, n));
  }
}
