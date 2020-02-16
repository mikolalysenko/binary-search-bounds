"use strict"

function ge(a, l, h, y, c) {
  l = (l === undefined) ? 0 : l | 0;
  h = (h === undefined) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c!==undefined) ? c(x, y) : (x-y);
    if (p >= 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i;
};

function gt(a, l, h, y, c) {
  l = (l === undefined) ? 0 : l | 0;
  h = (h === undefined) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c!==undefined) ? c(x, y) : (x-y);
    if (p > 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i;
};

function lt(a, l, h, y, c) {
  l = (l === undefined) ? 0 : l | 0;
  h = (h === undefined) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c!==undefined) ? c(x, y) : (x-y);
    if (p < 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i;
};

function le(a, l, h, y, c) {
  l = (l === undefined) ? 0 : l | 0;
  h = (h === undefined) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c!==undefined) ? c(x, y) : (x-y);
    if (p <= 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i;
};

function eq(a, l, h, y, c) {
  l = (l === undefined) ? 0 : l | 0;
  h = (h === undefined) ? a.length - 1 : h | 0;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = (c!==undefined) ? c(x, y) : (x-y);
    if (p === 0) { return m }
    if (p <= 0) { l = m + 1 } else { h = m - 1 }
  }
  return -1;
};

module.exports = {
  ge: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? ge(a, l, h, y, c) : ge(a, c, l, y)
  },
  gt: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? gt(a, l, h, y, c) : gt(a, c, l, y)
  },
  lt: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? lt(a, l, h, y, c) : lt(a, c, l, y)
  },
  le: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? le(a, l, h, y, c) : le(a, c, l, y)
  },
  eq: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? eq(a, l, h, y, c) : eq(a, c, l, y)
  }
}
