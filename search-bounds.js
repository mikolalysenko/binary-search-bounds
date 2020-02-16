"use strict"

// (a, y, c, l, h) = (array, y[, cmp, lo, hi])

function ge(a, y, c, l, h) {
  if (typeof c === 'function') {
    l = (l === undefined) ? 0 : l | 0;
    h = (h === undefined) ? a.length - 1 : h | 0;
  } else {
    h = (l === undefined) ? a.length - 1 : l | 0;
    l = (c === undefined) ? 0 : c | 0;
    c = undefined;
  }
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c !== undefined) ? c(x, y) : (x - y);
    if (p >= 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i;
};

function gt(a, y, c, l, h) {
  if (typeof c === 'function') {
    l = (l === undefined) ? 0 : l | 0;
    h = (h === undefined) ? a.length - 1 : h | 0;
  } else {
    h = (l === undefined) ? a.length - 1 : l | 0;
    l = (c === undefined) ? 0 : c | 0;
    c = undefined;
  }
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c !== undefined) ? c(x, y) : (x - y);
    if (p > 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i;
};

function lt(a, y, c, l, h) {
  if (typeof c === 'function') {
    l = (l === undefined) ? 0 : l | 0;
    h = (h === undefined) ? a.length - 1 : h | 0;
  } else {
    h = (l === undefined) ? a.length - 1 : l | 0;
    l = (c === undefined) ? 0 : c | 0;
    c = undefined;
  }
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c !== undefined) ? c(x, y) : (x - y);
    if (p < 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i;
};

function le(a, y, c, l, h) {
  if (typeof c === 'function') {
    l = (l === undefined) ? 0 : l | 0;
    h = (h === undefined) ? a.length - 1 : h | 0;
  } else {
    h = (l === undefined) ? a.length - 1 : l | 0;
    l = (c === undefined) ? 0 : c | 0;
    c = undefined;
  }
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c !== undefined) ? c(x, y) : (x - y);
    if (p <= 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i;
};

function eq(a, y, c, l, h) {
  if (typeof c === 'function') {
    l = (l === undefined) ? 0 : l | 0;
    h = (h === undefined) ? a.length - 1 : h | 0;
  } else {
    h = (l === undefined) ? a.length - 1 : l | 0;
    l = (c === undefined) ? 0 : c | 0;
    c = undefined;
  }
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c !== undefined) ? c(x, y) : (x - y);
    if (p === 0) { return m }
    if (p <= 0) { l = m + 1 } else { h = m - 1 }
  }
  return -1;
};

module.exports = {
  ge: ge,
  gt: gt,
  lt: lt,
  le: le,
  eq: eq
}
