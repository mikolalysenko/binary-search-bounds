"use strict"

function compileSearch(funcName, predicate, reversed, extraArgs, useNdarray) {
  var code = [
    "function ", funcName, "(a,l,h,", extraArgs.join(","),  "){\
var i=", (reversed ? "l-1" : "h+1"),
";while(l<=h){\
var m=(l+h)>>>1,x=a", useNdarray ? ".get(m)" : "[m]",
";if(", predicate, "){i=m;" ]
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}return i};")
  return code.join("")
}

function compileBoundsSearch(predicate, reversed, suffix) {
  var code = [
  compileSearch("A", "x" + predicate + "y", reversed, ["y"]),
  compileSearch("B", "x" + predicate + "y", reversed, ["y"], true),
  compileSearch("P", "c(x,y)" + predicate + "0", reversed, ["y", "c"]),
  compileSearch("Q", "c(x,y)" + predicate + "0", reversed, ["y", "c"], true),
"function dispatchBsearch", suffix, "(a,y,c,l,h){\
if(a.shape){\
if(typeof(c)==='function'){\
return Q(a,(l===undefined)?0:l|0,(h===undefined)?a.shape[0]-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.shape[0]-1:l|0,y)\
}}else{\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return A(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}}\
return dispatchBsearch", suffix].join("")
  console.log(code)
  var result = new Function(code)
  return result()
}

module.exports = {
  ge: compileBoundsSearch(">=", false, "GE"),
  gt: compileBoundsSearch(">", false, "GT"),
  lt: compileBoundsSearch("<", true, "LT"),
  le:  compileBoundsSearch("<=", true, "LE")
}
