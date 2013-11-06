"use strict"

function compileSearch(predicate, reversed, extraArgs) {
  var args = ["a", "l", "h"].concat(extraArgs)
  var code = [
    "var i=" + (reversed ? "l-1" : "h+1"),
    "while(l<=h){",
      "var m=(l+h)>>>1,x=a[m]",
      ["if(", predicate, "){"].join(""),
        "i=m" ]
  if(reversed) {
    code.push("l=m+1}else{h=m-1}")
  } else {
    code.push("h=m-1}else{l=m+1}")
  }
  code.push("}return i")
  args.push(code.join("\n"))
  return Function.apply(undefined, args)
}

function compileBoundsSearch(predicate, reversed) {
  var basicSearch = compileSearch("x" + predicate + "y", reversed, ["y"])
  var paramSearch = compileSearch("c(x,y)" + predicate + "0", reversed, ["y", "c"])

  var code = "function dispatch(a,y,c,l,h){\
if(typeof(c)==='function'){\
return P(a,(l===undefined)?0:l|0,(h===undefined)?a.length-1:h|0,y,c)\
}else{\
return B(a,(c===undefined)?0:c|0,(l===undefined)?a.length-1:l|0,y)\
}}\
return dispatch"

  var result = new Function("B", "P", code)
  return result(basicSearch, paramSearch)
}

module.exports = {
  ge: compileBoundsSearch(">=", false),
  gt: compileBoundsSearch(">", false),
  lt: compileBoundsSearch("<", true),
  le:  compileBoundsSearch("<=", true)
}
