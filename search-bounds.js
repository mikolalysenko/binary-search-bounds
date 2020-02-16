"use strict"

function Age(a, l, h, y) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (x >= y) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i
};
function Pge(a, l, h, y, c) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (c(x, y) >= 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i
};

function Agt(a, l, h, y) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (x > y) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i
};
function Pgt(a, l, h, y, c) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = h + 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (c(x, y) > 0) { i = m; h = m - 1 } else { l = m + 1 }
  }
  return i
};

function Alt(a, l, h, y) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (x < y) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i
};
function Plt(a, l, h, y, c) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (c(x, y) < 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i
};

function Ale(a, l, h, y) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (x <= y) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i
};
function Ple(a, l, h, y, c) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  var i = l - 1;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (c(x, y) <= 0) { i = m; l = m + 1 } else { h = m - 1 }
  }
  return i
};

function Aeq(a, l, h, y) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    if (x === y) { return m }
    if (x <= y) { l = m + 1 } else { h = m - 1 }
  }
  return -1
};

function Peq(a, l, h, y, c) {
  l = (l === void 0) ? 0 : l | 0;
  h = (h === void 0) ? a.length - 1 : h | 0;
  while (l <= h) {
    var m = (l + h) >>> 1, x = a[m];
    var p = c(x, y);
    if (p === 0) { return m }
    if (p <= 0) { l = m + 1 } else { h = m - 1 }
  }
  return -1
};

module.exports = {
  ge: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? Pge(a, l, h, y, c) : Age(a, c, l, y)
  },
  gt: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? Pgt(a, l, h, y, c) : Agt(a, c, l, y)
  },
  lt: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? Plt(a, l, h, y, c) : Alt(a, c, l, y)
  },
  le: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? Ple(a, l, h, y, c) : Ale(a, c, l, y)
  },
  eq: function (a, y, c, l, h) {
    return (typeof (c) === 'function') ? Peq(a, l, h, y, c) : Aeq(a, c, l, y)
  }
}
