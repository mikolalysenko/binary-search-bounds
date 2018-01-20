"use strict"

function _geA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _geP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function ge(a, y, c, l, h) {
  if (typeof c === "function") {
    return _geP(
      a,
      l === void 0 ? 0 : l | 0,
      h === void 0 ? a.length - 1 : h | 0,
      y,
      c
    );
  } else {
    return _geA(
      a,
      c === void 0 ? 0 : c | 0,
      l === void 0 ? a.length - 1 : l | 0,
      y
    );
  }
}

function _gtA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _gtP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function gt(a, y, c, l, h) {
  if (typeof c === "function") {
    return _gtP(
      a,
      l === void 0 ? 0 : l | 0,
      h === void 0 ? a.length - 1 : h | 0,
      y,
      c
    );
  } else {
    return _gtA(
      a,
      c === void 0 ? 0 : c | 0,
      l === void 0 ? a.length - 1 : l | 0,
      y
    );
  }
}

function _ltA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _ltP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function lt(a, y, c, l, h) {
  if (typeof c === "function") {
    return _ltP(
      a,
      l === void 0 ? 0 : l | 0,
      h === void 0 ? a.length - 1 : h | 0,
      y,
      c
    );
  } else {
    return _ltA(
      a,
      c === void 0 ? 0 : c | 0,
      l === void 0 ? a.length - 1 : l | 0,
      y
    );
  }
}

function _leA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _leP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function le(a, y, c, l, h) {
  if (typeof c === "function") {
    return _leP(
      a,
      l === void 0 ? 0 : l | 0,
      h === void 0 ? a.length - 1 : h | 0,
      y,
      c
    );
  } else {
    return _leA(
      a,
      c === void 0 ? 0 : c | 0,
      l === void 0 ? a.length - 1 : l | 0,
      y
    );
  }
}

function _eqA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _eqP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1, x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function eq(a, y, c, l, h) {
  if (typeof c === "function") {
    return _eqP(
      a,
      l === void 0 ? 0 : l | 0,
      h === void 0 ? a.length - 1 : h | 0,
      y,
      c
    );
  } else {
    return _eqA(
      a,
      c === void 0 ? 0 : c | 0,
      l === void 0 ? a.length - 1 : l | 0,
      y
    );
  }
}

module.exports = {
  ge: ge,
  gt: gt,
  lt: lt,
  le: le,
  eq: eq
};
